cd  build/
tsc --lib es6 webpack.config.ts
webpack --progress --hide-modules --config webpack.config.js
rm webpack.config.js