var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var chokidar = require('chokidar');
var parse = require('react-docgen').parse;

var util = require('./util');


var paths = {
    components: path.join(__dirname, '../src', 'components'),
    examples: path.join(__dirname, '../src', 'docs', 'examples'),
    output: path.join(__dirname, '../config', 'componentData.js'),
};

var ignoredFolders = ['assets', 'BuiTheme'];


const enableWatchMode = process.argv.slice[2] === '--watch'
if (enableWatchMode) {
    chokidar.watch([paths.examples, paths.components]).on('change', function(event, path) {
        generate(paths);
    });
} else {
    generate(paths);
}


function generate(paths) {
    var errors = [];
    var componentData = util.getDirectories(paths.components)
        .filter(function(componentName) {
          return ignoredFolders.indexOf(componentName) === -1;
        })
        .map(function(componentName) {
            if (componentName !== '__tests__' ) {
                try {
                    return getComponentData(paths, componentName);
                } catch(error) {
                    errors.push('An error occurred while generating metadata for ' + componentName + '.\n' + error);
                }
            }
            return null;
        });
    return util.writeFile(
        paths.output,
        "module.exports = " + JSON.stringify(
            errors.length ?
                errors
                :
                componentData.filter(function (component) {
                    return component;
        })),
        function() {
          console.log(chalk.green('Component data saved'))
        }
    );
}

function getComponentData(paths, componentName) {
    var content = util.readFile(path.join(paths.components, componentName, 'index.js'));
    var info = parse(content);
    return {
        name: componentName,
        description: info.description,
        props: info.props,
        code: content,
        examples: getExampleData(paths.examples, componentName)
    }
}

function getExampleData(examplesPath, componentName) {
    var examples = getExampleFiles(examplesPath, componentName);
    return examples.map(function(file) {
        var filePath = path.join(examplesPath, componentName, file);
        var content = util.readFile(filePath);
        var info = parse(content);
        return {
            code: content,
            name: file.slice(0, -3),
            description: info.description,
        };
    });
}

function getExampleFiles(examplePath, componentName) {
    var exampleFiles = [];
    try {
        exampleFiles = util.getFiles(path.join(examplePath, componentName));
    } catch(error) {
        console.log(chalk.red(`No example file found for ${componentName}`))
    }
    return exampleFiles;
}
