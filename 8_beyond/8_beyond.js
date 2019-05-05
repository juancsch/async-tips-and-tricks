// No solo se vive de Promesas y Async/Await

const fs = require('fs')

// const { promisify } = require('util')
// const fsReadFile = promisify(fs.readFile)

function readFile (name) {

    return new Promise(function (resolve, reject) {

		console.log('Empezando la lectura de ', name)

		fs.readFile(name, 'utf-8', function (error, content) {

			if (error) {
                console.log('Error en la lectura')
                return reject(error)
            }

			console.log('Lectura finalizada en ', name)

			resolve({
                'name': name,
                'longitud': content.length
            })
        })
	})

	// console.log('Empezando la lectura de ', name)
	// return fsReadFile(name, 'utf-8').then(() => {
	// 	console.log('Lectura finalizada en ', name)
	// 	return {
	// 		'name': name,
	// 		'longitud': content.length
	// 	};
	// })
}

Promise.all([
    readFile('./fichero-1.txt'),
    readFile('./fichero-2.txt'),
    readFile('./fichero-3.txt')
]).then(function (respuestas) {
    console.log(respuestas[0].name + ' tiene ' + respuestas[0].longitud + ' caracteres')
    console.log(respuestas[1].name + ' tiene ' + respuestas[1].longitud + ' caracteres')
    console.log(respuestas[2].name + ' tiene ' + respuestas[2].longitud + ' caracteres')
    console.log('¿Tenemos todas las respuestas?', respuestas.length === 3)
}).catch(function (err) {
    console.log('No tuvimos éxito!')
    console.log('Err:', err)
})

/* ---- Console output ----
Empezando la lectura de  ./fichero-1.txt
Empezando la lectura de  ./fichero-2.txt
Empezando la lectura de  ./fichero-3.txt
Lectura finalizada en  ./fichero-2.txt
Lectura finalizada en  ./fichero-3.txt
Lectura finalizada en  ./fichero-1.txt
./fichero-1.txt tiene 8 caracteres
./fichero-2.txt tiene 111 caracteres
./fichero-3.txt tiene 15 caracteres
¿Tenemos todas las respuestas? true
*/

// ---------------------------------------------------------------------------------

// const fs = require('fs')
const events = require('events')

const myEvEmitter = new events.EventEmitter()

function raedFile (name) {
	console.log('Empezando la lectura de ', name)
    fs.readFile(name, 'utf-8', function (error, content) {
        if (error) {
            console.log('Error en la lectura')
            return myEvEmitter.emit('fichero:error', error)
        }
        console.log('Lectura finalizada en ', name)
        myEvEmitter.emit('fichero:leido', {
            'name': name,
            'longitud': content.length
        })
    })
}

var filesRead = 0
myEvEmitter.on('fichero:leido', function (fichero) {
    console.log(fichero.name + ' tiene ' + fichero.longitud + ' caracteres')
    filesRead++
    if (filesRead === 3) {
        myEvEmitter.emit('fichero:terminado')
    }
})

myEvEmitter.on('fichero:terminado', function () {
    console.log('¿Tenemos todas las respuestas?', filesRead === 3)
})

myEvEmitter.on('fichero:error', function (err) {
    console.log('No tuvimos éxito!')
    console.log('Err:', err)
})

raedFile('./fichero-1.txt')
raedFile('./fichero-2.txt')
raedFile('./fichero-3.txt')

/* ---- Console output ----
Empezando la lectura de  ./fichero-1.txt
Empezando la lectura de  ./fichero-2.txt
Empezando la lectura de  ./fichero-3.txt
Lectura finalizada en  ./fichero-3.txt
./fichero-3.txt tiene 15 caracteres
Lectura finalizada en  ./fichero-1.txt
./fichero-1.txt tiene 8 caracteres
Lectura finalizada en  ./fichero-2.txt
./fichero-2.txt tiene 111 caracteres
¿Tenemos todas las respuestas? true
*/
