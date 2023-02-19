import Phone from '../models/phone';

export const getPhones = async (req,res)=>{
    try {
        const phones = await Phone.findAll({})
        res.status(200).json({phones})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const createPhone = async(req,res) =>{
    try {
        const {brand, model, clientId} = req.body;
        if(!brand || !model || !clientId){
            res.status(400).json({message:'Incomplete data'});
        }
        const newPhone = await Phone.create({brand, model, clientId})
        res.status(200).json({message: 'created Phone succesful'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getPhonesByClientId = async (req,res)=>{
    try {
        const { id } = req.params;
        const phones = await Phone.findAll({where:{clientId:id}})
        res.status(200).json({phones})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};