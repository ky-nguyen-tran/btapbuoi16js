function soxvason(x,n){
    let sum = 0;
    for (let i = 0; i<=n ;i++){
        sum = sum + Math.pow(x,i); 
    }
    return sum 
}

console.log(soxvason(2,4) - 1)