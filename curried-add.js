function curriedAdd(initialTotal = 0) {
  let total = initialTotal;

  function add(num) {
    if (num === undefined) {
      return total;
    }
    total += num;
    return add;
  }

  return initialTotal === 0 ? 0 : add;
}

module.exports = { curriedAdd };
