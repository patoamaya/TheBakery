const CakeModel = require("../models/CakeModel")
const streamifier = require ("streamifier");
const cloudinary = require("../utils/Cloudinary")


const OwnerController = {

home: async(req, res)=>{
    try{
        const findAll = await CakeModel.find()
        res.send(findAll)
    }catch(err){
        res.status(500) || res.status(400)
        .json({
            message: `No se encontraron los productos`,
            error: err
        })
    }
    
},

q: async(req, res) =>{
    try{
    const {categoria} = req.query
    const filteredCategory = await CakeModel.find({categoria: categoria})
    console.log(filteredCategory)
    res.send(filteredCategory)
    }catch(err){
        res.status(400).json({
            message: `Error al encontrar esta categoria`,
            error: err
        })
    }
},

detail: async(req, res)=>{
    try{
        let {id} = req.params
        const findById = await CakeModel.findById(id)
        res.send(findById)
    }catch(err){
       return res.status(400).json({
            message: `No se ha encontrado el producto : ${err}`,
            error: err
        })
    }
},
    
add: async(req, res)=>{
        try{
            const {precio, nombre, tamano, descripcion, rinde, categoria}  = req.body
            
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: 'Debe agregar imágenes' })
            }
            
            const imagenUrls = []
            
            for (const file of req.files) {
            const result = await new Promise((resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                { resource_type: 'auto' }, 
                (error, result) => {
                  if (error) {
                      console.error('Error subiendo imagen a Cloudinary:', error)
                      reject(error)
                    }
                    resolve(result)
                }
            );
            streamifier.createReadStream(file.buffer).pipe(uploadStream)
        })
      
            imagenUrls.push({
              url: result.secure_url,  
              public_id: result.public_id 
            })
          }
        const newCake = new CakeModel({
            precio,
            nombre,
            tamano,
            descripcion,
            rinde,
            categoria,
            imagenes: imagenUrls
            
        })
        
        await newCake.save()
        res.status(200).json({
        message: "Producto añadido con exito"
    })
    }
    catch(err){
    console.error(`Error: ${err}`)
    res.status(500).json({
        message:"Error al añadir producto",
        error: err.message,
    })
    }
},

update: async(req, res)=>{
    const _id = req.params.id
    const {precio, nombre, tamano, descripcion, rinde } = req.body
    
    const existingCake = await CakeModel.findById(_id)
    const newImages = existingCake ? existingCake.imagenes : []
    
    if(!req.files || req.files.length === 0){
    }else{
        try{
            const imgUrls = await Promise.all(
                req.files.map((file)=>{
                    return new Promise((resolve, reject)=>{
                        const uploadStream = cloudinary.uploader.upload_stream(
                            { resource_type: 'auto' },  
                            (err, result) => {
                                if (err) {
                                    console.log("Error al subir imagen a Cloudinary:", err)
                                    reject(err);
                                }
                                console.log("Imagen subida con éxito a Cloudinary:", result)
                                resolve({
                                    url: result.secure_url,  // URL segura de la imagen
                                    public_id: result.public_id  // ID público de la imagen
                                })
                            }
                        )
                        streamifier.createReadStream(file.buffer).pipe(uploadStream)       
                    })
                })
            )
            console.log("Imagenes subidas correctamente:", imgUrls)
            ultimateImages = [...ultimateImages, ...imgUrls]
        }catch(err){
            console.log("Error al subir imágenes a Cloudinary:", err)
            return res.status(500).json({ message: "Error al subir imágenes" })
        }
            newImages = newImages.filter(img => img && img.url && img.public_id)
            
            const updatedCake = {
                precio,
                nombre,
                tamano,
                descripcion,
                rinde,
                categoria,
                imagenes: newImages
            }

            try{
                const updatedCakeDoc = await CakeModel.findOneAndUpdate({_id}, updatedCake, {new: true})
                res.status(200).json({ message: 'Producto actualizado con éxito', updatedCake: updatedCakeDoc })
            }catch(err){
                console.log("Error al actualizar el producto:", err)
                res.status(500).json({ message: 'Error al actualizar el producto' })
            }
        }
},
    
delete: async(req, res)=>{
     const _id = req.params.id
        try{
            const cake = await CakeModel.findById(_id)
               console.log(cake)
                    if(!cake){
                        return res.status(404).json({
                            message: "Producto no encontrado"
                        })}
                            if(cake.imagenes && cake.imagenes.length > 0){
                                    for(let img of cake.imagenes){
                                        await cloudinary.uploader.destroy(img.public_id)
            }
        }
        const deleteOneById = await CakeModel.deleteOne({_id})
        res.status(200).json({
                message: "Producto eliminado con exito", deleteOneById
            })
        }
        catch(err){
            console.error(err)
            res.status(500).json({
                message: "Error al eliminar el producto",
                error: err
            })
        }
        
}
    
}
    
    module.exports = OwnerController