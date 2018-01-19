var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var chokidar = require('chokidar');
var parse = require('react-docgen').parse;


var paths = {
    components: path.join(__dirname, '../src', 'components'),
    examples: path.join(__dirname, '../src', 'docs', 'examples'),
    output: path.join(__dirname, '../config', 'componentData.js'),
}


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
    var componentData = getDirectories(paths.components).map(function(componentName) {
        if (componentName !== '__tests__' ) {
            try {
                return getComponentData(paths, componentName);
            } catch(error) {
                errors.push('An error occurred while generating metadata for ' + componentName + '.\n' + error);
            }
        }
    });
    return writeFile(
        paths.output,
        "module.exports = " + JSON.stringify(
            errors.length ?
                errors
                :
                componentData.filter((component) => component)
            ));
}

function getComponentData(paths, componentName) {
    var content = readFile(path.join(paths.components, componentName, 'index.js'));
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
        var content = readFile(filePath);
        var info = parse(content)
        return {
            name: file.slice(0, -3),
            description: info.description,
            code: content
        }
    })
}

function getExampleFiles(examplePath, componentName) {
    var exampleFiles = [];
    try {
        exampleFiles = getFiles(path.join(examplePath, componentName));
    } catch(error) {
        console.log(chalk.red(`No example file found for ${componentName}`))
    }
    return exampleFiles;
}

function getFiles(filepath) {
    return fs.readdirSync(filepath).filter(function(file) {
        return fs.statSync(path.join(filepath, file)).isFile()
    })
}


function getDirectories(filepath) {
    return fs.readdirSync(filepath).filter(function(file) {
        return fs.statSync(path.join(filepath, file)).isDirectory()
    });
}

function writeFile(filepath, content) {
    fs.writeFile(filepath, content, function (err) {
        err ? console.log(chalk.red(err)) : console.log(chalk.green('Component data saved'))
    });
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}
