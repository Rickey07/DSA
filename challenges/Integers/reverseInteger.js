function reverseInteger(num) {
    let isNegative = num < 0 ? true : false
    num = Math.abs(num);

    let reversedInt = 0;

    while(num>0) {
        let digit = num%10;
        reversedInt = reversedInt * 10 + digit
        num = Math.floor(num/10)
    }
    return isNegative ? -reversedInt : reversedInt
}