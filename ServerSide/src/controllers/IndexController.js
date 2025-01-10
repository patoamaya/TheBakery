const CakeModel = require("../models/CakeModel")


const IndexController = {
home: async(req, res)=>{
    try{
        const findAll = await CakeModel.find()
        res.send(findAll)
    }catch(err){
        res.status(400) || res.status(500)
        .json({
            message: `Productos no encontrados`,
            error: err
        })
    }
},
all: async(req, res)=>{
    try{
        const searchAll = await CakeModel.find()
        res.status(200) && res.send(searchAll)
    }
    catch(err) {
        console.error(`Error: ${err}`)
        res.status(500).json({
            message: `Error al encontrar productos`,
            error: err.message
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
            message: `Error al encontrar el producto: ${err}`,
            error: err
        })
    }
    
}
}

module.exports = IndexController