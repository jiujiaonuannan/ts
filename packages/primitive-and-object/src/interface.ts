interface IDescription {
  readonly name: string;
  age: number;
}

const obj3: IDescription = {
  name: 'linbudu',
  age: 599,
};

// 无法分配到 "name" ，因为它是只读属性
obj3.name = "林不渡";
