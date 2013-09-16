function funct(element, functions) {
    var list = [];
    for(var i = 0; i < functions.length; i++) {
        list.push(functions[i](element));
    }
    
    return list;
}

function add_two(elem) {
    return elem + 2;
}

function mul_four(elem) {
    return elem * 4;
}

function div_three(elem) {
    return elem / 3;
}

function test() {
    var l = [];
    l.push(add_two);
    l.push(mul_four);
    l.push(div_three);
    
    var x = 15;
    
    var list = funct(x, l);
    console.log(list);
}
