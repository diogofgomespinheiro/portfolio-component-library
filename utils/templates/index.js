const component = require('./components/component');
const componentTypes = require('./components/component.types');
const componentStories = require('./components/component.stories');
const componentTests = require('./components/component.spec');
const componentStyles = require('./components/component.styles');
const componentTheme = require('./components/component.theme');

const icon = require('./icons/icon');
const iconStories = require('./icons/icon.stories');

const componentTemplates = [
  component,
  componentTypes,
  componentStories,
  componentTests,
  componentStyles,
  componentTheme
];

const iconTemplates = [icon, iconStories];

module.exports = { componentTemplates, iconTemplates };
