const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const util = require('./util');

try {
    const theme = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '../src/themes/default.yml'), 'utf8'));
    
    util.writeFile(
        path.join(
            __dirname,
            '../src/components/assets/themes',
            `${theme.name}.json`
        ),
        JSON.stringify(theme)
    )

    console.log(`***** Generated theme, "${theme.name}" from YAML file`);

} catch (e) {
    console.log(e);
}