import { Router } from 'express';
import { createClient, getClients } from '../controllers/clientController';
import { createPhone, getPhones, getPhonesByClientId} from '../controllers/phoneController';
import { createFix, getFixes, getFixesByPhoneId } from '../controllers/fixController';
import { createUser, loginUser } from '../controllers/userController';
import { tokenValidator } from '../middlewares/tokenValidator';



const router = Router();
//Clients
router.get('/clients',  tokenValidator, getClients);
router.post('/clients', tokenValidator, createClient);
router.get('/clients/:id/phones', tokenValidator, getPhonesByClientId);


//Phones
router.get('/phones', tokenValidator, getPhones);
router.post('/phones',tokenValidator, createPhone);
router.get('/phones/:id/fixes', tokenValidator, getFixesByPhoneId);

//Fixes
router.get('/fixes', tokenValidator, getFixes);
router.post('/fixes',tokenValidator, createFix);


//Users
router.post('/users', tokenValidator, createUser);
router.post('/login', loginUser)

export default router;