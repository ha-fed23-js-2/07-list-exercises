/*
1a Skapa en array med frukter. (alltså strängar) Skapa en komponent med namnet Fruits som renderar ett <ul> element som visar alla frukterna i varsitt <li> element. Exempel på hur det kan se ut på webbsidan:
<ul> <li> Päron </li> <li> Mandarin </li> <li> Purjolök </li> </ul>

1b Se till att du inte har några varningar i konsolen, genom att lägga till key. Obs! Det är strängeligen förbjudet att använda index som key!
*/
import {fruits} from '../data/fruits.js'

const Fruits = () => {
	// console.log('Fruits: ', fruits);
	return (
		<ul>
		{fruits.map(fruit => (
			<li key={fruit}> {fruit} </li>
		))}
		</ul>
	)
}
export default Fruits
