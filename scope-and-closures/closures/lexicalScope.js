var c = 2;

function foo() {
    var b = 3;
    console.log(`b in foo: ${b}`);

    function bar() {
          var a = 1;
          console.log('a + b + c in bar: ' +a + b + c);
          console.log(`c in bar: ${c}`);
    }
    bar();
}

foo();
