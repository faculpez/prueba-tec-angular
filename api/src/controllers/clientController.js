import Client from '../models/client';

export const getClients = async (req,res)=>{
    try {
        const clients = await Client.findAll({})
        res.status(200).json({clients})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const createClient = async(req,res) =>{
    try {
        const {name, email, phoneNumber} = req.body;
        if(!name || !email){
            return res.status(400).json({message:'Incomplete data'});
        }
        const newClient = await Client.create({name, email, phoneNumber})
        return res.status(200).json({message: 'created client succesful'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

