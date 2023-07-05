import { Document, model, Schema } from 'mongoose';


const EmployeeSchema = new Schema(
    {
        emp_code: {
            type: String,
            required: false,
            // unique: true,
        },

        first_name: {
            type: String,
            required: false,
        },
        last_name: {
            type: String,
            required: false,
        },
        father_name: {
            type: String,
            required: false,
        },
        mother_name: {
            type: String,
            required: false,
        },
        nid_no: {
            type: Number,
            required: false,
        },
        mobile_number: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        birthdate: {
            type: Date

        },
        image: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
        },

    },
    { timestamps: true }
);

const Employee = model('employee', EmployeeSchema);

export default Employee;
