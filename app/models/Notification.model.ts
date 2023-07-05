import { model, Schema } from 'mongoose';

var NotificationSchema = new Schema({
    authority: {type: Number , default:1 }, // who will get notification = 1=> Admin , 2=> merchant , 3=>customer
    type: {type: Number , default:1}, // notification type = 1=> alert , 2=> update , 3=> logs
    
    data: {type: Schema.Types.Mixed },
    seen: {type : Boolean , default: false},
    title:{type:String, require : true},
    time:{type:Number, require : true},

    receiver: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    text: {type: String, required: true},
    
}, {timestamps: true});

const Notification = model('Notification', NotificationSchema);

export default Notification;