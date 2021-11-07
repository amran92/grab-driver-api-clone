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
    Then you can use this model of code below to get the nearest driver

```bash
{
  "customerName": "Sofia",
  "customerLocation": {
    "x": 14,
    "y": 2
  },
  "customerDestination": {
  "x": 3,
  "y": 9
  },
  "customerGuestCount": 4
}
```

![Amran Hussein](https://user-images.githubusercontent.com/78696359/140646572-45448e3d-9582-4a29-af44-01243e5a6f65.PNG)

### **Here the drivers data stored in MongoDB Compass**

![Amran Hussein](https://user-images.githubusercontent.com/78696359/140647388-fcaab18d-5fcd-4a27-adef-7d4e94c768a4.PNG)
