



function printdiv(){
var result = document.getElementById("result");
for(let i = 1; i<=10 ; i++){
    var div = document.createElement("div");
    div.textContent = `div ${i}`;
    div.className = i % 2 === 0? "chan":"le";
    result.appendChild(div); 

    
}
}