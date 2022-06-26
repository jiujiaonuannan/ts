const arr1: string[] = [];

const arr2: Array<string> = [];

const arr4: [string, string, string] = ['lin', 'bu', 'du'];

console.log(arr4[599]);

const arr6: [string, number?, boolean?] = ['linbudu'];

// const arr7: [name: string, age: number, male: boolean] = ['linbudu', 599, true];

const arr8: string[] = [];

const [ele1, ele2, ...rest] = arr8;

const arr5: [string,  number, boolean] = ['linbudu', 599, true];

// 长度为 "3" 的元组类型 "[string, number, boolean]" 在索引 "3" 处没有元素。
const [name, age, male, others] = arr5;