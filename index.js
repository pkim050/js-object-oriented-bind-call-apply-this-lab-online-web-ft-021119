//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, fn2, integer) {
  return fn.call(fn2, integer);
}

function setThisWithApply(fn, fn2, array) {
  return fn.apply(fn2, array);
}
