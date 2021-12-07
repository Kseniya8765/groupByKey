/*
You need to create a function, which will group an array of objects by a key.
Requirements:
 1. Ability to group by any key (in the example “universe” key is used).
 2. Return an error if a key is not provided.
 3. Return an error if an array is not provided.
 4. Return an empty object if the provided key does not exist.
 5. The function should be immutable (return a new array).
*/
const arr = [
    { id: 1, universe: "marvel", name: "Spider Man" },
    { id: 2, universe: "marvel", name: "Iron Man" },
    { id: 3, universe: "dc", name: "Aqua Man" },
    { id: 4, universe: "dc", name: "Bat Man" },
    { id: 5, universe: "marvel", name: "Hulk" }
  ];
  
  const groupBy = (arr, key) => {
  
    if (key === ""){
      throw new Error("key is not provided");
    }
    if (arr.length === 0){
      throw new Error("array is not provided");
    }
    if (!arr[0].hasOwnProperty(key)){
      return {};
    }
  
    const newObj = arr.reduce(function (obj, currentValue) {
      if (!obj[currentValue[key]]) {
        obj[currentValue[key]] = [];
      }
      obj[currentValue[key]].push(currentValue);
      return obj;
    }, {});
    return newObj;
  };
  
  const ByUniverse = groupBy(arr, "universe");
  
  console.log(ByUniverse);