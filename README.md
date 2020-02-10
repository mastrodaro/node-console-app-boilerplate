# Nodejs console app boilerplate
![](docs/webpack.png "Webpack")
![](docs/plus.png "")
![](docs/babel.png "Babel")
![](docs/plus.png "")
![](docs/eslint.png "ESLint")
![](docs/plus.png "")
![](docs/prettier.png "Prettier")
![](docs/plus.png "")
![](docs/jest.png "Jest")

Project skeleton ready to development of node.js console application.

# How to use
Change `name` and `bin` command in *package.json*:
```
{
  "name": "<app name>",
  "bin": {
    "<command name>": "..."
  }
}
```
Remove `docs`, edit README. Then `npm run build` to generate `lib/main.js` and package is ready to `npm publish`.

# Useful packages
```
npm install chalk clear clui inquirer yargs configstore
``` 

* [chalk](https://github.com/chalk/chalk) - terminal string styling
* [clear](https://github.com/bahamas10/node-clear) - clears the terminal screen
* [clui](https://github.com/nathanpeck/clui) - terminal ui toolkit
* [inquirer](https://github.com/SBoudrias/Inquirer.js) - terminal interactive commands
* [yargs](https://github.com/yargs/yargs) - parses arguments and options
* [configstore](https://github.com/yeoman/configstore) - loads and saves config
