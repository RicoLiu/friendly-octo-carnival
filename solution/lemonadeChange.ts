/**
 * @param {number[]} bills [5,5,5,10,20]
 * @return {boolean}
 */
function(bills: number[]]): boolean {
  if (bills[0] !== 5) return false;
  let charge_5 = 0;
  let charge_10 = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      charge_5++;
    }
    if (bills[i] === 10) {
      charge_5--;
      charge_10++;
    }
    if (bills[i] === 20) {
      if (charge_10 === 0) {
        charge_5 -= 3;
      } else {
        charge_5--;
        charge_10--;
      }
    }
    if (charge_5 < 0) {
      return false;
    }
  }
  return true;

};
