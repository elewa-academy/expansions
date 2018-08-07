## Great Title

this expression takes in a thing, turns it to a string, removes "12" if it exists, and turns the result to a number.


### Index
* [Learning Objective](#learning-objective)
* [Study Snippet](#study-snippet)
* [Helpful Links](#helpful-links)
* [More Practice](https://elewa-academy.github.io/12345-345)

___

## Learning Objective

Language Features:
* Number();
* String();
* "".replace(x, y);

[TOP](#index)

___
 
## Study Snippet

```js
// {number, 12345} -> {number, 345}
Number(String(12345).replace("12", ""));
  //  {number, 12345}
  String(12345);
  //  {string, "12345"}
  "12345".replace("12", "");
  //  {string, "345"}
  Number("345");
  //  {number, 345}
```

[TOP](#index)

___

## Helpful Links

* Number(x): [w3schools](https://www.w3schools.com/jsref/jsref_number.asp), [pitfalls](https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls)
* String(x): [w3schools](https://www.w3schools.com/jsref/jsref_string.asp)
* "".replace(x, y):  [alligator.io](https://alligator.io/js/string-replace/), [w3schools](https://www.w3schools.com/jsref/jsref_replace.asp)

Alternative methods: 
* [parseInt & parseFloat](https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/)
* [#.toString()](https://www.hostingadvice.com/how-to/javascript-int-string/)



[TOP](#index)



___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
