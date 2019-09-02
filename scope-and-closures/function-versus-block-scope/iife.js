var a = 2;

(function IIFE(global){
    var a = 3;
    console.log(a);
    console.log(global.a);
})(window);
