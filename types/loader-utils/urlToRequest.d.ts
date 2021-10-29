/**
 * Converts some resource URL to a webpack module request.
 * {@link https://github.com/webpack/loader-utils#urltorequest}
 */
declare function urlToRequest(url: string, root?: string): string;

export = urlToRequest;
