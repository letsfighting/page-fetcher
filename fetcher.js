const request = require("request");
const fs = require("fs");

request("http://example.edu/", (error, response, body) => {
  //console.log("error:", error); // Print the error if one occurred
  //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  //console.log("body:", body); // Print the HTML for the Google homepage.
  fs.writeFile("samplefile.txt", body, function (err) {
    if (err) throw err;
    console.log("It's saved!");
  });
});
