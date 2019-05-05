// no necesitas await si quieres lanzarlo y olvidarte del resulsado => concurrente
async function asyncFunc_ () {
	const writer = await openFile('someFile.txt')
	writer.write('hello') 	// don’t wait
	writer.write('world') 	// don’t wait
	await writer.close() 	// wait for file to close
}

async function asyncFunc__ () {
	// puede tener sentido obviar el resultado
	await longRunningAsyncOperation()
	console.log('Done!')
}
