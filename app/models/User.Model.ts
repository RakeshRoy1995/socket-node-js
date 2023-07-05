import { Document, model, Schema } from "mongoose";

var userSchema = new Schema(
  {
    provider: { type: String, default: "ekshop" },
    store_name: { type: String, unique: true, lowercase: true },
    store_url: { type: String, unique: true, lowercase: true },
    phone: { type: String },
    phonecode: { type: String },
    phone_verified: { type: Boolean, default: false },
    document_updated: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    email: { type: String },
    merchant_type_id: { type: String },
    merchant_type_name: { type: String },
    image: { type: String },
    template: { type: Number, default: 1 },
    email_verified: { type: Boolean, default: false },
    name: { type: String, require: true },
    password: { type: String },
    salt: { type: String },
    role_ids: { type: Array, default: [] },
    role: [
      {
        value: { type: Schema.Types.ObjectId, ref: "Role" },
        label: { type: String },
      },
    ],
    emp_code: { type: String },
    emp_name: { type: String },

    type: { type: String }, // 1 = Admin, 2 = Merchant, 3 = Customer
    profile_picture: { type: String },
    gender: { type: String, lowercase: true },
    birthdate: { type: Date },
    deleted: { type: Boolean, Default: false },
    deletedBy: { type: String, Default: null },
    deletedAt: { type: Date },
    country: { type: Schema.Types.ObjectId, ref: "Location" },
    division: { type: Schema.Types.ObjectId, ref: "Location" },
    district: { type: Schema.Types.ObjectId, ref: "Location" },
    upazila: { type: Schema.Types.ObjectId, ref: "Location" },
    union: { type: Schema.Types.ObjectId, ref: "Location" },
    province: { type: Schema.Types.ObjectId, ref: "Location" },
    state: { type: Schema.Types.ObjectId, ref: "Location" },
    city: { type: Schema.Types.ObjectId, ref: "Location" },
    area: { type: Schema.Types.ObjectId, ref: "Location" },

    country_info: { type: Schema.Types.Mixed },
    division_info: { type: Schema.Types.Mixed },
    district_info: { type: Schema.Types.Mixed },
    upazila_info: { type: Schema.Types.Mixed },
    union_info: { type: Schema.Types.Mixed },
    province_info: { type: Schema.Types.Mixed },
    state_info: { type: Schema.Types.Mixed },
    city_info: { type: Schema.Types.Mixed },
    area_info: { type: Schema.Types.Mixed },

    total_order: { type: Number, default: 0 },
    total_pending_order: { type: Number, default: 0 },
    total_delivered_order: { type: Number, default: 0 },
    total_canceled_order: { type: Number, default: 0 },

    postcode: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },

    verification_token: { type: String, select: false },
    varification_code: { type: String },
    api_token: { type: String },
    two_factor_auth: { type: Boolean },
    last_login: { type: Date },
    language: { type: String, default: "en" },
    settings: { type: Schema.Types.Mixed },
    login_info: [{ type: Schema.Types.Mixed }],
    profile_status: { type: String, default: "Need Verification" }, //In Verification / Verified / Declined
    declined_reason: { type: String },
    profile_in_verification_fields: [
      {
        field_name: { type: String },
        status: { type: Boolean },
        previousValue: { type: String },
      },
    ],
    profile_completion_status: { type: String }, // Incomplete, Completed
    status: {
      type: String,
      enum: ["Published", "Pending", "Draft"],
      default: "Draft",
    },
    merchantId: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "User",
      // unique: true,
    },
    is_customer: { type: Boolean, default: true },
    is_merchant: { type: Boolean, default: false },
    is_admin: { type: Boolean, default: false },
    total_wallet_point: { type: Number, default: 0 },
    muktopath_user: { type: Boolean, default: false },
    access_token: { type: String },
    merchant_id: { type: Array },
  },
  { timestamps: true }
);

// userSchema.set('autoIndex', false);
userSchema.index({
  name: 1,
  email: 1,
  phone: 1,
  gender: 1,
  country: 1,
  division: 1,
  district: 1,
  upazila: 1,
  union: 1,
  province: 1,
  state: 1,
  city: 1,
  area: 1,
  is_merchant: 1,
  is_customer: 1,
  type: 1,
});
userSchema.index({ phone: 1, type: 1 }, { unique: true });
userSchema.index({ email: 1, type: 1 }, { unique: true });

const User = model("user", userSchema);

export default User;
