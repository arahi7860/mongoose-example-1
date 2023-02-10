import mongoose from "mongoose";

const CONNESTING_STRING = "mongodb://127.0.0.1:27017/dev"
// `mongodb://`: protocol
// `127.0.0.1`: IP
// `27017`: port
// `/dev` database to use


mongoose.set('strictQuery', false);
mongoose.connect(CONNESTING_STRING, {})

export default mongoose
