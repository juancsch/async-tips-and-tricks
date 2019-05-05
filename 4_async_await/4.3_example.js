const buyEggs = () => {}
const brokeTheEgg = (eggs) => {}
const mixEggs = (eggsOpened) => {}
const cookEggs = (eggsMixed) => {}
const clean = (e) => {}

async function makeAnOmelet () {
	try {
		const eggs = await buyEggs()
		const eggsOpened = await brokeTheEgg(eggs)
		const eggsMixed = await mixEggs(eggsOpened)
		const omelet = await cookEggs(eggsMixed)
		return omelet
	} catch (err) {
		clean(err)
	}
}
