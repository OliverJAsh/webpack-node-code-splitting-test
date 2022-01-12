const syncImport = (weakId) =>
    __webpack_modules__[weakId] !== undefined
        ? __webpack_require__(weakId)
        : undefined;

const load = (weakId, asyncImport, cb) => {
    const syncMod = syncImport(weakId);
    if (syncMod !== undefined) {
        cb(syncMod);
    } else {
        console.log("loading");
        asyncImport().then(cb);
    }
};

console.log("before");

load(
    // At build time webpack will replace this with the module ID, but it won't
    // bundle the module (hence the word "weak").
    require.resolveWeak("./my-chunk"),
    // At build time this tells webpack to create a chunk, and this function
    // will be used at runtime to load the module if needed.
    () => import("./my-chunk"),
    (mod) => {
        // - On the server this will run synchronously because the module has
        //   already been loaded. This is because we use `LimitChunkCountPlugin`
        //   in the server webpack config to force all dynamic imports to bundle
        //   in the main chunk, meaning they can be imported synchronously.
        // - On the client this will run asynchronously because the module needs
        //   to be loaded, unless the module has been loaded already by the HTML
        //   (see comment in `index.html`).
        console.log(mod.foo);
    }
);

console.log("after");
