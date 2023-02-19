import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from "../config";


export const createUser = async(req,res) => {
    try {
        const {username, password} = req.body;
        if(!username || !password){
            res.status(400).json({message:'Incomplete data'});
        }
        const newUser = await User.create({username, password})
        res.status(200).json({message: 'created User succesful'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const loginUser = async(req,res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({where:{username, password}})
        console.log(user);
        if(!user){
            return res.status(400).json({message:'Invalid username or password.'})
        }
        const token = getToken(user.toJSON())
        return res.status(200).json({message:'login success',token})
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: error.message})
    }
}
const getToken = (userData) => {
    console.log('JWT',userData);
    try {
        const token = jwt.sign(userData, config.secretKey, { expiresIn: config.expiresToken })
        return token
    } catch (error) {
        throw new Error(`Create token failed: ${error}`)
    }
}
