const parser = require('js-yaml');
const util = require('../scripts/util')

module.exports = function (source) {
    this.cacheable && this.cacheable();
    
    try {
        const yamlStr = util.readFile(this.resourcePath).toString();
        const yamlJSON = parser.safeLoad(yamlStr);
        let yamlURL = '';

        if (this.loaders.length > 1) {
            const parentLoader = this.loaders[this.loaderIndex + 1];
            if (parentLoader && parentLoader.path.split('/').indexOf('file-loader')) {
                yamlURL = `/${source.split('"')[1]}`;
            }
        }

        return 'module.exports = ' + JSON.stringify({
            url: yamlURL,
            json: yamlJSON,
            string: yamlStr
        });
    } catch(e) {
        throw new Error(e);
    }
}
