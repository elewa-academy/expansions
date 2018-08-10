function cast(type, value) {

	if (type == "Number") {
    	return Number(value);

    } else if (type == "String") {
    	return value;

    } else if (type == "Null") {
    	return null;

    } else if (type == "Boolean") {
		if (value === "true") {
			return true;
		} else {
			return false;
		};
    };
    // functions return undefined by default
};