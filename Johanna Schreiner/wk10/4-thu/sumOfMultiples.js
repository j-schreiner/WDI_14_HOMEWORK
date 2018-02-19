var number = Number(process.argv[2])
var numsToSum = []

for (var i = 1; i <= number; i++){
  if (i % 3 == 0 || i % 5 == 0) {
    numsToSum.push(i)
  }
}

var sum = numsToSum.reduce((x, y) => x + y)

console.log(sum)
