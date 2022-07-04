function myEach(collection, callback) {
  let array = collection;
  if(typeof collection === 'object') {
    array = Object.values(collection);
  }
  
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    callback(array[index]);
  }

  return collection;
}

function myMap(collection, callback) {
  let array = collection;
  let newArray = [];
  if(typeof collection === 'object') {
    array = Object.values(collection);
  }

  for(const element of array) {
    newArray.push(callback(element));
  }

  return newArray;
}

function myReduce(collection, callback, acc = 0) {
  let array = collection;
  let result = acc;
  
  if(typeof collection === 'object') {
    array = Object.values(collection);
  }

  for(const element of array) {
    result = callback(result, element, array);
  }

  return result;
}

function myFind(collection, predicate) {
  let array = collection;

  if(typeof collection === 'object') {
    array = Object.values(collection);
  }

  for (const element of array) {
    if(predicate(element)) return element;
  }

  return undefined;
}

function myFilter(collection, predicate) {
  let newArray = [];
  let array = collection;

  if(typeof collection === 'object') {
    array = Object.values(collection);
  }

  for(const element of array) {
    if(predicate(element)) newArray.push(element);
  }

  return newArray;
}

function mySize(collection) {
  let array = collection;

  if(typeof collection === 'object') {
    array = Object.values(collection);
  }

  let i = 0;
  while(array[i]) {
    i++;
  }

  return i;
}

function myFirst(array, n) {
  let newArray = [];
  if(n >= 1) {
    for (let index = 0; index < n; index++) {
      newArray.push(array[index]);
    }

    return newArray;
  }
  return array[0];
}

function myLast(array, n) {
  let newArray = [];

  if(n >= 1) {
    for (let index = array.length - n; index <= n; index++) {
      newArray.push(array[index]);
    }
    return newArray;
  }
  return array[array.length - 1];
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}