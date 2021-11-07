# grab-driver-api-clone
### **What is grab-driver-api-clone**

API built using Node.js, Express.js, and MongoDB for online assessment of my internship in AirAsia. First, the server will start working, the app will recall data of drivers. Then, the client can send their location in and the API will return the nearest driver who is eligible in the entire area. Not all drivers are eligible to take customer, because some customer has far way location and there is a driver who can not go that far or there is a driver who has a limit of how many customers can be taken at one time.

### **Here Are Some Technologies Used In This API Project**

1. Node.js
2. Express.js
3. MongoDB
4. Mongoose

### **Here How to Run The API Project**

You need to install these in your machine (Node.js, MongoDB, and MongoDB Compass) and you will need a post man or something similar to it to test and send the API.

### **Here How to Check for the Nearest Driver**

    HTTP: POST
    URL: http://localhost:5000/api/search/drivers
    Request body: raw -> JSON
    Then you can use this model of code to get the nearest driver

{
  "customerName": "Mohmed Ishak",
  "customerLocation": {
    "x": 8,
    "y": 4
  },
  "customerDestination": {
  "x": 4,
  "y": 5
  },
  "customerGuestCount": 2
}

