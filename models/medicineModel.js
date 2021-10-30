const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.pluralize(null);


const medicineSchema = Schema({
    medicineName: { type: String, required: true },
    medicineCompany: { type: String, required: true },
    medicinePrice: { type: String, required: true },
    medicineQty: { type: String, required: true },
    expiry: { type: String },
    medicineImg: { type: String }
});

module.exports = mongoose.model("medicines", medicineSchema);

// {
    // "medicineName": "Kiwi",
    // "medicineCompany": "India",
    // "medicinePrice": "500",
    // "medicineQty": "1000",
    // "expiry":"05/06/2025",
    // "medicineImg":"https://media.gettyimages.com/photos/sliced-kiwi-picture-id909813644?k=20&m=909813644&s=612x612&w=0&h=gAOQm31kyPHkzkNORJbHIC_1mroMsrRJMSxQ_9kh-o0="
//   }