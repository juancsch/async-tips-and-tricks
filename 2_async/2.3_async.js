// async asincroniza, aunque no haya nada bloqueante

async function asyncFunc () {
	console.log('asyncFunc() starts')
	return 'abc'
}

asyncFunc().then(value => {
	console.log(`Resolved: ${value}`)
})

console.log('Task ends')

// Output:
// 'asyncFunc() starts'
// 'Task ends'
// 'Resolved: abc'
