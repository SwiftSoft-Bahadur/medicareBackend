
const Medicine = require('../models/medicineModel');



exports.index = async (req, res, next) => {
    try {
       
        
        let medicine = await Medicine.find();
        res.send(medicine);
        
    } catch (err) {
        next(err)
    }
}

exports.store = async (req, res, next) => {
    try {

        let medicine = new Medicine();
        medicine.medicineName = req.body.medicineName;
        medicine.medicineCompany = req.body.medicineCompany;
        medicine.medicinePrice = req.body.medicinePrice;
        medicine.medicineQty = req.body.medicineQty;
        medicine.expiry = req.body.expiry;
        medicine.medicineImg = req.body.medicineImg;
        let awaitMedicine = await medicine.save();
        res.send(awaitMedicine);
        
    } catch (err) {
        next(err);
    }
}