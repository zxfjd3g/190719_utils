/* 
实现深拷贝
    1). 大众乞丐版
        问题1: 函数属性会丢失
        问题2: 循环引用会出错
    2). 面试基础版本
        解决问题1: 函数属性还没丢失
    3). 面试加强版本
        解决问题2: 循环引用正常
    4). 面试加强版本2(优化遍历性能)
        数组: while | for | forEach() 优于 for-in | keys()&forEach() 
        对象: for-in 与 keys()&forEach() 差不多
*/

export function deepClone1 (target) {
  return JSON.parse(JSON.stringify(target))
}