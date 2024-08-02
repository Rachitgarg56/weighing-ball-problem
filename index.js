// parameters -> number of balls
// returns -> number of times weighed on machine

function minWeighings(n) {
    let count = 0;
    while (n > 1) {
      count++;
      n = Math.ceil(n / 3);
    }
    return count;
}

console.log(minWeighings(100)); //5

// dividing the balls in 3 groups is more optimal way because it gives us more information
// Ex: If we divide balls in 3 groups, the first 2 groups are weighed on weighing machine, then there will be two cases, whether they are equal in weight or unequal
// if equal in weight, the light ball present in third group else in the less weighed group

