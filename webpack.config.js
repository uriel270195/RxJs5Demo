module.exports = {
    entry: "./main",
    output: { filename: "app.js" }, //genera el archivp
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
        //transforma de ts a js
    }
}