### Lesson Plan notes Php
- BIG benefit see patterns in all programming languages deepen your understanding of programming as you do this. 
- Some people get jobs in php - word press is a great way to get started 
- kinda like Node - in what it can do 
- running JavaScript files from the command line with Node, and explain that we can do the exact same thing with PHP files using php.
- PHP has a variable analogous to Node's process.argv,
- `$argv` is an array. `$argv[0]` is always the name used to run the script. Higher indices collect arguments themselves.
- The PHP command line tool comes with a built-in server. 
- In the directory containing your index.php file, run: php -S localhost:3000.
- Visit http://localhost:3000, and index.php is being served. PHP automatically serves index.php
- you can embed PHP in HTML. or use <php? /> to wrap whole thing

###### basic structures of the language: (variable declarations; arrays, associative arrays; and classes) 

PHP supports the following data types:
boolean
integer
float
string
array
object
resource
NULL


- $varname


- Superglobals — Superglobals are built-in variables that are always available in all scopes
https://www.php.net/manual/en/language.variables.superglobals.php
* Draw an analogy to running JavaScript files from the command line with Node, and explain that we can do the exact same thing with PHP files using php.
 JavaScript, browsers cannot understand PHP. This means we must run it on a server.
This means we need a server to first interpret the PHP, and then send the result to the browser.
JavaScript templating libraries. We write a template; turn it into HTML on the server; and send the result to the browser. Explain that PHP works similarly.

PHP files always start with <?php.
Variable Declarations 

*  no var keyword is necessary. 
* like JavaScript, we can use any variable to store values of any type.
*  to end every statement with semicolon.
* echo statements don't require parentheses.
* if your argument to echo is wrapped in double quotes, PHP will automatically interpolate variables within the string.
but that we can't embed arithmetic expressions directly into the string.
*  PHP offers all of the same arithmetic operations that JavaScript does, with the addition of an exponentiation operator. review
* 

Echo
echo does not automatically add newlines. So use  \n
and that using the print statement achieves the same effect.

Conditionals 

Reference
String Functions
String repeat 1st one
https://www.php.net/manual/en/function.str-repeat.php


Array & 
Associative Arrays = analogy to JavaScript objects.
you can use anything as a value in an associative array, including other arrays.
iterate over an array using foreach.
iterate over the keys and values of an associative array using foreach

=>
.





PHP has a variable analogous to Node's process.argv,

PHP has a require statement, much like Node's require function.we need to use relative paths for PHP to find the right file.

 Functions 
  functions can be called prior to being defined,
  default parameters
  function makecoffee($type = "cappuccino")
{

How to write better organized, more modular, code.https://en.wikipedia.org/wiki/SOLID
$this keyword always refers to "the object this method was called on".
public properties and methods are things everyone who creates the object can see or use. By contrast, private methods and properties are only available to the object itself.
A class is like a blueprint. Effectively, it says:
$variable = new Class;. Note that the parentheses are optional.
$charizard->speak()
When you create this kind of object, it will have these properties and these methods.
Using the class to create an object is called instantiating the class, and yields a new object, which is called an instance of the class. It's the difference between a floorplan (class) and an apartment (instance).
Constructors: Constructors are fuctions that are automatically called when you create a new instance of a class.
PHP supports OOP and classes. A class is a collection of variables and functions working with these variables.
Encapsulation: PHP5 supports private and protected variables and methods. Prior to PHP5 however, everything is public and must be declared with either the var or function keywords.
Inheritence: PHP allows classes to be extended (see right) with the extends keyword. The child class takes all the variables and functions from the parent class and can extend that class by adding additional variables and adding or overriding functions. If class B extends class A, then A or B can be used anywhere an A is expected, but only B can be used where a B is expected because it contains additional information/methods not found in A.

Remind students that the class is like the "instructions" of a blueprint, and the objects are the results of following the blueprint.

Point out that a blueprint can have properties, too—an obvious one is color.

Point out that this color property is completely independent of any of the objects we get by instantiating the blueprint.
Explain that properties like this, which belong to a class (blueprint) independent of those that it defines for the objects it instantiates, are called static properties.

Point out that classes can have static methods, as well.
Explain that, in this case, our created property simply keep tracks of how many users we've instantiated with new.

Point out that it doesn't make sense to keep this information on an individual user, but that it might be useful to keep it stored on the class.
Point out that, to access a static property or method, we use the syntax: $Classname::$Property.

