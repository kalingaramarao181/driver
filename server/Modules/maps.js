const express = require('express');

const router = express.Router();
const db = require('../Config/connection');


const apiKey = "AIzaSyDpQYynPI5mi2WKRjpElTO5epXqPcvATBk"; // Your actual API Key

// Create a route to handle Distance Matrix API calls
router.get("/get-distance", async (req, res) => {
  const { origins, destinations } = req.query;

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
    console.log(data);
    
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from Google API" });
  }
});

module.exports = router;