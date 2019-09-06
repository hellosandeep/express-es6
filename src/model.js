import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    address: { type: String }
})

const CustomerSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    address: { type: String }
})

// export default mongoose.model('users', UserSchema);

let model = {
    user: mongoose.model('users', UserSchema),
    customer: mongoose.model('customers', CustomerSchema)
}

export { model };
