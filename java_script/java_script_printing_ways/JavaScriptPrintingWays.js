// java script printing ways
// console object(BrowserConsole)
console.log("JavaScriptPrintingWays");
console.log(10+5);//15
console.log(10*5);//50
console.log(console);//console object,normal message form
console.dir(console);//console object,object form
console.dir(document);//document objet,object form
console.dir(window);//window object,object form

//document object
document.write("<span style='color:red;'>FirstStatement</span><br>");
document.write("<span style='color:darkblue;'>SecondStatement</span><br>");
document.writeln("<span style='color:orange;'>ThirdStatement</span><br>");
document.writeln("<span style='color:white;background-color:black;'>FourthStatement</span><br>");
document.writeln("<span style='color:green;'>FifthStatement</span>");

//window object 
window.console.log("BrowserConsole is a part of window object");
window.document.write("DocumentObject is a part of window object");
console.log("BrowserConsole is a part of window object");
document.write("DocumentObject is a part of window object");

//innerHTML java script property
//dom(document object model) manipulation
document.getElementById("container_one").innerHTML="<div style='width:50%;height:50%;background-color:yellow;'><div style='width:50%;height:50%;background-color:darkblue;'></div></div>";

//innerText java script property
//dom(document object model) manipulation
document.getElementById("container_two").innerText="<div style='width:50%;height:50%;background-color:yellow;'><div style='width:50%;height:50%;background-color:darkblue;'></div></div>";
