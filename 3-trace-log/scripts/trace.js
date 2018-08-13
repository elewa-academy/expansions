// automated tracing function for testing with new values
function trace(args, expected) { 

	const trace = [];

	trace.push( args );

	let step_1;
	try {
		step_1 = String(args.a);
		trace.push( {op_1: "String(a);"} );
		trace.push( {step_1} );
	} catch (err) {
		trace.push( {op_1: "String(a);"} );
		trace.push(err);
		trace.push( {op_2: "step_1.replace(b, c);"} );
		trace.push( {op_3: "Number(step_2);"} );
		trace.push( {expected} );
		return trace;
	};

	let step_2;
	try {
		step_2 = step_1.replace(args.b, args.c);
		trace.push( {op_2: "step_1.replace(b, c);"} );
		trace.push( {step_2} );
	} catch (err) {
		trace.push( {op_2: "step_1.replace(b, c);"} );
		trace.push({op_2: err});
		trace.push( {op_3: "Number(step_2);"} );
		trace.push( {expected} );
		return trace;
	};

	let step_3;
	try {
		step_3 = Number(step_2);
		trace.push( {op_3: "Number(step_2);"} );
		trace.push( {actual: step_3} );
	} catch (err) {
		trace.push( {op_3: "Number(step_2);"} );
		trace.push(err);
		trace.push( {expected} );
		return trace;
	};

	trace.push( {expected} );

	return trace;

};