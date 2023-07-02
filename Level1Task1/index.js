const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344,
  };
  
  // Write your code below:
  function myExecutor(done,reject){
    if(inventory.sunglasses>0){
      done('Sunglasses order processed.')
    }
    else{
      reject('That item is sold out.')
    }
}

myExecutor().then((message)=>{
    console.log(message);
  }).catch((message)=>{
console.log(message);
  })



const pr=()=>new Promise(myExecutor())

  const myPromise =pr();

  console.log(myPromise)