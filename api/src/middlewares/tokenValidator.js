import config from '../config';
import jwt from 'jsonwebtoken'


export const tokenValidator = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader.split(' ')[1];
    
    if (!token) {
    return res.status(401).send({ mensaje: 'Se requiere token de autenticación' });
    }

    jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
        return res.status(401).send({ mensaje: 'Token inválido' });
    }

    req.user = decoded;
    next();
    });
};
