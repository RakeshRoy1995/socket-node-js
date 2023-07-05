/** @format */

import { Schema, Document, model } from "mongoose";

interface RoleDocument extends Document {
  name: string;
  description: string;
}

const RoleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["Published", "Pending", "Draft"],
      default: "Draft",
    },
    merchant_id: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "User",
      // unique: true,
    },
    user_management: {
      type: Schema.Types.Mixed
    },
    faq_management: {
      type: Schema.Types.Mixed
    },

    merchant: {
      type: Schema.Types.Mixed
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Role = model<RoleDocument>("roles", RoleSchema);
export default Role;
