const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Fish = require("./models/Fish");

require("dotenv").config();

// FORCE load correct .env path
dotenv.config({ path: "../.env" });

async function seed() {
  try {
    console.log("MONGO:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    await Fish.insertMany([
      {
        name: "Guppy",
        scientificName: "Poecilia reticulata",
        description: "Small freshwater fish.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvo1-0wZEE9OgCkqva5kb73Q6lslvfCKx2A&s",
        phMin: 7,
        phMax: 8,
        tempMin: 22,
        tempMax: 28,
        tdsMin: 200,
        tdsMax: 400,
        turbidityMin: 0,
        turbidityMax: 5,
      },
    ]);

    console.log("Seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();