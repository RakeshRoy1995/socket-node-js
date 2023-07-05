import { Request, Response } from "express";
import logger from "../config/logger";
// import { iApiUser } from '../interfaces/auth.interface';
import Payment from "../models/Index.model";
import User from "../models/User.Model";
import { formatError, formatSuccess } from "../utils/error.util";
import Notification from "../models/Notification.model";
const NAMESPACE = "Index Controller";

// Create Index
export const create = async (req: any, res: any) => {
  try {
    const { user_id } = req.body;
    const { authority } = req.query;
    let IndexFound :any = await User.findOne({ _id :user_id});
    IndexFound = IndexFound.toObject()
    delete IndexFound['password']
    delete IndexFound['salt']
    delete IndexFound['api_token']
    let insert = {
      authority,
      text : "New merchant has registered now named " + IndexFound.name,
      data: IndexFound,
      title: "Merchant Registration",
      time: Date.now(),
    }

    const create = new Notification({ ...insert });
    await create.save();

    let data :any = await Notification.find({ authority }).sort([["_id", -1]]);

    res.json(formatSuccess(data));
  } catch (err: any) {
    logger.error(NAMESPACE, "Create Index error", err);
    res.status(500).json(formatError(err));
  }
};


export const create_order = async (req: any, res: any) => {
  try {
    const { data } = req.body;
    const { authority } = req.query;

    console.log(`req.body`, data , authority );
    let insert = {
      receiver : data.merchant_user_id ,
      text : "New Order " + data.order_code + " has been placed",
      title: "New Order",
      authority : authority,
      time: Date.now(),
    }

    const create = new Notification({ ...insert });
    await create.save();

    let datas :any = await Notification.find({ authority }).sort([["_id", -1]]);

    res.json(formatSuccess(datas));
  } catch (err: any) {
    logger.error(NAMESPACE, "Create Index error", err);
    res.status(500).json(formatError(err));
  }
};

// Get All Index
export const getAll = async (req: any, res: Response) => {
  try {
    const { authority , user_id } = req.query;

    if (user_id) {
    let data :any = await Notification.find({ receiver : user_id }).sort([["_id", -1]]);
    res.json(formatSuccess(data));
    }else{
      let data :any = await Notification.find({ authority }).sort([["_id", -1]]);
      res.json(formatSuccess(data));
    }
    
    
  } catch (err: any) {
    logger.error(NAMESPACE, "View all data error", err);
    res.status(500).json(formatError("Server error"));
  }
};
export const index = async (req: any, res: Response) => {
  return res.json({ data: "Payment service" });
};


export const merchant_varification_status = async (req: any, res: any) => {
  try {
    const { data } = req.body;
    const { authority } = req.query;

    console.log(`req.body`, data , authority );
    let insert = {
      receiver : data.data._id ,
      text :  data.data.name + " is " + data.data.profile_status,
      title: "Merchant varification",
      authority : authority,
      time: Date.now(),
    }

    const create = new Notification({ ...insert });
    await create.save();

    let datas :any = await Notification.find({ authority }).sort([["_id", -1]]);

    res.json(formatSuccess(datas));
  } catch (err: any) {
    logger.error(NAMESPACE, "Create Index error", err);
    res.status(500).json(formatError(err));
  }
};
