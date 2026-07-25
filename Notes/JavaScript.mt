# JavaScript:

JavaScript is prog lang that is used to add functionalities to the webpages.
we can use JavaScript both in 'client-side' and 'server-side'

# How many ways we can write JavaScript code:
 in two ways:
     1)Internal JavaScript
	  > writing the JavaScript code in the html file
	  > for this we need <script></script> tag
	  > it should be written inside <body> tag at the end before the </body> tag.
     2)External JavaScript
	  > first we have to create one separate JavaScript file by using '.js' extension
	  > in <script></script> tag we have to give the path of  the js file in the src attribute.

# Printing statement in JavaScript:
	console.log()

# how to execute JavaScript program:
	we can execute JavaScript program both in the browser and outside the browser.
	** in the browser **
	   > for executing js program inside the browser we need html file.
	   > we have to inspect the webpage and go to console to get the output.
	** outside the browser **
	   > for this we have to install nodejs.
	   > nodejs is JavaScript runtime Environment used to execute js file outside of the browser.
	   > syntax :  node filename.js

# Token:
	token is basic building blocks or smallest unit in any programming language.
	
	> components of token:
	
		keyword, identifier, literals, separator, operators.

	*keywords*
		these are predefined words or reserved words having some meaning.
		should be written in lowercase
	*identifier*
		component where we can assign names.
		we cant use keyword as identifier
		we cant give space in-between the identifier
		special character we cant use (except $ and _)
		we cant start with numbers.
	
# variable
	> variable is container where we can store the data /value.
	> in JavaScript for creating variable we need three keywords
		'var' , 'let' , 'const'
	

	var keyword:
		var sname;      //variable decleration possible
		sname = "ram";  //variable initialization possible
		var sage = 22;	// variable dec and initzn possible
		sage = 23;	//variable reinitialization possible
		var sname;      //variable redeclaration possible

	let keyword:
		in let keyword redeclaration is not possible

		eg:
  			let phNo = 9865423456;
			let phNo;  // redeclaration is not possible

	const keyword:
		to create any constant variable we need const keyword.
		here decl and intia we have to do in same line.