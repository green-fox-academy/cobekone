1. create new folder for the project
2. initialize with `npm init` or `npm init -y` if you don't want to change the default settings
3. install some packages `npm install --save-dev ts-loader typescript webpack webpack-cli`
4. `mkdir src dist`
5. create `index.html` in `dist/` folder
6. add below html to you index
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script src="bundle.js"></script>
</body>

</html>
```
7. create a `tsconfig.json` in root with the below content
```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    "target": "es6",
  },
}
```
8. create `webpack.config.js` in root with the below content
```
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
9. in `package.json` add this line to `scripts` section:

```"start": "webpack --mode development --watch"```

10. `touch src/index.ts`
11. start VS Code Live Server in `dist/`
12. `npm start` in root
12. start coding in `src/index.ts`