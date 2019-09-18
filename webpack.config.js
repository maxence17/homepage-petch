// webpack.config.js
// ....
devServer: {
    hot: true,
    port: 8080
}
// ...
plugins: [
    new HotModuleReplacementPlugin(),
    // other plugins...
]
