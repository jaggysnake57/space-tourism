// pages
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';

// css
import './styles.css';

function App() {
	return (
		<div className="App">
			<Home />
			<Destination />
			<Crew />
			<Technology />
		</div>
	);
}

export default App;
