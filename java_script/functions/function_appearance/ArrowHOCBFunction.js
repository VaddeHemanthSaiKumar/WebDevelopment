// arrow higher order function
// arrow callback function
let arrowHigherOrderFunction=(anotherfunction)=>{
    anotherfunction();
}
arrowHigherOrderFunction(()=>{
    console.log("AnonmyousCallBackFunction.")
})