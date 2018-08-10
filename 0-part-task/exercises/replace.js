// exercises for String.prototype.replace()

let a = 404;

try {
	a.replace("0", "1");
} catch (err) {
	throw(err);
};

// ----------------------

let b = "-1-1";
let actual_b = b.replace("-1", "");

let exp_b;

console.assert(exp_b === actual_b, "exp_b !== actual_b");