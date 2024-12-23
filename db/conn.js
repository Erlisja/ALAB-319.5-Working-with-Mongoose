const mongoose = require("mongoose");    
const dotenv = require("dotenv");
dotenv.config();

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// connect to mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
} );

module.exports = db;


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000  // 30 seconds timeout
})
.then(() => {
    console.log('Successfully connected to MongoDB!');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

