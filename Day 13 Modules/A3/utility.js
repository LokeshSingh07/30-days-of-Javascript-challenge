const PI = 3.14;
const PORT = 4000;

const square = (a)=>{
    return a*a;
}

const circle = (r)=>{
    return PI*r*r;
}

const triangle = (b, h)=>{
    return (b*h)/2;
}


module.exports = {
    PI,
    PORT,
    square,
    circle,
    triangle
}