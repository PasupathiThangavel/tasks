function concat() {
    var a = [1, 2, 3, 4, 5];
    var b = [6, 7, 8, 9, 10];
    var e = [11, 12, 13, 14, 15];
    var c = a.concat(b);
    console.log(c.join(' '));
    var d = a.concat(b, e);
    console.log(d.join(' '));
}
concat();