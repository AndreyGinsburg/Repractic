function findRoots(a,b,c) {
    let D=b*b-4*a*c
    if(D < 0) {
        console.log('No real roots');
    }
    else {
        if(D == 0){
            let x=(0-b)/(2*a);
            console.log(`There is only 1 real root ${x}`);
        }
        else {
            let x1=(Math.sqrt(D)-b)/(2*a);
            let x2=(0-Math.sqrt(D)-b)/(2*a);
            console.log(`Roots are ${x1} and ${x2}`);
        }
    }
}

function isPrime(a) {
    if (a <= 1) {
        console.log('This number is not prime');
    }
    else {
        if (a == 2) {
            console.log('This number is prime');
        }
        else {
            for (let i = 2; i <= Math.sqrt(a); i++) {
                if (a % i == 0) {
                    console.log('This number is not prime');
                    return;
                }
            }
            console.log('This number is prime');
        }
    }
}
   
function sumOfNumSeries(a) {
    let sum=0;
    for (let i = 1; i <= a; i++) {
        let x=1/i;
        sum += x;
    }
    console.log(`Sum of these number series is ${sum.toFixed(2)}`)
}

function reverse(a) {
    console.log(parseInt((String(a).split("").reverse().join(""))));
}
