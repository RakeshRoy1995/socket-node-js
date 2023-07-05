import { Router } from 'express';
import { create_order, index, merchant_varification_status } from '../controllers/index.controller';
// const multer = require("multer");
import {
    // createFaq,
    // deleteFaq,
    // getAllFaq,
    // singleFaq,
    // updateFaq,
    getAll,
    create,
} from '../controllers/index.controller';
const router = Router();


router.post('/create', create);
router.post('/create-order', create_order);
router.post('/merchant_varification_status', merchant_varification_status);
router.get('/list', getAll);
router.get('/customer-list', getAll);
router.get('/', index);
export default router;