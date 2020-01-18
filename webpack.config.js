module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/, loader: 
                "style-loader!css-loader"},
                //have to check the babel integration config
                // {
                //     test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules)/, query: {presets: ['es2015']}
                // }
        ]
    }
}
