import "core-js/stable";
import "regenerator-runtime/runtime";
console.log(`babel`);

const foo = ()=>{
    console.log(`foo`);
}
[1, 2, 3].map(function(n) {
    return n + 1;
  });

const p = new Promise()