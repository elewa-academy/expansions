var test_cases = {

  '[12345 -> 345]': function() {
    assertStrictEquals(snippet_function(12345), 345);
  },
  '[\"3123\" -> 33]': function() {
    assertStrictEquals(snippet_function("3123"), 33);
  },
  '[\"toad\" -> NaN]': function() {
    assertStrictEquals(snippet_function("toad"), NaN);
  },
  '[6128 -> 68]': function() {
    assertStrictEquals(snippet_function(6128), 68);
  },
  '[1212 -> 0]': function() {
    assertStrictEquals(snippet_function(1212), 0);
  },
  '[12 -> 0]': function() {
    assertStrictEquals(snippet_function(12), 0);
  },
  '[null -> NaN]': function() {
    assertStrictEquals(snippet_function(null), NaN);
  },
  '[NaN -> NaN]': function() {
    assertStrictEquals(snippet_function(NaN), NaN);
  },
  '[\"12345\" -> 345]': function() {
    assertStrictEquals(snippet_function("12345"), 345);
  }



};