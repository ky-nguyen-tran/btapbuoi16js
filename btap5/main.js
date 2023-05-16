


function inDaySo(){
    let inputnumber = document.getElementById("inputvalue");
    let n = Number(inputnumber.value);
    let result = "";
    for( let i = 1; i<= n; i++ ){
        result += i + " ";

    }
inputnumber.value = result
}
