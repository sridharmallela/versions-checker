function validateEach(e){try{conf[e].actual=findOutVersion(e),conf[e].isValid=semver.satisfies(conf[e].actual,conf[e].expected)}catch(o){conf[e].actual="",conf[e].isValid=!1}}function findOutVersion(e){return String(childProcess.execSync(e+" --version",{cwd:"./node_modules/.bin/"})).replace(/[^0-9.]/gm,"")}var childProcess=require("child_process"),colors=require("colors/safe"),semver=require("semver"),options=["node","npm","yarn","git","karma","gulp","grunt","eslint","tslint","nvm","n"],conf={},isValid=!0;module.exports.validate=function(e){return options.filter(function(o){return e[o]&&!0!==e[o]}).forEach(function(o){conf[o]={expected:e[o],actual:"",isValid:!1},validateEach(o),conf[o].isValid?console.log(colors.green("    "+o+": "+conf[o].actual)):(isValid=!1,console.log(colors.red("    "+o+": "+conf[o].actual+" but expected is "+conf[o].expected)))}),isValid},module.exports.checkAll=function(){var e={};return options.forEach(function(o){try{e[o]=findOutVersion(o),e[o]&&console.log(colors.green("    "+o+": "+e[o]))}catch(c){delete e[o]}}),e};