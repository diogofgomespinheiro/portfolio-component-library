function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

function isPascalCase(word) {
  return /^[A-Z][A-Za-z]*$/.test(word);
}

module.exports = {
  toKebabCase,
  isPascalCase
};
