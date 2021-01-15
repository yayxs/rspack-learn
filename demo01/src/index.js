const { add } = require("./utils/commonjs.util.js");

import sum from "./utils/esm.util.js";

add(1, 2);
sum(3, 4);
