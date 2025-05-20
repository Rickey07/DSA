// Given a sorted Array reverse it using different method.(in Place)

function reverseArray(array=[]) {
    // Solving using two pointers.
    let lastElementIndex = array.length - 1;
    let firstElementIndex = 0;
    while(lastElementIndex>firstElementIndex) {
        let lastElement = array[lastElementIndex];
        let firstElement = array[firstElementIndex];
        array[firstElementIndex] = lastElement;
        array[lastElementIndex] = firstElement
        lastElementIndex--
        firstElementIndex++
    }
    console.log(array);
    return array;
}

reverseArray([10,20,30,40,50,60,70,80])