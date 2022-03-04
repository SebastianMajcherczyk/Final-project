const path = require("path");
const entryPath = "final-project";
// const entryPath = "Playground";

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './' + path.join(entryPath, 'js/app.js'),
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, path.join(entryPath, 'biuld')),
        publicPath: '/build',
    },
    module: {
        rules: [
            {
              test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, entryPath),
        },
        compress: true,
    }

};


//     entry: `./${entryPath}/js/app.js`,
//     output: {
//         filename: "out.js",
//         path: path.resolve(__dirname, `${entryPath}/build`)
//     },
//     devServer: {
//         contentBase: path.join(__dirname, `${entryPath}`),
//         publicPath: "/build/",
//         compress: true,
//         port: 3001
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: "babel-loader"
//             }
//         ]
//     }
// };
