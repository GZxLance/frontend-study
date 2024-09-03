// const fs =require( 'fs ')
// fs.readFile(
//     ' C:\Users\WangL\Desktop\LinShi\作业\xmq\Qian\frontend-study\NodeJS\内置模块\text.txt',
//     'utf-8',
//     (err, data) => {
//     console.log( '文件内容是: ',data)
//         }
//     )
    
//同步写入文件
// try {
//     let content ='新的文件内容'
//     fs.writeFilesync(
//     'C:\Users\WangL\Desktop\LinShi\作业\xmq\Qian\frontend-study\NodeJS\内置模块\text.txt',
//     content
//     )
// }catch (err) {
//     console.error(err)
//     }

//检查文件状态
// try {
//     let status = fs.statsync(
//     ' C:\Users\WangL\Desktop\LinShi\作业\xmq\Qian\frontend-study\NodeJS\内置模块\text.txt'
// )
//     console.log(status.isFile( ))
//     console.log(status.isDirectory( ))
//     console.log(status.size)
//      } catch (err) {
//     console.error(err)
//      }