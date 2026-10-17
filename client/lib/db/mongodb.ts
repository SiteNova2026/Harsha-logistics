import mongoose ,{Mongoose} from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI || '';
console.log("MONGODB_URI", MONGODB_URI);

// if(!MONGODB_URI){
//     throw new Error( "MONGODB_URI is missing. Check .env.local in your project root.");
// }

interface MongooseInstance {
    conn:Mongoose | null;
    promise: Promise<Mongoose> | null;
}
declare global {
    var mongooseInstance: MongooseInstance | undefined;
}

const cached: MongooseInstance =
  global.mongooseInstance ?? (global.mongooseInstance = { conn: null, promise: null });

export default async function connectDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;
 
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI as string, {
      bufferCommands: false,
    });
  }
 
  cached.conn = await cached.promise;
  console.log("MongoDB connected");
  return cached.conn;
}
