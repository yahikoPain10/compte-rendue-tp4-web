function sysDate(sep) {
  const now = new Date();
  return [
    now.getDate().toString().padStart(2, "0"),
    (now.getMonth() + 1).toString().padStart(2, "0"),
    now.getFullYear().toString()
  ].join(sep);
}

function getSystemMonthName() {
  const month = new Date().getMonth();
  return [
    "January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
  ][month];
}

function calcAge(date) {

  if(!(date instanceof Date))
    throw new TypeError("Invalid date");

  const diff = Date.now() - date.getTime();
  if(diff <= 0) return 0;

  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
}

console.log(sysDate('-'));
console.log(getSystemMonthName());
console.log(calcAge(new Date(2004, 6, 23)));