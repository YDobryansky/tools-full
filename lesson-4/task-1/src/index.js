// file path: index.js
import "./polyfills/array-flat.js"; // Import polyfills

import { sum, mult } from "./calculator/index.js";
import calcExpression from "./calculator/index.js"; // Default export
import fetchUser from "./profile/gateway.js"; // Default export
import { printProfile } from "./profile/index.js"; // Named export

const calcResult = calcExpression("1 + 2");
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser("facebook");
printProfile({ name: "Tom", from: "The World" });

// Ensure the script executes without errors
