
// A character of JS: JS's variable type is so flexible! 
var myGlobalVariable = 0;
myGlobalVariable = "Tom";
myGlobalVariable = [];
myGlobalVariable = {};

// when 'let' is used, it doesn't allow the variable to be another type.
let myGlobalVariable2 = 0;


// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function () {
    let myFunctioinalVariable = 0;

        // let Start = function() {    <=== it can be used too, but the prof prefer the below one            
        function Start() {
            let mylocalVariable = 0;
            console.log("App Started..." + myFunctioinalVariable);
            console.log(`App Started...${myFunctioinalVariable}`);  // same
        }

        console.log("Loaded...");
        window.addEventListener("load", Start); // This is 'call back'. when load is doen, it calls Start function.
                                                // "Loaded... /n App Started...""
        // window.addEventListener("load", () => )

})();