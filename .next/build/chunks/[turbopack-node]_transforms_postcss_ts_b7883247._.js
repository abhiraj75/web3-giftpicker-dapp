module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/giftpicker/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/50ead_cbdcc9b5._.js",
  "build/chunks/[root-of-the-server]__beddd1d8._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/giftpicker/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];