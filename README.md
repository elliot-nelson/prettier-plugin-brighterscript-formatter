# prettier-plugin-brighterscript-formatter

A [Prettier] plugin that formats BrightScript and BrighterScript files using the [brighterscript-formatter] package.

[prettier]: https://github.com/prettier/prettier
[brighterscript-formatter]: https://github.com/rokucommunity/brighterscript-formatter

## Installation

```console
npm i -D prettier prettier-plugin-brighterscript-formatter
```

## Options

In this plugin, options for the BrighterScript formatter are prefixed with `bsfmt`, followed by the relevant option name in camel case.

For example, if you have the following settings in your `bsfmt.json`:

```json
{
  "keywordCase": "lower",
  "indentSpaceCount": 2
}
```

You would instead add this to your `.prettierrc.js`:

```json
{
  "bsfmtKeywordCase": "lower",
  "bsfmtIndentSpaceCount": 2
}
```

Refer to the [bsfmt.json spec](https://github.com/rokucommunity/brighterscript-formatter#bsfmtjson-options) for the full list of options.
