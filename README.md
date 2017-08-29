<a id="markdown-versions-checker" name="versions-checker"></a>
# Versions Checker 

Versions Checker [![Build Status](https://travis-ci.org/sridharmallela/versions-checker.svg?branch=master)](https://travis-ci.org/sridharmallela/versions-checker)

Check installed versions of node, npm, yarn, and git 


<a id="markdown-table-of-contents" name="table-of-contents"></a>
## Table of Contents

<!-- TOC -->

- [Versions Checker](#versions-checker)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
        - [Global CLI](#global-cli)
        - [Non CLI](#non-cli)
    - [Usage](#usage)
        - [Non CLI](#non-cli-1)
        - [Options](#options)
            - [help (-h|--help)](#help--h--help)
    - [Updating versions-checker](#updating-versions-checker)

<!-- /TOC -->


<a id="markdown-installation" name="installation"></a>
## Installation

<a id="markdown-global-cli" name="global-cli"></a>
### Global CLI

```bash
    $ npm install -g versions-checker
```

<a id="markdown-non-cli" name="non-cli"></a>
### Non CLI

```bash
    $ npm install --save versions-checker
```


<a id="markdown-usage" name="usage"></a>
## Usage

```bash 
$ versions-checker --node ">4.5.0"

```


<a id="markdown-non-cli-1" name="non-cli-1"></a>
### Non CLI

```js

    var validate = require('versions-checker');

    // returns boolean
    const isValid = validate({
        node: '',
        npm: '',
        yarn: '',
        git: ''
    });

    const isNodeValid = validate({ node: ''});
```


<a id="markdown-options" name="options"></a>
### Options

<a id="markdown-help--h--help" name="help--h--help"></a>
#### help (-h|--help) 

specifies how to use versions-checker


<a id="markdown-updating-versions-checker" name="updating-versions-checker"></a>
## Updating versions-checker

Global package:
```bash
    $ npm uninstall -g versions-checker
    $ npm cache clean
    $ npm install -g versions-checker


## License

MIT
