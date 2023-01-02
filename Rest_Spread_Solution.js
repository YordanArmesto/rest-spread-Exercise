//Ex #1 
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)
//Ex #2
const findMin = (...args) => Math.min(...args)
//Ex #3
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
//Ex #4
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]
//Ex #5
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
//Ex #6
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
//Ex #7  
const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}
//Ex #8
const removeKey = (obj, key) => {
    let newObj = { ...obj }
  delete newObj[key]
  return newObj;
}
//Ex #9
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
//Ex #10
const update = (obj, key, val) => {
    let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}
