function factorial(n)
{
  fc = 1
  for (i=1; i < n+1; i++){
    fc *= i
  }
  return fc
}

console.log(factorial(5))


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
   
  }

  console.log(findOdd([1,2,3,4,5,4,3,2,2,2,2]))


  d = {'1':3,'2':43}
  c = ''
  for (e in d){
    c += e
  }
  console.log(c)
