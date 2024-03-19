/*
2a Gör en komponent som kan visa en lista med slumpade tal. Varje tal ska visas i ett eget <li> element. Använd en state-variabel för listan. (Om du har dubbletter, kommer du att få varningar i konsolen. Den här gången är det okej.)

2b Gör en button som kan lägga till ett nytt slumpat tal.
*/
import { useState } from 'react'
import { generateRandomList, generateRandomNumber } from '../data/random.js'

const RandomList = () => {
	const [list, setList] = useState( generateRandomList(10) )

	const addRandomNumber = () => {
		let newNumber = {
			id: list.length,
			value: generateRandomNumber()
		}
		setList( [ ...list, newNumber ] )
	}

	return (
		<div>
		<button onClick={addRandomNumber}> Add random number </button>
		<ul>
		{list.map(r => (
			<li key={r.id}> {r.value} </li>
		))}
		</ul>
		</div>
	)
}

export default RandomList
