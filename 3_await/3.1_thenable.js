function myfun (value) {
	return {
		then (cb) {
			cb(value)
		}
	}
}

async function asyncFn () {
	const a = await myfun('eo')
	console.log('***', a)
}

asyncFn()
