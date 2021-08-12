const temp = "cccdeeekslyyynnn"
let i = 0,
    j = 0
    len = temp.length,
    caches = [],
    cacheItem = null
while(j < len + 1) {
    if(temp[j] != temp[i]) {
      let length =  j-i
      if (length > 1) {
        cacheItem = {
          item: temp[i],
          length: length
        }
        caches.push(cacheItem)
      }
      i = j
    }
    j++
}

console.log(caches)
