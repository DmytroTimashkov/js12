function getFactorial(n){
    if ( n === 1 || n === 0)return 1;
    else{
        return n * getFactorial(n - 1);
    }
}


console.log(getFactorial(5))



function pow(num,degree){
    if (degree === 1) return num;
    else{
        return num * pow(num,degree - 1);
    }
}


console.log(pow(2,10))



function sum(a,b){
    if (b === 0) return 1 ;
    else {
        return a + sum(a/a,b - 1);
    }

}


console.log(sum(25,5))