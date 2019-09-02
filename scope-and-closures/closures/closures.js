// Because of where bar is declared
// - bar has a lexical scope closure over the inner scope of foo
// - this keeps that scope alive for bar to reference at any later time

function foo(){
    var a = 2;

    function bar(){
          console.log(a);
        }

    return bar;
}

var baz = foo();

baz();
