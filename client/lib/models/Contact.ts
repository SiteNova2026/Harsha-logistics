import mongoose,{Schema,Model,InferSchemaType } from "mongoose";

const ConstactSchema = new Schema({
    fullName:{type:String,required:true},
    companyName:{type:String,required:true},
    email:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    message:{type:String,required:true}
},
 { timestamps: true }
);

export type ContactType = InferSchemaType<typeof ConstactSchema>;
const ContactModel:Model<ContactType> = mongoose.models.Contact || mongoose.model('Contact',ConstactSchema);

export default ContactModel;