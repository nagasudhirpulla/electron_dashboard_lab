const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
    entry: {
        client: ['babel-polyfill', path.resolve(__dirname, 'src/clients/client/client.tsx')]
    },

    output: {
        filename: 'bundle.[name].js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    target: 'electron-renderer',

    module: {
        rules: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/client.html'),
            chunks: ['client'],
            filename: './client.html'
        })
    ],

    externals: {
        // don't bundle the 'react' npm package with our bundle.js, but get it from a global 'React' variable
        // for this, use the script tag so in index.html to get the React variable
        'react': 'React',
        'react-dom': 'ReactDOM',
        "toastr": "toastr",
        "react-plotly.js": "createPlotlyComponent",
        "plotly.js-cartesian-dist": "Plotly"
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }
};