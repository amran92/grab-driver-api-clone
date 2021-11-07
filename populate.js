const DriverModel = require("./model/driverModel");

const fakeData = [
  new DriverModel({
    carCapacity: 3,
    name: "John",
    willDriveDistance: 24,
    location: {
      x: 45,
      y: 176,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Amran",
    willDriveDistance: 12,
    location: {
      x: 85,
      y: 70,
    },
  }),
  new DriverModel({
    carCapacity: 6,
    name: "Alia",
    willDriveDistance: 160,
    location: {
      x: 17,
      y: 4,
    },
  }),
  new DriverModel({
    carCapacity: 6,
    name: "Alex",
    willDriveDistance: 110,
    location: {
      x: 65,
      y: 37,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Sofia",
    willDriveDistance: 90,
    location: {
      x: 7,
      y: 23,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Wliam",
    willDriveDistance: 30,
    location: {
      x: 18,
      y: 2,
    },
  }),
  new DriverModel({
    carCapacity: 5,
    name: "Lim",
    willDriveDistance: 11,
    location: {
      x: 145,
      y: 46,
    },
  }),
  new DriverModel({
    carCapacity: 7,
    name: "Diana",
    willDriveDistance: 136,
    location: {
      x: 3,
      y: 8,
    },
  }),
  new DriverModel({
    carCapacity: 3,
    name: "James",
    willDriveDistance: 190,
    location: {
      x: 12,
      y: 4,
    },
  }),
  new DriverModel({
    carCapacity: 5,
    name: "Benjamin",
    willDriveDistance: 190,
    location: {
      x: 27,
      y: 4,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Isabella",
    willDriveDistance: 55,
    location: {
      x: 6,
      y: 13,
    },
  }),
  new DriverModel({
    carCapacity: 6,
    name: "Emma",
    willDriveDistance: 35,
    location: {
      x: 14,
      y: 25,
    },
  }),
  new DriverModel({
    carCapacity: 3,
    name: "Amy",
    willDriveDistance: 75,
    location: {
      x: 120,
      y: 22,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Ali",
    willDriveDistance: 75,
    location: {
      x: 5,
      y: 22,
    },
  }),
  new DriverModel({
    carCapacity: 5,
    name: "Ava",
    willDriveDistance: 199,
    location: {
      x: 16,
      y: 14,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Henry",
    willDriveDistance: 132,
    location: {
      x: 7,
      y: 14,
    },
  }),
  new DriverModel({
    carCapacity: 3,
    name: "Michael",
    willDriveDistance: 45,
    location: {
      x: 2,
      y: 1,
    },
  }),
  new DriverModel({
    carCapacity: 5,
    name: "Eliana",
    willDriveDistance: 13,
    location: {
      x: 55,
      y: 39,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Anna",
    willDriveDistance: 60,
    location: {
      x: 5,
      y: 29,
    },
  }),
  new DriverModel({
    carCapacity: 6,
    name: "Matthew",
    willDriveDistance: 105,
    location: {
      x: 3,
      y: 19,
    },
  }),
  new DriverModel({
    carCapacity: 2,
    name: "Sarah",
    willDriveDistance: 29,
    location: {
      x: 16,
      y: 11,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Robert",
    willDriveDistance: 99,
    location: {
      x: 26,
      y: 8,
    },
  }),
  new DriverModel({
    carCapacity: 6,
    name: "Julia",
    willDriveDistance: 55,
    location: {
      x: 4,
      y: 2,
    },
  }),
  new DriverModel({
    carCapacity: 3,
    name: "Jaxson",
    willDriveDistance: 17,
    location: {
      x: 43,
      y: 32,
    },
  }),
  new DriverModel({
    carCapacity: 5,
    name: "Mary",
    willDriveDistance: 165,
    location: {
      x: 2,
      y: 1,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Luis",
    willDriveDistance: 120,
    location: {
      x: 7,
      y: 5,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Kylie",
    willDriveDistance: 70,
    location: {
      x: 2,
      y: 13,
    },
  }),
  new DriverModel({
    carCapacity: 6,
    name: "Eric",
    willDriveDistance: 70,
    location: {
      x: 16,
      y: 11,
    },
  }),
  new DriverModel({
    carCapacity: 3,
    name: "Ashley",
    willDriveDistance: 20,
    location: {
      x: 13,
      y: 7,
    },
  }),
  new DriverModel({
    carCapacity: 4,
    name: "Peter",
    willDriveDistance: 130,
    location: {
      x: 1,
      y: 8,
    },
  }),
];

module.exports = function populate() {
  for (var i = 0; i < fakeData.length; i++) fakeData[i].save();

  console.log("Data populated!");
};
