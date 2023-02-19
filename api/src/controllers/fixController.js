import Fix from '../models/fix';

export const getFixes = async (req,res)=>{
    try {
        const fixes = await Fix.findAll({order:[['createdAt','DESC']]})
        res.status(200).json({fixes})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const createFix = async(req,res) =>{
    try {
        const { phoneId, description} = req.body;
        if( !phoneId || !description){
            res.status(400).json({message:'Incomplete data'});
        }
        const status = 'pending'  //STATUS DEFAULT
        const newFix = await Fix.create({phoneId, description, status})
        res.status(200).json({message: 'created fix succesful'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getFixesByPhoneId = async (req,res)=>{
    try {
        const { id } = req.params;
        const fixes = await Fix.findAll({where:{phoneId:id}})
        res.status(200).json({fixes})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

