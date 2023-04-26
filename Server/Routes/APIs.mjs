import express from "express";

import ProductController from '../Controllers/ProductController.mjs';


const router = express.Router();

router.get('/products', ProductController.list)


router.post('/product', ProductController.create)


router.get('/product/:id', ProductController.view)


router.put('/product/:id', ProductController.update)


router.delete('/product/:id', ProductController.list)


export default router;

