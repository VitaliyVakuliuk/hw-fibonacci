const n =  parseFloat(prompt('Enter Fibonacci number'));
while (n < 1) {
    alert('Enter valid number');
    n = parseFloat(prompt('Enter n'));
}

function fibloop(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    let first = 1;
    let second = 1;
    let next
    for (let i = 2; i < n; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return next;
}

function recMethod(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return recMethod(n - 1) + recMethod(n - 2);
    }
}

function fibRec(n) {
    return n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2);
}

function arrey(n) {
    const fibNums = [1, 1]
    for (let i = 2; i < n; i++) {
        fibNums.push(fibNums[i - 1] + fibNums[i - 2]);
    }
    return fibNums.pop();
}

document.write('You enter n = ' + n + '<br>');
document.write('Cycle method: ' + fibloop(n) + '<br>');
document.write('Recursive method: ' + recMethod(n) + '<br>');
document.write('Recursive method: ' + fibRec(n) + '<br>');
document.write('Arrey method: ' + arrey(n) + '<br>');