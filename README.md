[![npm version](https://badge.fury.io/js/node-poe-api.svg)](https://badge.fury.io/js/node-poe-api)

# Path of Exile API

A minimal module exposing the Path of Exile stash tabs API. Typescript is supported.

# Getting Started

`npm install node-poe-api`

# Example

```
const poe = require('node-poe-api');

(async () => {
    const result = await poe.stashTabs();
    console.log(result);
})();
```

# Docs

[Click here](https://github.com/stephenpoole/node-poe-api/blob/master/docs/globals.md)

# Contributing

Pull requests are always welcome.
