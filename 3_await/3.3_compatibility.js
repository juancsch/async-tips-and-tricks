function myfun3 (value) {
	return `valor literal - ${value}`
}

async function asyncFn3 () {
	try {
		const a = await myfun3('eo') // sobra claramente ya que myfun3 no es asunc
		console.log('*** a:', a)
	} catch (e) {
		console.log('*** catch', e)
	}
}

 asyncFn3().then(console.log)
