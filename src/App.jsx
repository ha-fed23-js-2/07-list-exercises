import Fruits from './components/Fruits.jsx'
import './App.css'
import RandomList from './components/RandomList.jsx'

function App() {
//   const [count, setCount] = useState(0)

	return (
		<div className="app">
			<header> Exercises about lists </header>
			<main>

				<RandomList />
				<Fruits />
			
			</main>
		</div>
	)
}

export default App
