interface StudentType {
  id: number
  name: string
  desc?: string
}

const student: StudentType = {
  id: 1,
  name: '小明',
  desc: '三好学生'
}

// const student: StudentType = {
//   name: '小明'
// } // 错误：缺少 id 属性

// const student: StudentType = {
//   id: 1,
//   name: '小明',
//   age: 18
// } // 错误：age 不在接口类型 StudentType 中

interface BaseType {
  value: number
  label: string
}

interface ListType {
  tag: string
  list: BaseType[]
}

const citys: ListType = {
  tag: '高校',
  list: [
    {
      value: 1,
      label: '清华大学'
    },
    {
      value: 2,
      label: '北京大学'
    }
  ]
}
console.log(citys)
