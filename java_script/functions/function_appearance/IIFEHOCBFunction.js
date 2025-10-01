// immediately invoked function expression higher order function
// immediately invoked function expression callback function
(function (){
    // higher order function
    let arrowHigherOrderFunction = (anotherFunction) =>{
        anotherFunction();
    }
})
// callback function
arrowHigherOrderFunction(() => {
    console.log("ArrowCallBackfunction");
})();