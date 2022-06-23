function fakeBin(x){
    let newArray = x.split('')
    let binary = []
    for (let i = 0; i < newArray.length; i++){
      if (newArray[i] >= 5){
        binary.push(1)
      } else {
        binary.push(0)
      }
    }
      return binary.join('')
}