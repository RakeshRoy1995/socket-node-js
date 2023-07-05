import { Document, model, Schema } from 'mongoose';


const PaymentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            // unique: true,
        },
        phone_no: {
            type: Number,
            required: true,
        },

        status: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Payment = model('payment', PaymentSchema);

export default Payment;
