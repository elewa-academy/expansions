function handler() {
	
	// read & clean user input from DOM
    var input_type = document.getElementById("input-type").value; 
    var input_value = document.getElementById("input-value").value;
    var input = cast(input_type, input_value);

    var expected_type = document.getElementById("expected-type").value;
    var expected_value = document.getElementById("expected-value").value;
    var expected = cast(expected_type, expected_value);


	// perform logic. determine user rightness
	var response;
	var actual = snippet_function(input);

	if ( Object.is(actual, expected) ) {
		response = "PASS!";
	} else {
		response = "check the console for debugging trace";
		console.log(snippet_trace(input, expected));
	};


	// write response to DOM
    var response_div = document.getElementById("response-div");
    response_div.innerHTML = response;
};

// event listener, so the things happen when you click the button
document.getElementById("test-button").addEventListener("click", handler);



// utility function: necessary, but not the main purpose
// encapsulated: otherwise you'd have to write this twice

function cast(type, value) {

	if (type == "Number") {
    	return Number(value);

    } else if (type == "String") {
    	return value;

    } else if (type == "Null") {
    	return null;

    } else if (type == "Boolean") {
    	// why is this not quite right?
    	return Boolean(value);

    };
    // functions return undefined by default
};

