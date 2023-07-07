function deepClone(origin, target) {
  var toStr = Object.prototype.toString;
  var arrType = "[object Array]";
  var type = toStr.call(origin) === arrType ? [] : {}
  var tar = target || type;

  for (var k in origin) {
    if (origin.hasOwnProperty(k)) {
      if (typeof origin[k] === "object" && origin[k] !== null) {
        tar[k] = toStr.call(origin[k]) === arrType ? [] : {};
        deepClone(origin[k], tar[k]);
      } else {
        tar[k] = origin[k];
      }
    }
  }

  return tar;
}

const testObj = {
  name: "dnhyxc",
  info: {
    age: 18,
    hobby: ["basketball", "coding", "reading"],
  },
};

const testArr = [0, 1, [2, 3], 4, [5, 6, 7, [8, 9, 10]]]

const cloneObj = deepClone(testObj);
const cloneArr = deepClone(testArr);

cloneObj.info.age = 20;

console.log(cloneObj, 'cloneObj');
console.log(testObj, 'testObj');

testArr[2] = [22, 33]

console.log(cloneArr, 'cloneArr');
console.log(testArr, 'testArr');

function deepCloneWithWeekMap(origin, hashMap = new WeakMap()) {
  // 说明是基本数据类型
  if (origin === undefined || typeof origin !== 'object') {
    return origin
  }

  if (origin instanceof Date) {
    return new Date(origin)
  }

  if (origin instanceof RegExp) {
    return new RegExp(origin)
  }

  const hashKey = hashMap.get(origin);

  if (hashKey) return hashKey;

  const target = new origin.constructor();

  hashMap.set(origin, target);

  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone(origin[k], hashMap)
    }
  }

  return target;
}

let test1 = {};
let test2 = {}

test2.test1 = test1
test1.test2 = test2

console.log(deepClone(test2));