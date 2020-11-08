//es5
//es6
Ecma Script


//es5
function add(a,b){
    return a+b
}

add(1,2)
3

//es6
const add = (a,b) => {
    return a+b
}


function test(a,b){
    var out = [a,b]
    return out

    return a,b

}


test(1,2)
[1,2]

class geo{
    constructor(lat,long){
        this.lat = 43.22,
        this.long = 70.11
    }
}

class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country;
    }
}

var French = new language('French','France');
language {lat: 43.22, long: 70.11, name: "French", country: "France"}


var a = [0,1,2,3]
// map help to apply logic and return same length output as input array
a.map((data) => { return data*2})
[0, 2, 4, 6]

///filter only return those value for which output is true
a.filter((data) => { return data*2})
[1, 2, 3]

falsy = 0,null,undefined,false
truth any number expect 0 , true, string


var a = ['Nivya','John']
a.filter((data) => { return data=="Nivya"});;

var city = ["Delhi","Mumbai","Amsterdam","Newyork","Helsinki"]
undefined
city.pop(2)
"Helsinki"
city.pop(2987897878)
"Newyork"