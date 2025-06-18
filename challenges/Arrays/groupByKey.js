function groupBy(arr, key) {
    // Your implementation
    const map = {};

    arr.forEach((instance) => {
        const keyValue = instance[key];
        if (!map[keyValue]) {
            map[keyValue] = []
        }
        map[keyValue].push(instance)
    })
    return map;
}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');
