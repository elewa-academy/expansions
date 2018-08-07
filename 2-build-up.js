function snippet_function(param) {
	let result; // number
	result = Number(String(param).replace("12", ""));
	return result;
};

// automated tracing function for testing with new values
function snippet_trace(arg, expected) { 

	const trace = [];

	trace.push( {input: arg} );

	const step_1 = String(arg);
	trace.push( "Step 1: String(arg) -> str" );
	trace.push( step_1 );

	const step_2 = step_1.replace("12", "");
	trace.push( "Step 2: step_1.replace(\/\'12\', \'\') -> str" );
	trace.push( step_2 );

	const step_3 = Number(step_2);
	trace.push( "Step 3: Number(step_2) -> #" );
	trace.push( {actual: step_3} );

	trace.push( {expected} );

	return trace;

};


//run_it();

function run_it(){ // 12345 -> 345
	const arg = 12345; // number
	const expected = 345; // number
	console.log("\n" + arg + " should return " + expected);

	const actual = snippet_function(arg);
	console.log("actual: " + actual);

	const trace_log = snippet_trace(arg, expected);
	console.log(trace_log);
};
