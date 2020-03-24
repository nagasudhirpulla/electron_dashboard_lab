const path = require('path');

module.exports = {
    entry: {
        main: ['babel-polyfill', path.resolve(__dirname, 'src/main.ts')]
    },

    output: {
        filename: 'bundle.[name].js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    target: 'electron-main',

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

    plugins: [],

    externals: {
        // don't bundle the 'react' npm package with our bundle.js, but get it from a global 'React' variable
        // for this, use the script tag so in index.html to get the React variable
        'react': 'React',
        'react-dom': 'ReactDOM'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }
};