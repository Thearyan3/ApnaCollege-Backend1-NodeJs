const figlet = require("figlet");

figlet("Aryan   Ek    Bhadwa   Hai!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});