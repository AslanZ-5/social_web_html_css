function factorial(n)
{
  fc = 1
  for (i=1; i < n+1; i++){
    fc *= i
  }
  return fc
}



function reverseWords(str) {
    st = str.split('')
    st_r = str.split(' ')
    function reverseWord(string){
        new_str = ''
    for (i = string.length-1; i >= 0; i--){
      new_str += string[i]
    }
    return new_str
  }
  var str_2 = st_r.map(reverseWord).join('')
  inx = 0
  for ( i = 0; i < st.length; i++){
    if (st[i] != ' '){
        st[i] = str_2[inx]
        inx++
    }


  }
    return st.join('')    
  }


  function findOdd(A) {
    dic = {}
    for (i=0; i<A.length;i++){
      if (A[i] in dic){
        dic[A[i]] += 1
      }else{
        dic[A[i]] = 1
      }
    }
    c = ''
    for (key in dic){
      if (dic[key] % 2 != 0){
        return parseInt(String(key))
      }
    }
  }

  function moveZeros(arr) {
    count = 0
    for (i in arr){
        console.log(i)
      if (arr[i] == 0){
        count++
       arr.slice
      }
      
    }
    console.log(arr)
    for (i=0; i < count; i++){
      lst.push(0)
    }
    

}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

console.log('this is the test',false == 0)




function flt(integer_list,values_list){
    for (i=0; i < values_list.length; i++){
        integer_list.filter(data => data != values_list[i])
      }
      return integer_list
}

console.log('-----------------',flt([1, 1, 2 ,3 ,1 ,2 ,3 ,4],[1, 3]))