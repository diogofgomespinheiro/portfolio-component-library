require('colors');
const fs = require('fs');
const templates = require('./templates');
const { toKebabCase } = require('./formats');

const COMPONENT_TYPES = ['atom', 'molecule', 'organism'];

const componentType = process.argv[2];
const componentName = process.argv[3];

if (!componentType || !COMPONENT_TYPES.includes(componentType)) {
  console.error('\nPlease supply a valid component type'.red);
  console.error(
    'It must be one of the following: ' +
      `[${COMPONENT_TYPES}]`.bgMagenta.white +
      '\n'
  );
  process.exit(1);
}

if (!componentName) {
  console.error('\nPlease supply a valid component name\n'.red);
  process.exit(1);
}

console.log('Creating Component Templates with name: ' + componentName.blue);

const componentFileName = toKebabCase(componentName);
const componentTypeDirectory = `./src/${componentType}s`;
const componentDirectory = `${componentTypeDirectory}/${componentFileName}`;

if (!fs.existsSync(componentTypeDirectory)) {
  fs.mkdirSync(componentTypeDirectory);
}

if (fs.existsSync(componentDirectory)) {
  console.error(
    `\nComponent ${componentName} already exists under the ${componentType}s folder.\n`
      .red
  );
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map(template =>
  template({ componentFileName, componentName, componentType })
);

generatedTemplates.forEach(template => {
  fs.writeFileSync(
    `${componentDirectory}/${componentFileName}${template.extension}`,
    template.content
  );
});

fs.writeFileSync(
  `${componentDirectory}/index.ts`,
  `export { default } from './${componentFileName}'`
);

console.log(
  '\nSuccessfully created component under: ' + componentDirectory.green
);
