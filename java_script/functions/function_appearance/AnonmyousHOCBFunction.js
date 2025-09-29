// anonmyous higher order function
// anonmyous callback function
let anonmyousHigherOrderFunction=function(anotherFunction){
    anotherFunction();
}
anonmyousHigherOrderFunction(function(){
    console.log("AnonmyousCallBackFunction.")
});