module.exports = function reverse (n) {
  let rvr = n.toString().split("");
  if (rvr.includes("-")) {
    rvr.splice("-", 1);
    
  }
  
    return +rvr.reverse().join("");
  };

