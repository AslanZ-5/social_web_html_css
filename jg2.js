function isRoman(string) {
    const pattern = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/
    return pattern.test(string);
  }
  
  
  function roman(s) {
    const roman = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000, 'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90,
      'CD': 400, 'CM': 900
    }
    var i = 0;
    var num = 0;
    while (i < s.length) {
      if (i < s.length && s.slice(i, i + 2) in roman) {
        num += roman[s.slice(i, i + 2)]
        i += 2
      } else {
        num += roman[s[i]]
        i++
      }
  
  
    }
    console.log(num)
    return num
  }
  
  function convertToRoman(num) {
  
    var numeric = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['V\u0305', 'I\u0305V\u0305', 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
    var output = '', i, len = numeric.length;
  
    for (i = 0; i < len; i++) {
      while (numeric[i] <= num) {
        output += roman[i];
        num -= numeric[i];
      }
    }
  
    return output;
  }
  function mth(a, first, last) {
    let result;
    if (a == '+') {
      result = first + last;
    }
    else if (a == '-') {
      result = first - last;
    }
    else if (a == '*') {
      result = first * last;
    }
    else if (a == '/') {
      result = parseInt(first / last);
    }
    return result
  }
  
  function calculator(string) {
    const b = string.split(' ')
    console.log(b)
    if ( string != 3){
        console.error()
    }
    const a = b[1]
    if (isRoman(b[0]) ) {
    if (isRoman(b[0]) && isRoman(b[b.length - 1])){const first = roman(b[0])
        const last = roman(b[b.length - 1])
        console.log('****' + first)
        if (mth(a,first,last) <= 0){
          return ''
        }else{
        return convertToRoman(mth(a, first, last))
        }}else{
            console.error();
        }
      
    } else {
      const first = parseInt(b[0])
      const last = parseInt(b[b.length - 1])
      return mth(a, first, last).toString()
    }
  
  
  
  
  
  }
  



  console.log(calculator("I + I"))


  console.log('_____________',5 + 0)