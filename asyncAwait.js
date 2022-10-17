// async_await 

/*async is a special type of syntax use to work with promises.
asyn always re turn the promises and other values are wrapped
in promises automatically. Async is use to get rid of .then
In async the condition must be on wait first resolve/reject then move to another*/

async function sam(){
    let seen = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("seen on hai ...")
        },2000)
    })
    let party = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("abhi tw party shuru hue hai")
        },4000)
    })
    // seen.then(alert)
    // party.then(alert)
    console.log("waiting for reply")
    let sarmad = await seen
    console.log("replied")

    console.log("answere")
    let aun = await party
    console.log("answered")
    return [sarmad, aun]
}
console.log("welcome to party")
sam().then((value)=>{
    console.log(value)
})
// on console
VM1929:23 welcome to party
VM1929:14 waiting for reply
Promise {<pending>}
VM1929:16 replied
VM1929:18 answere
VM1929:20 answered
VM1929:25 (2) ['seen on hai ...', 'abhi tw party shuru hue hai']