var fn;

function foo(){
  var a = 2;

  function bar(){
    console.log(a);
  }

  fn = bar;
}

function baz(){
  fn();
}

baz(); // displays closure of baz having access to bars inner scope outside of its lexical scope. 
