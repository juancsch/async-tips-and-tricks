let list

async function clearList () {
    list = [] // A
}

async function processList (processList) {
   await clearList() // B
   list = list.concat(processList) // C
}

processList([1, 2, 3]) // D
processList([4, 5, 6]) // E
   .then(() => {
      console.dir(list) // F
   })

// So the two questions here are what is the output of this code and what order do the lines of code get executed in?
// Now the point of the code was that it would show that the output is [1,2,3,4,5,6] because of the race condition,
// but the actual ordering of the execution of the lines of code I had wrong.

// My assumption was that you would not enter the async method directly and instead be queued to be performed on a later clock tick.
// This gave me an execution flow of D,E,B,B,A,A,C,C,F which I was happy with until my coworker Millan Kuchtiak pointed out I was entirely incorrect.

// It turns out that at least in Chrome and Safari that code doesn't
// get transferred in the queue until you reach the first await call.
// So, actually, when you run the code through with a debugger the flow is D,B,A,E,B,A,C,C,F.
// This makes sense from a performance point of view, some async methods might never need the change of context, so just in time async.

// To summarise an async method is synchronous up until the first await.
