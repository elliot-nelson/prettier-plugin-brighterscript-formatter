// These options for the BrighterScript formatter are expressed as Prettier Plugin Options
// See https://prettier.io/docs/en/plugins.html#options
//
// For options reference see https://github.com/rokucommunity/brighterscript-formatter#bsfmtjson-options
const bsfmtOptions = {
  indentStyle: {
    type: 'choice',
    choices: [
      { key: 'tabs', value: 'tabs' },
      { key: 'spaces', value: 'spaces' },
    ],
    default: 'spaces',
    description:
      'The type of whitespace to use when indenting the beginning of lines. Has no effect if formatIndent is false.',
  },
  indentSpaceCount: {
    type: 'int',
    default: 4,
    description:
      'The number of spaces to use when indentStyle is "spaces". Default is 4. Has no effect if formatIndent is false or if indentStyle is set to "tabs".',
  },
  formatIndent: {
    type: 'boolean',
    default: true,
    description:
      'The number of spaces to use when indentStyle is "spaces". Default is 4. Has no effect if formatIndent is false or if indentStyle is set to "tabs".',
  },
  keywordCase: {
    type: 'choice',
    choices: [
      { key: 'lower', value: 'lower' },
      { key: 'upper', value: 'upper' },
      { key: 'title', value: 'title' },
      { key: 'original', value: 'original' },
    ],
    default: 'lower',
    description:
      'Replaces all keywords with the upper or lower case settings specified (excluding types...see typeCase). If set to "original", they are not modified at all.',
  },
};

function getPrettierOptions() {
  const result = {};

  for (const key of Object.keys(bsfmtOptions)) {
    let bsfmtKey = 'bsfmt' + key[0].toUpperCase() + key.slice(1);
    result[bsfmtKey] = bsfmtOptions[key];
  }

  return result;
}

function extractBsfmtOptions(context) {
  const result = {};

  for (const key of Object.keys(context)) {
    if (key.startsWith('bsfmt')) {
      let bsfmtKey = key.replace(/^bsfmt/, '');
      bsfmtKey = bsfmtKey[0].toLowerCase() + bsfmtKey.slice(1);
      result[bsfmtKey] = context[key];
    }
  }

  return result;
}

module.exports = {
  getPrettierOptions,
  extractBsfmtOptions,
};
