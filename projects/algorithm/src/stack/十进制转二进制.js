const tentransformtwo = (num) => {
    let stack = [];
    while (num >0) {
        stack.push(num % 2);
        num = Math.floor(num / 2);
    }

    let result = '';
    while (stack.length > 0) { 
        result += stack.pop();
    }
    return result;
}

console.log(tentransformtwo(10)); // 1010   10/2=5  5/2=2  2/2=1  1/2=0
console.log(tentransformtwo(175)); // 10101111   175/2=87  87/2=43  43/2=21  21/2=10  10/2=5  5/2=2  2/2=1  1/2=0