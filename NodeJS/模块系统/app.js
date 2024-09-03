const path = require('path')
console.log(path.resolve(__dirname))
console.log(path.resolve(__filename))

//命令行直接输入node，进入REPL模式
//Ctrl + D 退出

const argv = process.argv
console.log('参数： ', argv)
console.log(argv.slice(2))