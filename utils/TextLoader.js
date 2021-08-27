const fs = require('fs')

/**
 * 
 * @param {String} path path to be loaded as text
 * @returns {String} content of the file as text
 */
const LoadAsText = (path) => {
    const text = fs.readFileSync(path, 'utf-8').toString()
    return text
}

module.exports = LoadAsText