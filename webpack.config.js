import "./src/types/typedoc";
import TypedocWebpackPlugin from "typedoc-webpack-plugin";

module.exports = {
    plugins: [
        new TypedocWebpackPlugin({
            name: "Contoso",
            mode: "file",
            theme: "./typedoc-theme/",
            includeDeclarations: false,
            ignoreCompilerErrors: true,
        })
    ]
};
// add to webpack plugins

