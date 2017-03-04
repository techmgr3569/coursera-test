(function	(window) {                  //adding '(window)' allows the IIFE to bypass the speakWord var yet-
	var helloSpeaker = {};				//still create the object 'helloSpeaker' and add it to GlobalScope.


var speakWord = "Hello";


// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.

helloSpeaker.speak = function (name) {	//this attaches the helloSpeaker obj. to 'speak' function 
 console.log(speakWord + " " + name);	//outputs to console
}

window.helloSpeaker = helloSpeaker;     //this is the connect point for '(window)' operate to allow it -
										//the helloSpeaker obj. to be added to global scope at this point
})(window);								//this immediately invokes the (window) for 'helloSpeaker' function

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;


// STEP 3: object 'helloSpeaker' ~ attach "speak" method and  which you will expose to the global context
// See Lecture 52, part 1