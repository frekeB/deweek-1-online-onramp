function replaceDivisible(x, y) {
  let length = x.length;
  for (let i = 0; i < length; i++) {
    if (x[i] % y === 0) {
      x[i] = "isdivisible";
    }
  }
}

module.exports = replaceDivisible;
