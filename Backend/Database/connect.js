import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://lavkumar062:SxvMKIyMlAA5EyyU@cluster0.v4ibkbc.mongodb.net/To-Do-DB" , {
  useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

}
catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}
