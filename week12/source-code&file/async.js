/*

//synchronous programming
 console.log("starting...")
 console.log("working#1...")
 console.log("ending...")

//asynchronous programming
console.log("starting...")
setTimeout(() => console.log("working#2..."), 5000)
console.log("ending...")
 



//no handle promise
function doSomething (hasResource) {
    return new Promise((resolve, reject) => {
        setTimeout(() => (hasResource ? resolve("done") : reject("fail")), 6000)
    })
}

console.log("start...")
console.log(doSomething(false))
console.log("end...")

output: start...
        promise [<pending>]
        end...
        fail, throw exception



//handle promise = 2 way
    //1..then().catch()
function doSomething (hasResource) {
    return new Promise((resolve, reject) => {
        setTimeout(() => (hasResource ? resolve("done") : reject("fail")), 6000)
    })
}
console.log("start...")

doSomething(true)
.then((result) => {
    console.log("working...")
    console.log(`work status = ${result}`)
    console.log("end...")
})
.catch((error) => {
    console.log("error")
}) 
*/
    //2. async/await
function doSomething (hasResource) {
    return new Promise((resolve, reject) => {
        setTimeout(() => (hasResource ? resolve("done") : reject("fail")), 6000)
    })
}

async function working2() {
    console.log("start...")
    try {
       const workStatus = await doSomething(false) 
       console.log(workStatus)
       console.log("end...")
    } catch (error) {
        console.log("error")
    }
}
working2()