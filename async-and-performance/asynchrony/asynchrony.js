var a = 1;
var b = 2;

function foo() {
    a++;
    b = b * a;
    a = b + 3;
}

function bar() {
    b--;
    a = 8 + b;
    b = a * 2;
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.google.com');
xhr.send();
xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
          alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
          alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
    }
};

