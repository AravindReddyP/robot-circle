var str = prompt("Please enter the Robot Movements");
var res = str.split("");
len = res.length;

var R = 0;
var U = 0;

for (i = 0; i <= len - 1; i++) {
  // for each letter in the array, if it matches the letter increment it
  if (res[i] == "R") {
    R++;
  }
  if (res[i] == "U") {
    U++;
  }
  if (res[i] == "L") {
    // for each letter in the array, if it matches,decrement it.
    R--;
  }
  if (res[i] == "D") {
    U--;
  }
}

if (R == 0 && U == 0) {
  // finally only if the value is zero for both conditions
  document.write("<h2> The Robot made a Circle </h2>");
} else {
  document.write("<h2> The Robot has not made a Circle</h2>");
}
