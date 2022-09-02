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

      console.log(removeEveryOther([1,2,3,4,5,6,7,8,9,10]))


console.log(-5 * -5)