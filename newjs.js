





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


// --------------------------------------------------

let concert = false;

const attendConcert = new Promise((resolve, reject) => {
  setTimeout(() => {
if(concert){
  resolve ('bob attended the concert')
}
else{
  reject ("bob didn't attend the concert")
}
  },2000)
}
)
console.log(attendConcert)

attendConcert.then((data) => console.log(data)) .catch((error) => console.log(error))

