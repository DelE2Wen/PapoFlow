const multer = require('multer');
const path = require('path');


//destino imagem guardar
const imageStorage = multer.diskStorage({
  destination: (req, file, cb)=>{
    let folder = ""
    if(req.baseUrl.includes("users")){
      folder = "users";
    }
    cb(null, `public/images/${folder}`);
  },
  filename: (req, file, cb) =>{
    cb(null, Date.now() + path.extname(file.originalname));
  }
})
const imageUpload = multer ({
  storage: imageStorage,
  fileFilter (req, file, cb) {
    if(!file.originalname.match(/\.(png|jpg)$/)){
      return cb(new Error("Por favor, envie apenas JPG ou PNG."))
    }
    cb(undefined, true);
  }
})

module.exports ={imageUpload}