// named higher order function
// named callback function
function namedFunctionHigherOrderFunction(anotherFunction){
    anotherFunction();
}
namedFunctionHigherOrderFunction(function(){
    console.log("NamedCallBackFunction");
});