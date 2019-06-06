//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, fn2, integer) {
  return fn.call(fn2, integer);
}
