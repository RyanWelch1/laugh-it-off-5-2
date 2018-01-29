/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle (x){
    var total= "";
  for (var triangle = 1; triangle <= x; triangle++ ){
    total += makeLine(triangle);
}

  return total;
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));
