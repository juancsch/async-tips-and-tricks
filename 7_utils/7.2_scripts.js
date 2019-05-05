async function asyncCall () {
    return 'holi'
}

asyncCall()
	.then(value => console.log(value))
	.catch(err => console.error(err))

// VS

// y entonces tenemos todo el stack con a/a
(async () => {
	try {
		const value = await asyncCall()
		console.log(value)
	} catch (err) {
		console.error(err)
	}
})()
