// finding gray area
let areaOfSquare=side=>{return side*side};
let areaOfRightAngledTriangle=(base,height)=>{return 0.5*base*height};
let areaOfCircle=radius=>{return 3.142*radius*radius};
// function composition
let areaOfGrayArea=()=>{return areaOfSquare(350)-(areaOfRightAngledTriangle(300,350)+areaOfCircle(50))};

document.getElementById("gray_area_heading").innerText="GrayArea : "+areaOfGrayArea()+"cm";