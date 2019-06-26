const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, './uploads'),
    filename: (req, file, callback) => {
        if(fs.existsSync('./images/users/resized/' + file.originalname) || fs.existsSync('./images/animals/resized/' + file.originalname)){
            return callback(null, file.originalname)
        }
        callback(null, file.fieldname + '-' + Date.now() + "." + file.mimetype.split('/').slice(-1))
    }
})

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, callback) => {
        const fileType = file.mimetype
        const fileExtension = path.extname(file.originalname)
        if(fileType !== "image/jpeg" 
            && fileType !== "image/png" 
            && fileExtension !== "jpg"
            && fileExtension !== "png"
            && fileExtension !== "jpeg"
        ){ return callback(new Error("Somente arquivos do tipo imagem são permitidos"))}
        
        callback(null, true)
    }
 })

 module.exports = { upload }