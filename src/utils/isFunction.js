function isFunction(fn) {
  return fn && {}.toString.call(fn) === "[object Function]";
}

export default isFunction;
