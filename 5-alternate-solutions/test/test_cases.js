var test_cases = {
	  'Elevator should go from 0 to 2': function() {
	    deepeq(2, simple_elevator(0, "2"));
	  },
	  'Elevator should go from 3 to 1': function() {
	    deepeq(-2, simple_elevator(3, "1"));
	  },
	  'Elevator should go from 2 to 2': function() {
	    deepeq(0, simple_elevator(2, "2"));
	  }
	}