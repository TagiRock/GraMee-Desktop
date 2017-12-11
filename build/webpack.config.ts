import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
/* tslint:disable:interface-name*/
interface Config extends webpack.Configuration {
  module: {
    rules: webpack.NewUseRule[]
  };
}
interface NewUseRule extends webpack.NewUseRule {
  use: webpack.NewLoader | webpack.NewLoader[];
}

const workdir = path.join(__dirname, "../");
const rules: NewUseRule[] = [
  {
    test: /\.vue$/,
    use: {
      loader: "vue-loader",
      options: {
        loaders: {
          scss: "vue-style-loader!css-loader!sass-loader", // <style lang="scss">
          sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax" // <style lang="sass">
        }
      }
    }
  },
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "ts-loader",
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    }
  },
  {
    test: /\.pug$/,
    use: {
      loader: "pug-loader"
    }
  },
  {
    test: /\.scss$/,
    use: [
      {loader: "style-loader"},
      {loader: "css-loader"},
      {loader: "sass-loader"}
    ]
  },
  {
    test: /\.(jpeg|jpg|png|gif|svg)$/,
    use: {
      loader: "file-loader?name=[hash].[ext]"
    }
  },
  {
    test: /\.(ttf|eot|woff2|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: {
      loader: "file-loader?name=[hash].[ext]"
    }
  }
];
const config: Config = {
  entry: path.join(workdir, "./src/app.ts"),
  output: {
    path: path.join(workdir, "./dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".vue", ".js", ".json"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(workdir, "./src/app.pug"),
      inject: "body"
    })
  ],
  devServer: {
    inline: true,
    contentBase: path.join(workdir, "./dist")
  },
  devtool: "inline-source-map"
};

module.exports = config;
