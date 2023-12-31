const Address = require("../models/address");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

//create a new address => /api/v1/address/new
exports.newAddress = catchAsyncErrors(async (req, res, next) => {
  const { address, city, district, ward, phoneNo } = req.body;

  const shippingInfo = await Address.create({
    address,
    city,
    district,
    ward,
    phoneNo,
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    shippingInfo,
  });
});

//Get logged in user Addresses   =>  /api/v1/address/me
exports.myAddress = catchAsyncErrors(async (req, res, next) => {
  const shippingData = await Address.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    shippingData,
  });
});

//Get single Address  =>  /api/v1/address/:id
exports.getSingleAddress = catchAsyncErrors(async (req, res, next) => {
  const shippingInfo = await Address.findById(req.params.id);

  if (!shippingInfo) {
    return next(new ErrorHandler("No Order found with this ID", 404));
  }

  res.status(200).json({
    success: true,
    shippingInfo,
  });
});

exports.deleteAddress = catchAsyncErrors(async (req, res, next) => {
  const address = await Address.findById(req.params.id);
  if (!address) {
    return next(new ErrorHandler("address not found", 404));
  }

  await address.deleteOne();
  res.status(200).json({
    success: true,
    message: "address is deleted",
  });
});

// Update Address   =>   /api/v1/address/:id
exports.updateAddress = catchAsyncErrors(async (req, res, next) => {
  let address = await Address.findById(req.params.id);

  if (!address) {
    return next(new ErrorHandler("Address not found", 404));
  }

  address = await Address.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    address,
  });
});
