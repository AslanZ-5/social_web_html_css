function maskify(cc) {
    var new_str = ''
    if (cc.length > 4){
      new_str += '#'.repeat(cc.length - 4) + cc.slice(cc.length - 4,cc.length)
    }
    return new_str
  }


  function remove (string) {
    //coding and coding....
    if (string[string.length -1] === '!'){
      return string.slice(0,string.length -1)
    }
  }


  function mergeArrays(arr1, arr2) {
    new_arr = arr1.concat(arr2)
    return new_arr.sort((a, b) => a - b)
    }


    function removeEveryOther(arr){
        for ( i in arr){
          if ( i % 2 == 1){
            arr.splice(i,1)
          }
        }
        return arr
      }

      //console.log(removeEveryOther([1,2,3,4,5,6,7,8,9,10]))

//console.log('z'.charCodeAt() - 96)
function high(x){
  st = x.split(' ')
  //console.log('&&&&&&&&&&', st)
  ls = []
  sum = 0
  for (i = 0; i <= st.length -1; i++){
    if (i == 1){
      ls.push(sum)
    }
    if (i != 0){
      ls.push(sum)
      console.log(st[i], '-----',ls[i])
      sum = 0
    }

    for (j = 0; j <= st[i].length -1; j++){

      console.log('-------',st[i],st[i][j].charCodeAt() - 96)
      //console.log(sum)
      sum += st[i][j].charCodeAt() - 96
      
    }
  }
  max = 0
  console.log(ls)
  for (i in ls){
    if (ls[i] > ls[max]){
      max = i
    }
  }
  return st[max]
}
console.log(high('what time are we climbing up the volcano'))


console.log('hi bro')
d = {'aslan':3, 'asad':6}
console.log(d)