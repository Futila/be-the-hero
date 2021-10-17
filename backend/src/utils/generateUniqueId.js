const crypto = require('crypto');

function generateUniqueId(){
    return  crypto.randomBytes(4).toString('HEX');
}

module.exports = generateUniqueId;