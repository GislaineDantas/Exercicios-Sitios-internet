'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let mais = 0;
    let menos = 0;
    let zero = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zero += 1;
        }
        else{
            if(arr[i] > 0){
                mais += 1;
            }
            else{
                menos += 1;
            }
        }
    }
    
    console.log((mais / arr.length) || 0);
    console.log((menos / arr.length) || 0);
    console.log((zero / arr.length) || 0);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}