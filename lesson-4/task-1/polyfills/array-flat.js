// file path: /polyfills/array-flat.js
console.log("polyfill for flat");
window.Array.prototype.flat =
  Array.prototype.flat ||
  function flat() {
    // ... implementation for older browsers
  };
