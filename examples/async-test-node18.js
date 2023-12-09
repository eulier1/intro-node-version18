const waitWithCallback = (timer, cb) =>  {
    setTimeout( () => cb(), timer)
}

const waitWithPromise = (timer) => new Promise( (resolve, reject) => {
    waitWithCallback(timer, resolve)
})

// Piramyd of DOOM or the callback hell
waitWithCallback(1000, ()=> {
    waitWithCallback(1000, ()=> {
        waitWithCallback(1000, ()=> {
            waitWithCallback(1000, ()=> {
                console.log('4s Callback')
            })
        })
    })
})


// Promise come here to the rescue to make callbacks at one leve;
waitWithPromise(2000)
.then(
    () => { console.log('1st Promise - 2s'); return waitWithPromise(1000) } 
)
.then(
    () => { console.log('2st Promise - 3s'); return waitWithPromise(1000) }
)
.then(
    () => console.log('Final Promise Done  4s')
)

// Promise are fine, but we still need a way to improve readability
// await/async comes to the rescue

await waitWithPromise(1000)
await waitWithPromise(1000)
await waitWithPromise(1000)
await waitWithPromise(1000)
console.log('Top level asyn/await 4s ')

console.log(import.meta)