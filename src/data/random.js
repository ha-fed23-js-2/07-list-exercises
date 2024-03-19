
function generateRandomList(count) {
	// variabel för listan
	// generera ett slumptal
	// lägg till ett tal till lista
	// upprepa

	let list = []
	for( let i=0; i<count; i++ ) {
		let r = generateRandomNumber()
		list.push({ id: i, value: r })
	}
	return list
}

function generateRandomNumber() {
	return Math.random().toFixed(1)
}

export { generateRandomList, generateRandomNumber }
