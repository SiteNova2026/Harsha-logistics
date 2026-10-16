import mongoose, { Schema, Model, InferSchemaType } from "mongoose";

const QuoteSchema = new Schema(
  {
    company: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    // { air: {departure, delivery, ...}, ocean: {...}, road: {...}, courier: {...} }
    freights: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true, minimize: false }
);

export type QuoteType = InferSchemaType<typeof QuoteSchema>;

const Quote: Model<QuoteType> =
  mongoose.models.Quote || mongoose.model<QuoteType>("Quote", QuoteSchema);

export default Quote;