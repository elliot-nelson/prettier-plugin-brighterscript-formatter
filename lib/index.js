const { Formatter } = require('brighterscript-formatter');

const { getPrettierOptions, extractBsfmtOptions } = require('./options');

const languages = [
  {
    extensions: [ '.bs', '.brs' ],
    type: 'programming',
    name: 'BrighterScript',
    parsers: ['brighterscript']
  }
];

const parsers = {
  brighterscript: {
    parse(text, _, opts) {
      return {
        type: 'full-bs-text-node',
        value: text
      };
    },
    astFormat: 'brighterscript-ast',
    locStart: () => 0,
    locEnd: () => 0
  }
};

const printers = {
  'brighterscript-ast': {
    print(path, opts) {
      const formatter = new Formatter();
      const node = path.stack[0];

      switch (node.type) {
        case 'full-bs-text-node':
          return formatter.format(node.value, extractBsfmtOptions(opts));
        default:
          throw new Error('Unknown AST node in BrighterScript file: ' + path.type);
      }
    }
  }
};

module.exports = {
  languages,
  parsers,
  printers,
  options: getPrettierOptions()
};

/*
    preprocess(text, options) {
      if (parser.preprocess) {
        text = parser.preprocess(text, options)
      }

      return options.filepath && /\.(bs|brs)$/.test(options.filepath)
        ? doSomething(text)
        : text
    },
  },
}
*/
