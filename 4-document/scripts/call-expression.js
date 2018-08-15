// automated tracing function for testing with new values
function call_expression(args, trace) { 


	let result;
	if (trace) {
		result = {};
		result.args = args;
	};

	let step_1;
	try {
		step_1 = String(args.a);
	} catch (err) {
		result.step_1 = err;
		return result;
	} finally {
		if (trace) {
			result.step_1 = step_1;
		};
	};

	let step_2;
	try {
		step_2 = step_1.replace(args.b, args.c);
	} catch (err) {
		result.step_2 = err;
		return result;
	} finally {
		if (trace) {
			result.step_2 = step_2;
		};
	};

	let step_3;
	try {
		step_3 = Number(step_2);
	} catch (err) {
		result.step_1 = err;
		return result;
	} finally {
		if (trace) {
			result.step_3 = step_3;
		};
	};

	if (!trace) {
		result = step_3;
	};

	return result; 

};