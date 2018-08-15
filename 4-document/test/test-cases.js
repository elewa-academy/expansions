var test_cases = {



  '[12345 -> 345]': function() {
    assertStrictEquals( call_expression(
      {a: 12345, b: 12, c: ""}),
      345
  );},
  '[\"3123\" -> 33]': function() {
    assertStrictEquals( call_expression(
      {a: "3123", b: 12, c: ""}),
      33
  );},
  '[\"toad\" -> NaN]': function() {
    assertStrictEquals( call_expression(
      {a: "toad", b: 12, c: ""}),
      NaN
  );},
  '[6128 -> 68]': function() {
    assertStrictEquals( call_expression(
      {a: 6128, b: 12, c: ""}),
      68
  );},
  // '[1212 -> 0]': function() {
  //   assertStrictEquals( call_expression(
  //     {a: 1212, b: 12, c: ""}),
  //     0
  // );},
  '[12 -> 0]': function() {
    assertStrictEquals( call_expression(
      {a: 12, b: 12, c: ""}),
      0
  );},
  '[null -> NaN]': function() {
    assertStrictEquals( call_expression(
      {a: 12345, b: 12, c: ""}),
      345
  );},
  '[NaN -> NaN]': function() {
    assertStrictEquals( call_expression(
      {a: NaN, b: 12, c: ""}),
      NaN
  );},
  '[\"12345\" -> 345]': function() {
    assertStrictEquals( call_expression(
      {a: "12345", b: 12, c: ""}),
      345
  );}



};