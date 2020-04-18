// Type definitions for webpack-appcache-plugin 1.0
// Project: https://github.com/SaravananRajaraman/webpack-appcache-plugin
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import webpack = require('webpack');

/**
 * Generate an HTML5 Application Cache for a Webpack build
 */
declare class AppCachePlugin extends webpack.Plugin {
    AppCache: AppCachePlugin.AppCache;
    constructor(options?: AppCachePlugin.Options);
}

declare namespace AppCachePlugin {
    interface Options {
        /**
         * 'additional assets to cache
         */
        cache?: string[];
        /**
         * Assets that may be accessed via the network.
         * @default ['*']
         */
        network?: string[] | null;
        /**
         * Fallback assets
         */
        fallback?: string[];
        /**
         * Settings
         */
        settings?: string[];
        /**
         * Assets in the compilation that match any of these patterns will be excluded from the manifest.
         * @default []
         */
        exclude?: Array<string | RegExp>;
        /**
         * The filename to write the appcache to
         * @default 'manifest.appcache'
         */
        output?: string;
        /**
         * @default ''
         */
        comment?: string;
        /**
         * Override the path on run time.
         * @default ''
         */
        publicPath?: string;
    }

    class AppCache {
        constructor(
            cache: string,
            network: string[],
            fallback: string[],
            settings: string[],
            hash: string,
            comment: string,
            publicPath: string
        );
        addAsset(asset: string): void;
        size(): number;
        getManifestBody(): string;
        source(): string;
    }
}

export = AppCachePlugin;
