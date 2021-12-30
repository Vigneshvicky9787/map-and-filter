





// const arr = [1, 2, 3];
// arr.forEach(newadd);


const ranks = [1 , 2 , 3 , 4];

let newArr = ranks.map((e,index) => {
  if (e % 2 === 0){
    return e
  }
  else{
    return 'none'
  }
})
console.log(newArr)


// ------------------------------

let newfilterArr = ranks.filter((e,index) => {
  if (e % 2 === 0){
    return e
  }
})
console.log(newfilterArr)




