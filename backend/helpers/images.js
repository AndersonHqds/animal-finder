const sharp = require('sharp')
const fs = require('fs')
const resizeImage = (files, directory) => {
    if(files.length > 0){
        const filePath = `./uploads/${ files[0].filename }`
        const resizedPath = `./images/${ directory }/resized/${ files[0].filename }`
        sharp(filePath)
        .resize(600)
        .toFile(resizedPath, (err, info) => { fs.unlinkSync(filePath) })
    }
}

module.exports = { resizeImage }