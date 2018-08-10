// Number(String(input).replace("12", ""));

function trace() {
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

	var s0 = {
		a: {[a_type]: a},
		b: {[b_type]: b},
		c: {[c_type]: c}
	};

	var expected_type = document.getElementById("expected-type").value;
	var expected_value = document.getElementById("expected-value").value;
	var expected = cast(expected_type, expected_value);


	// do the logic
	var s1;
	try {
		s1 = String(a);
	} catch(err) {
		throw(err);
	};

	var s2;
	try {
		s2 = s1.replace(b, c);
	} catch(err) {
		throw(err);
	};

	var sf;
	try {
		sf = Number(s2);
	} catch(err) {
		throw(err);
	};

	// display to user
	var s0_display = document.getElementById("s0");
	s0_display.innerHTML = "(inspect page)";
	console.log(s0);

	var s1_t = document.getElementById("s1-t");
	s1_t.value = typeof s1;
	var s1_v = document.getElementById("s1-v");
	s1_v.value = s1;

	var s2_t = document.getElementById("s2-t");
	s2_t.value = typeof s2;
	var s2_v = document.getElementById("s2-v");
	s2_v.value = s2;

	var sf_t = document.getElementById("sf-t");
	sf_t.value = typeof sf;
	var sf_v = document.getElementById("sf-v");
	sf_v.value = sf;

	console.assert(sf === expected, [{actual: sf}, {expected: expected}] );
};