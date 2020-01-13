/* 
希尔排序
*/
export function shellSort (arr) {
  const len = arr.length
  let distance = len/2
  while(distance>0) {
    console.log(distance)
    for (let i = distance; i < len; i++) { // 遍历未排序的区域
      const start = arr[i]
      // 将start与左边的比较(从右向左比)
      let j = i -distance
      while(j>=0 && arr[j]>start) {
        arr[j+distance] = arr[j]
        j = j - distance
      }
      arr[j+distance] = start
    }
    distance = Math.floor(distance/2)
  }
  return arr
}