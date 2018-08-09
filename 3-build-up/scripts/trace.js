// automated tracing function for testing with new values
function trace(args, expected) { 

	const trace = [];

	trace.push( args );

	const step_1 = String(args.a);
	trace.push( {op_1: "String(a);"} );
	trace.push( {step_1} );

	const step_2 = step_1.replace(args.b, args.c);
	trace.push( {op_2: "step_1.replace(b, c);"} );
	trace.push( {step_2} );

	const step_3 = Number(step_2);
	trace.push( {op_3: "Number(step_2);"} );
	trace.push( {actual: step_3} );

	trace.push( {expected} );

	return trace;

};