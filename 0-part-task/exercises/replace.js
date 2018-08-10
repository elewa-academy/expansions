{ // exercises for String.prototype.replace()
	let a = 404;
	let expected = 414;

	try {
		let actual = a.replace("0", "1");
	} catch (err) {
		throw(err);
	};

	console.assert(actual === expected, "actual !== 414")

	// ----------------------

	let b = "-1-1";
	let actual_b = b.replace("-1", "");

	let exp_b;

	console.assert(exp_b === actual_b, "exp_b !== actual_b");
};