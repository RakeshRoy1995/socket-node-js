import { Document, model, Schema } from "mongoose";

var sectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    permission: {
      type: Boolean,
      required: false,
    },
    role_id: {
      type: String,
      required: false,
      ref: "Role",
    },
    category: {
      type: String,
      required: false,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

var subsectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    permission: {
      type: Boolean,
      required: false,
    },
    menu_id: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "menu",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);
var actionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    permission: {
      type: Boolean,
      required: false,
    },
    submenus_menu_id: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "submenu",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);
const Menu = model("menu", sectionSchema);
const SubMenu = model("submenu", subsectionSchema);
const Action = model("menu_permit", actionSchema);

export { Menu, SubMenu, Action };
