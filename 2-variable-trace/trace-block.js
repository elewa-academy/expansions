const a = 12345;
const b = "12";
const c = "";

const expected = 345;

let actual;

{ //  Number(String(a).replace(b, c));
	const step_1 = String(a); 
	const step_2 = step_1.replace(b, c); 
	const step_3 = Number(step_2); 
	actual = step_3;
};



