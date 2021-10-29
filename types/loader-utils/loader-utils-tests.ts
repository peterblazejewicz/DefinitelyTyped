import webpack = require('webpack');
import { urlToRequest, interpolateName, getHashDigest, isUrlRequest } from 'loader-utils';

function loader(this: webpack.loader.LoaderContext) {
    // get options readonly
    const options = this.getOptions();
    // $ExpectError
    options.prop = {};
}

urlToRequest('path/to/module.js'); // "./path/to/module.js"
urlToRequest('~path/to/module.js'); // "path/to/module.js"
urlToRequest('/path/to/module.js', './root'); // "./root/path/to/module.js"
urlToRequest('/path/to/module.js', '~'); // "path/to/module.js"
isUrlRequest('path/to/module.js');
isUrlRequest('~path/to/module.js');
isUrlRequest('/path/to/module.js', './root');
isUrlRequest('/path/to/module.js', '~');

function loader2(this: webpack.loader.LoaderContext) {
    // loaderContext.resourcePath = "/app/js/javascript.js"
    interpolateName(this, 'js/[hash].script.[ext]', { content: '' });
    // => js/9473fdd0d880a43c21b7778d34872157.script.js

    // loaderContext.resourcePath = "/app/page.html"
    interpolateName(this, 'html-[hash:6].html', { content: '' });
    // => html-9473fd.html

    // loaderContext.resourcePath = "/app/flash.txt"
    interpolateName(this, '[hash]', { content: '' });
    // => c31e9820c001c9c4a86bce33ce43b679

    // loaderContext.resourcePath = "/app/img/image.gif"
    interpolateName(this, '[emoji]', { content: '' });
    // => 👍

    // loaderContext.resourcePath = "/app/img/image.gif"
    interpolateName(this, '[emoji:4]', { content: '' });
    // => 🙍🏢📤🐝

    // loaderContext.resourcePath = "/app/img/image.png"
    interpolateName(this, '[sha512:hash:base64:7].[ext]', { content: '' });
    // => 2BKDTjl.png
    // use sha512 hash instead of md5 and with only 7 chars of base64

    // loaderContext.resourcePath = "/app/img/myself.png"
    // loaderContext.query.name =
    interpolateName(this, 'picture.png');
    // => picture.png

    // loaderContext.resourcePath = "/app/dir/file.png"
    interpolateName(this, '[path][name].[ext]?[hash]', { content: '' });
    // => /app/dir/file.png?9473fdd0d880a43c21b7778d34872157

    // loaderContext.resourcePath = "/app/js/page-home.js"
    interpolateName(this, 'script-[1].[ext]', { regExp: 'page-(.*)\\.js', content: '' });
    // => script-home.js
}

const buffer = Buffer.from('');
const digestString = getHashDigest(buffer, 'sha512', 'hex', 32);
