





// // const arr = [1, 2, 3];
// // arr.forEach(newadd);


// const ranks = [1 , 2 , 3 , 4];

// let newArr = ranks.map((e,index) => {
//   if (e % 2 === 0){
//     return e
//   }
//   else{
//     return 'none'
//   }
// })
// console.log(newArr)


// // ------------------------------

// let newfilterArr = ranks.filter((e,index) => {
//   if (e % 2 === 0){
//     return e
//   }
// })
// console.log(newfilterArr)


// --------------------------------------------------

let concert = true;

const attendConcert = new Promise((resolve, reject,) => {
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
// console.log(attendConcert)

// attendConcert.then((data) => console.log(data)) .catch((error) => console.log(error))

// async function afunc(){
//   try{
//   let result = await attendConcert;
//   console.log(result)
//   }
//   catch(Error){
//    console.log(Error)
//   }
// }

// afunc()


let afunc = async() => {

  try{
    let result = await attendConcert;
    console.log(result)
  }
  catch(e){
    console.log(e)
  }
}
afunc()