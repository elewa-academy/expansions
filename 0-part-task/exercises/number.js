{ // exercises for practicing casting to Number

	let a = 0;

	console.assert(Object.is( Number(a), NaN ), "a !== NaN");

	// ------------------------------------------

	let b;

	let step_1 = Number(undefined);
	let exp_b = step_1 += b;

	console.assert(exp_b === "NaNaN", "b !== NaNaN");

};