const { Formatter } = require('brighterscript-formatter');
const { getPrettierOptions, extractBsfmtOptions } = require('./options');

// https://prettier.io/docs/en/plugins.html#languages
const languages = [
  {
    extensions: ['.bs', '.brs'],
    type: 'programming',
    name: 'BrighterScript',
    parsers: ['brighterscript'],
  },
];

// https://prettier.io/docs/en/plugins.html#parsers
const parsers = {
  brighterscript: {
    parse(text, _, opts) {
      // Currently, the BrighterScript formatter isn't designed to produce an intermediate
      // AST, so our parse/print routines are a sham... we are essentially skipping all of
      // Prettier's usual internals by passing the entire source text as a single "node".
      return {
        type: 'full-bs-text-node',
        value: text,
      };
    },
    astFormat: 'brighterscript-ast',
    locStart: () => 0,
    locEnd: () => 0,
  },
};

// https://prettier.io/docs/en/plugins.html#printers
const printers = {
  'brighterscript-ast': {
    print(path, opts) {
      // Unwrap the single expected path (an entire source text node) and format it.
      const formatter = new Formatter();
      const node = path.stack[0];

      switch (node.type) {
        case 'full-bs-text-node':
          return formatter.format(node.value, extractBsfmtOptions(opts));
        default:
          throw new Error('Unknown AST node in BrighterScript file: ' + path.type);
      }
    },
  },
};

module.exports = {
  languages,
  parsers,
  printers,
  options: getPrettierOptions(),
};
