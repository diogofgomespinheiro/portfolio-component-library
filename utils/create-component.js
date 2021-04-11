require('colors');

const {
  validateComponent,
  createFileDirectory,
  generateTemplateFiles
} = require('./create-component.helpers');
const { toKebabCase } = require('./formats');

const componentType = process.argv[2];
const componentName = process.argv[3];

validateComponent({ componentType, componentName });

console.log('Creating Component Templates with name: ' + componentName.blue);

const componentFileName = toKebabCase(componentName);
const componentsDirectory = './src/components';
const componentTypeDirectory = `${componentsDirectory}/${componentType}s`;
const componentDirectory = `${componentTypeDirectory}/${componentFileName}`;

createFileDirectory({
  componentsDirectory,
  componentTypeDirectory,
  componentDirectory,
  componentType,
  componentName
});

generateTemplateFiles({
  componentFileName,
  componentName,
  componentType,
  componentDirectory
});

console.log(
  '\nSuccessfully created component under: ' + componentDirectory.green
);
