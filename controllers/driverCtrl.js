const Joi = require("joi");
const DriverModel = require("../model/driverModel");
const findDistanceBetweenTwoPoints = require("../helper/findDistanceBetweenTwoPoints");

const driverCtrl = {
  getNearestAvailableDriver: async (req, res) => {
    try {
      const {
        customerDestination,
        customerLocation,
        customerName,
        customerGuestCount,
      } = req.body;

      // I assumed the x and y value for coordinate must be at least 0 each

      const schema = Joi.object({
        x1: Joi.number().min(0).required(),
        y1: Joi.number().min(0).required(),
        x2: Joi.number().min(0).required(),
        y2: Joi.number().min(0).required(),
        customerName: Joi.string().min(1).max(20).required(),
        customerGuestCount: Joi.number(),
      });

      const { error } = schema.validate({
        x1: customerDestination.x,
        y1: customerDestination.y,
        x2: customerLocation.x,
        y2: customerLocation.y,
        customerName,
        customerGuestCount,
      });

      if (error) return res.status(404).json({ error });

      const distance = findDistanceBetweenTwoPoints(
        customerDestination,
        customerLocation
      );

      let drivers = await DriverModel.find({});

      if (!drivers[0])
        return res.status(500).json({ message: "No driver is available." });

      let nearest = drivers[0];
      let shortestDistance = findDistanceBetweenTwoPoints(
        customerLocation,
        drivers[0].location
      );

      for (var i = 0; i < drivers.length; i++) {
        const distanceBetweenCustomerAndDriver = findDistanceBetweenTwoPoints(
          customerLocation,
          drivers[i].location
        );

        if (
          distanceBetweenCustomerAndDriver < shortestDistance &&
          drivers[i].carCapacity >= customerGuestCount &&
          drivers[i].willDriveDistance >= distance
        ) {
          shortestDistance = distanceBetweenCustomerAndDriver;
          nearest = drivers[i];
        }
      }

      return res.status(200).json({ closestDriver: nearest });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = driverCtrl;
