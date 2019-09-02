'use strict'
function foo(a) {
  console.log(a);

  // will create b outside of strict mode
  // when LHS lookup fails.
  b = a;
  console.log(b);
}

foo(2);
