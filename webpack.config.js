module.exports = {
     // compiler options 
     entry: './src/app.ts' , // imports/exports the output
     output : {
        filename: 'app.js',
        path: __dirname + './dist',
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            { test: /\.ts$/, use: 'awesome-typescript-loader' }
        ]
    },
    devServer: {
        port: 9090
    }
};