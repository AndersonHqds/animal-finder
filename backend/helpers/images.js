const sharp = require('sharp')
const fs = require('fs')
const { sightEngineApiUser, sightEngineApiSecret } = require('../credentials/.env.js')
const sightengine = require('sightengine')(sightEngineApiUser, sightEngineApiSecret)

const resizeImageAndCheckNudity = (files, directory) => {
    if(files.length > 0){
        const filePath = `./uploads/${ files[0].filename }`
        return analyzeNudity(filePath)
                .then(result => {
                    if(result.nudity.raw > 0.3){
                        fs.unlinkSync(filePath)
                        return { ok: false, message: "Imagem contém conteúdo impróprio" }
                    }
                    const resizedPath = `./images/${ directory }/resized/${ files[0].filename }`
                    sharp(filePath)
                    .resize(600)
                    .toFile(resizedPath, (err, info) => { fs.unlinkSync(filePath) })
                    return { ok: true, message: "" }
                })        
    }
}

const analyzeNudity = (filePath) => sightengine.check(['nudity']).set_file(filePath )

module.exports = { resizeImageAndCheckNudity }