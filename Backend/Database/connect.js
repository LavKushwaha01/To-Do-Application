import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

}
catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}
