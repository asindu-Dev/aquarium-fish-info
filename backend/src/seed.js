const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Fish = require("./models/Fish");

dotenv.config();

const fishData = [
  {
    name: "Guppy",
    scientificName: "Poecilia reticulata",
    description: "Small, colorful, very easy beginner fish.",
    imageUrl: "https://example.com/guppy.jpg",
    phMin: 7,
    phMax: 8,
    tempMin: 22,
    tempMax: 28,
    tdsMin: 200,
    tdsMax: 400,
    turbidityMin: 0,
    turbidityMax: 5,
  },
  {
    name: "Molly",
    scientificName: "Poecilia sphenops",
    description: "Peaceful livebearer, good for community tanks.",
    imageUrl: "https://example.com/molly.jpg",
    phMin: 7,
    phMax: 8.5,
    tempMin: 24,
    tempMax: 28,
    tdsMin: 200,
    tdsMax: 500,
    turbidityMin: 0,
    turbidityMax: 6,
  },
  {
    name: "Platy",
    scientificName: "Xiphophorus maculatus",
    description: "Colorful and very hardy livebearer fish.",
    imageUrl: "https://example.com/platy.jpg",
    phMin: 7,
    phMax: 8,
    tempMin: 22,
    tempMax: 28,
    tdsMin: 180,
    tdsMax: 400,
    turbidityMin: 0,
    turbidityMax: 5,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

    // Optional: clear old data (important for testing)
    await Fish.deleteMany();

    console.log("Old data cleared");

    await Fish.insertMany(fishData);

    console.log("Database seeded successfully");

    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDB();