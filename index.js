function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        Object.values(collection).forEach(item => callback(item));
    }

    return collection;
}

function myMap(collection, callback) {
    const newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        }
    } else {
        Object.values(collection).forEach(item => newArray.push(callback(item)));
    }

    return newArray;
}

function myReduce(collection, callback, start) {
    // Handle arrays
    let acc;
    if (Array.isArray(collection)) {
        if ( start ) {
            acc = start;
        } else {
            acc = collection[0];
            console.log(`Initial acc value - array: ${acc}`)
        }
        
        let i;
        acc !== start ? i = 1 : i = 0;
        for (i; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }

    // Handle objects
    } else {
        if ( start ) {
            acc = start
        } else {
            acc = Object.values(collection)[0]
        }

        let x;
        const newArray = [];
        acc !== start ? x = 1 : x = 0; // skip first item if start not specified
        Object.values(collection).forEach(item => newArray.push(item))
        for (x; x < newArray.length; x++) {
            acc = callback(acc, newArray[x], collection);
        }
    }
    return acc;
}

function myFind(collection, predicate) {
    let newArray = [];
    if (Array.isArray(collection)) {
        newArray = collection;
    } else {
        Object.values(collection).forEach(item => newArray.push(item))
    };

    for (let i = 0; i < newArray.length; i++) {
        if ( predicate(newArray[i]) ) {
            return (newArray[i]);
        }
    }
}

// My Find tests
// console.log("Array test - expecting: 2");
// console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));

// console.log("Object test - expecting: 4");
// console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }));

function myFilter(collection, predicate) {
    let tempArray = [];
    let newArray = [];
    if (Array.isArray(collection)) {
        tempArray = collection;
    } else {
        Object.values(collection).forEach(item => tempArray.push(item))
    };

    for (let i = 0; i < tempArray.length; i++) {
        if ( predicate(tempArray[i]) ) {
            newArray.push(tempArray[i])
        }
    }
    return newArray;
}

// My Filter tests
// console.log("Array test - expecting: [2, 4, 6]");
// console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));

// console.log("Object test - expecting: []");
// console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }));

function mySize(collection) {
    if (Array.isArray(collection)) {
            return collection.length;
    } else {
        let counter = 0;
        for (const item in collection) {
            counter ++;
        }
        return counter;
    }   
}

// My Size tests
// console.log(`Object test - expecting 3`);
// console.log(mySize({one: 1, two: 2, three: 3}));

// console.log('Empty array test - expecting 0');
// console.log(mySize([]));

function myFirst (collection, num) {
    const newArray = [];
    if (Array.isArray(collection)) {
        if (!num) {
            return collection[0];
        } else {
            for (let i = 0; i < num; i++) {
                newArray.push(collection[i]);
            }
        }
    } else {
        if (!num) {
            return Object.values(collection[0]);
        } else {
            Object.values(collection).forEach(item => newArray.push(item));
        }
    }
    return newArray;
}

// My First tests
// console.log(`No num passed. Expect 5`);
// console.log(myFirst([5, 4, 3, 2, 1]));

// console.log('Num passed. Expect [5, 4, 3');
// console.log(myFirst([5, 4, 3, 2, 1], 3));


function myLast (collection, num) {
    let tempArray = [];
    let newArray = [];
    if (Array.isArray(collection)) {
        tempArray = collection;
    } else {
        for (const element in collection) {
            Object.values(collection).forEach(item => tempArray.push(element))
        }
    }

    if (num) {
        for (let i = tempArray.length - 1; i >= num - 2; i--) {
            newArray.push(tempArray[i]);
        }
        return newArray.reverse();
    } else {
        return tempArray[tempArray.length - 1];
    }
}

// My Last tests
// console.log(`No num passed. Expect 1`);
// console.log(myLast([5, 4, 3, 2, 1]));

// console.log('Num passed. Expect [2, 3, 4]');
// console.log(myLast([1, 2, 3, 4], 3));

function myKeys(collection) {
    let newArray = [];
    let tempArray = Object.entries(collection);

    for (let i = 0; i < tempArray.length; i++) {
        newArray.push(tempArray[i][0]);
    }
    return newArray;
}

//My Keys tests
// console.log(`Expect ["one", "two", "three"]`);
// console.log(myKeys({one: 1, two: 2, three: 3}));

function myValues(collection) {
    let newArray = [];
    let tempArray = Object.entries(collection);

    for (let i = 0; i < tempArray.length; i++) {
        newArray.push(tempArray[i][1]);
    }
    return newArray;
}