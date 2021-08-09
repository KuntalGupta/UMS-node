const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        };
        await mongoose.connect(process.env.MONGO_URI, connectionParams);
        console.log("Database Connected Successfully.");
    } catch (error) {
        console.log("Connection to Database failed: ", error);
    }
};

module.exports = connection;