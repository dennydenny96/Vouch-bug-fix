const fs = require('fs')

/**
 * 
 * @param {String} name file name
 * @param {String} content json string
 */
const saveToJSON = (name, content) => {
    fs.writeFileSync(name, content)
}

module.exports = saveToJSON