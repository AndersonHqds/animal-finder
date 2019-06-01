const mongoose = require('mongoose')
mongoose
.connect('mongodb://localhost/animal_helper', { useNewUrlParser: true })
.catch(error => {
    const msg = 'ERROR! To connect Mongodb'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})