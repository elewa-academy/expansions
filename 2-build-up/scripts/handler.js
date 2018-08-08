function handler() {
    console.log("-----------------");

    // read, clean & process user input
    var a_type = document.getElementById("a-type").value;
    var a_value = document.getElementById("a-value").value;
    var a = cast(a_type, a_value);
    
    var b_type = document.getElementById("b-type").value;
    var b_value = document.getElementById("b-value").value;
    var b = cast(b_type, b_value);

    var c_type = document.getElementById("c-type").value;
    var c_value = document.getElementById("c-value").value;
    var c = cast(c_type, c_value);

    var expected_type = document.getElementById("expected-type").value;
    var expected_value = document.getElementById("expected-value").value;
    var expected = cast(expected_type, expected_value);


	// perform logic. (determine user rightness)
    var actual = call_expression(a, b, c);

    var args = {
            a: a, 
            b: b,
            c: c
        };
    var step_through = trace(args, expected);

    var response;
	if ( Object.is(actual, expected) ) {
		response = "  PASS!";
	} else {
		response = "  fail.";
	};


	// write response to user
    var response_div = document.getElementById("test-response");
    response_div.innerHTML = response;

    console.log(step_through);
};

