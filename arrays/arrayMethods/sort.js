var name = ['pasupathi', 'arun', 'arulmani', 'kumar'];
var number = [1, 2, 3, 4, 5, 6];
var sort = name.sort();//alphapet sort
console.log(sort);
var rsort = name.reverse();//alphapetreverse sort
console.log(rsort);

//number sort
var sort1 = number.sort(function (a, b) {
    return a - b;
})
console.log(sort1);

//number reverse sort
var rsort1 = number.sort(function (a, b) {
    return b - a;
})
console.log(rsort1);