import type { LoaderContext } from 'webpack';


/**
 * Interpolates a filename template using multiple placeholders and/or a regular expression.
 * The template and regular expression are set as query params called name and regExp on the current loader's context.
 * {@link https://github.com/webpack/loader-utils#interpolatename}
 */
declare function interpolateName(loaderContext: LoaderContext, name: string, options?: any): string;

export = interpolateName;
