// Number(String(input).replace("12", ""));

function trace_it() {
	console.log("-----------------");

	// read, clean & process user input
	var a = 12345;
	var b = "12";
	var c = "";

	var expected = 345;

	var initial_state = {
		a: {[typeof a]: a},
		b: {[typeof b]: b},
		c: {[typeof c]: c}
	};


	// do the logic
	var s1 = String(a);

	var s2 = s1.replace(b, c);

	var sf = Number(s2);


	// display to user
	var s0_display = document.getElementById("s0");
	s0_display.innerHTML = "(inspect page)";
	console.log(initial_state);

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

};