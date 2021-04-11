require('colors');
const fs = require('fs');
const templates = require('./templates');
const { isPascalCase } = require('./formats');

const COMPONENT_TYPES = ['atom', 'molecule', 'organism', 'icon'];

function validateComponent({ componentType, componentName }) {
  if (!componentType || !COMPONENT_TYPES.includes(componentType)) {
    console.error('\nPlease supply a valid component type'.red);
    console.error(
      'It must be one of the following: ' +
        `[${COMPONENT_TYPES}]`.bgMagenta.white +
        '\n'
    );
    process.exit(1);
  }

  if (!isPascalCase(componentName)) {
    console.error(
      '\nThe component name must be in pascal case (ComponentName)\n'.red
    );
    process.exit(1);
  }

  if (!componentName) {
    console.error('\nPlease supply a valid component name\n'.red);
    process.exit(1);
  }
}

function createFileDirectory({
  componentsDirectory,
  componentTypeDirectory,
  componentDirectory,
  componentType,
  componentName
}) {
  if (!fs.existsSync(componentsDirectory)) {
    fs.mkdirSync(componentsDirectory);
  }

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
}

function generateTemplateFiles({
  componentFileName,
  componentName,
  componentType,
  componentDirectory
}) {
  const selectedTemplates =
    componentType === 'icon' ? 'iconTemplates' : 'componentTemplates';

  const generatedTemplates = templates[selectedTemplates].map(template =>
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
    `export * from './${componentFileName}'`
  );
}

module.exports = {
  validateComponent,
  createFileDirectory,
  generateTemplateFiles
};
