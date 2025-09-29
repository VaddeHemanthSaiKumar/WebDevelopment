// area options
// higher order operations
function toCalculateArea(areaOperationalCode){
    console.log(areaOperationalCode(5));
}
// callback functions
toCalculateArea(side=>{return side*side});
toCalculateArea(side=>{return 6*side*side});