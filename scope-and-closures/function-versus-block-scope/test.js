// Principle of least privilege
// - should only expose what is minimally neccessary, hiding everything else.
// - doSomethingElse and b are now not availible in the global scope bubble.
function doSomething(a){
    function doSomethingElse(a) {
        return a - 1;
        }
    var b;

    b = a + doSomethingElse(a*2);
    console.log(b*3);
}

doSomething(2); //15
