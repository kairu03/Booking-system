import express from "express";
import { protectRoute } from '../../middlewares/auth.js'
import { cancelBooking, createBooking, getAllBookings, getMyBookings, updateBookingStatus } from "./bookingController.js";
import { authorizeRoles } from "../../middlewares/role.js";
import { validate } from "../../middlewares/validate.js";
import { bookingParamsSchema, createBookingSchema, updateBookingSchema } from "./bookingValidation.js";

const router = express.Router();

// add protecRoute to all routes
router.use(protectRoute);

router.get('/', authorizeRoles('admin') , getAllBookings);

router.get('/:bookingId', 
  validate(bookingParamsSchema, 'params'),
  getMyBookings
);

router.post('/', 
  validate(createBookingSchema),
  createBooking
);

router.patch('/:bookingId', 
  authorizeRoles('admin'), 
  validate(bookingParamsSchema, 'params'),
  validate(updateBookingSchema),
  updateBookingStatus
);

router.delete('/:bookingId', 
  validate(bookingParamsSchema),
  cancelBooking
);

export default router;

