import {config} from 'dotenv';

config();

export default{
    uri: process.env.URI,
    secretKey: process.env.SECRET_KEY,
    expiresToken: process.env.EXPIRES_TOKEN
}