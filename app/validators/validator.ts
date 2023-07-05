import { body } from 'express-validator';

export const loginSchema = [
    body('email', 'Email is required').isString().isEmail(),
    body('password', 'password is required').isString().isLength({ min: 6 }),
]

export const registrationSchema = [
    body('email', 'Email is required').isString().isEmail(),
    body('username', 'Username is required').isString().isLength({ min: 3 })
    .withMessage('must be at least 3 chars long')
    .matches(/\d/)
    .withMessage('must contain a number'),
    body('password', 'password is required').isString().isLength({ min: 6 }),
];

export const updateProductSchema = [
    body('name', 'Product name is required').isString(),
    body('price', 'Price is required').isString(),
    body('description', 'Description is required').isString(),
    body('status', 'Status is required').isString(),
];

export const updateFaqSchema = [
    body('question', 'Product name is required').isString(),
    body('answer', 'Price is required').isString(),
    body('suppoert_topic', 'Description is required').isString(),
    body('status', 'Status is required').isString(),
];