import { model, Schema } from 'mongoose';

var merchantSchema = new Schema({
    muktopath_user: {type: Boolean , default: false},
    image: {type: String },
    merchant_code: {type: Number , default:  new Date().getTime() , unique:true }, 
    entrepreneur_id: {type: String},
    name: {type: String, Required: true},
    owner_name: {type: String, Required: true},
    document_updated: {type: Boolean, default: false},
    user: {type: Schema.Types.ObjectId, ref: 'User', Required: true},
    user_info: {type: Schema.Types.Mixed},
    merchant_type: {type: Schema.Types.ObjectId, ref: 'MerchantType'},
    merchant_type_name: {type: String},
    merchant_type_info: {type: Schema.Types.Mixed},
    is_flagship: {type: Boolean, default: false},
    id_type: {type: String}, // National Identification type NID, Birth Certificate, Passport Number, and other
    identification_number: {type: String},
    id_front_img: {type: String}, 
    id_back_img: {type: String},  
    payment_operator_name: {type: String},  
    payment_account_type: {type: String},  
    payment_mobile_number: {type: String},   
    payment_method_type: {type: Boolean , default: false},

    legal_form: {type: String}, 
    business_url: {type: String},
    business_address: {type: String},
    business_registration_number: {type: String},
    business_type: {type: String},  // ltd/private,
    address: {type: String},
    business_country: {type: String},
    country_info: {type: Schema.Types.Mixed},
    division: {type: String},
    division_info: {type: Schema.Types.Mixed},
    district: {type: String},
    district_info: {type: Schema.Types.Mixed},
    upazila: {type: String},
    upazila_info: {type: Schema.Types.Mixed},
    union: {type: String},
    union_info: {type: Schema.Types.Mixed},
    province: {type: Schema.Types.ObjectId, ref: 'Location'},
    province_info: {type: Schema.Types.Mixed},
    state: {type: Schema.Types.ObjectId, ref: 'Location'},
    state_info: {type: Schema.Types.Mixed},
    city: {type: Schema.Types.ObjectId, ref: 'Location'},
    city_info: {type: Schema.Types.Mixed},
    area: {type: Schema.Types.ObjectId, ref: 'Location'},
    area_info: {type: Schema.Types.Mixed},
    postcode: {type: String},
    latitude: {type: Number},
    longitude: {type: Number},

    total_store: {type: Number, default: 0},
    total_product: {type: Number, default: 0},
    total_order: {type: Number, default: 0},
    status_wise_order_count: {type: Schema.Types.Mixed},
    district_brand:{type: Array , default: []},

    bank_name: {type: String},
    bank_account_name: {type: String},
    bank_account_number: {type: String},
    bank_account_branch: {type: String},
    bank_routing_number: {type: String},
    bank_account_cheque_img: {type: String},
    

    ecommerce_partner: {Type: Boolean, default: false},
    commission_available_for: {
        merchant: {type: Boolean, default: true},
        admin: {type: Boolean, default: true},
    },
    status: {type: String, default: 1}, // '1' = Active, '2' = Inactive/Blocked
    ubid: {type: String, default: null},
    hidden: {type: Boolean, default: false},
    delevery_key: {type: String},
    delevery_secret: {type: String},
    payment_credintial: {type: Schema.Types.Mixed},
}, {timestamps: true});


// merchantSchema.set('autoIndex', true);
merchantSchema.index({
    name: 1,
    business_url: 1,
    owner_name: 1,
    user: 1,
    country: 1,
    division: 1,
    district: 1,
    upazila: 1,
    union: 1,
    province: 1,
    state: 1,
    city: 1,
    area: 1,
    merchant_type: 1,
})

const Models = model('Merchant', merchantSchema);

export default Models;
