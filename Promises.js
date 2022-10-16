// promise 
/* Promises is use for the parallel execution.
promises the code executed in background and notified to subscriber by "then and catch".
the code  be fulfilled either "resolved or reject. "
PromiseState may be pending and the promiseResult be undefined.
we can execute multiple promises at the same time parallely*/

let p = new Promise((resolve, reject)=>{
    console.log("pending")
    setTimeout(()=>{
    //   console.log('fulfilled')
      resolve(true)
    },3000)
  })
// to get the result
p.then((p)=>{
    console.log(p)
})
// answere = 
pending 
fulfilled 
true

let a = new Promise((resolve, reject)=>{
    console.log("pending")
    setTimeout(()=>{
    //   console.log('fulfilled')
      reject('the error accured')
    },3000)
  })
//  to catch the error  
a.catch((error)=>{
    console.log(error)
})
// answere = 
pending 
the error accured 


// chaining .then calls

let p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      console.log("we done")
      resolve("poyoil")
  },2000)
  
})
  p1.then((value)=>{
  console.log(value)
  let p2 = new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("jugno ustaad ") 
          resolve(90)
      },3000)
    
  })
}).then(()=>{
     console.log("we are pakka done ") 
})