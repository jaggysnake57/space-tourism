//  react
import { useRef, useState } from 'react';

import { destinations } from '../../data/destination.json';

//assets
import moon from '../../assets/destination/image-moon.webp';
import mars from '../../assets/destination/image-mars.webp';
import europa from '../../assets/destination/image-europa.webp';
import titan from '../../assets/destination/image-titan.webp';
import DestinationInfo from './DestinationInfo/DestinationInfo';

const Destination = () => {
	// refs
	const moonRef = useRef();
	const marsRef = useRef();
	const europaRef = useRef();
	const titanRef = useRef();

	const refs = [moonRef, marsRef, europaRef, titanRef];

	// state
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentPlanet, setCurrentPlanet] = useState('moon');

	// functions
	const handlePlanetLinkClick = (planet, newIndex) => {
		// check if new index === old index > do nothing if true
		if (newIndex === currentIndex) return;

		let tempCurrentIndex = currentIndex;

		// is new index greater or smaller than old index
		const duration = 500;
		if (newIndex > currentIndex) {
			// creates a timed loop for adding and removing classes to the
			// planets. this allows planets to appear to move around
			const myLoop = () => {
				setTimeout(() => {
					//moving the current planet out the way
					refs[tempCurrentIndex].current.classList.remove(
						'showPlanetForwards',
						'showPlanetBackwards'
					);
					refs[tempCurrentIndex].current.classList.add(
						'removePlanetForwards'
					);
					// increments the current index
					tempCurrentIndex++;
					// removes any unneeded classes
					refs[tempCurrentIndex].current.classList.remove(
						'showPlanetForwards',
						'showPlanetBackwards',
						'removePlanetForwards',
						'removePlanetBackwards'
					);
					// moves the next planet into place
					refs[tempCurrentIndex].current.classList.add(
						'showPlanetForwards'
					);
					// if the current planet is not the correct planet selected the
					// function is called again otherwise it stops.
					if (tempCurrentIndex < newIndex) myLoop();
				}, duration);
			};
			// initializes the loop
			myLoop();
		} else {
			// creates a timed loop for adding and removing classes to the
			// planets. this allows planets to appear to move around
			const myLoop = () => {
				setTimeout(() => {
					//moving the current planet out the way
					refs[tempCurrentIndex].current.classList.remove(
						'showPlanetForwards',
						'showPlanetBackwards'
					);
					refs[tempCurrentIndex].current.classList.add(
						'removePlanetBackwards'
					);
					// decrements the current index
					tempCurrentIndex--;
					// removes any unneeded classes
					refs[tempCurrentIndex].current.classList.remove(
						'showPlanetForwards',
						'showPlanetBackwards',
						'removePlanetForwards',
						'removePlanetBackwards'
					);
					// moves the new planet into place
					refs[tempCurrentIndex].current.classList.add(
						'showPlanetBackwards'
					);
					if (tempCurrentIndex > newIndex) myLoop();
				}, duration);
			};
			myLoop();
		}
		// set the new index
		setCurrentIndex(newIndex);
		setCurrentPlanet(planet);
	};

	return (
		<div className="destination">
			<div className="container">
				<h1 className="destination__main-title">
					<span>01</span> pick your destination
				</h1>
				<section className="destination__content">
					<div className="destination__planet-images">
						<img
							src={moon}
							alt="the moon"
							ref={moonRef}
							className="planet showPlanetForwards"
						/>

						<img
							src={mars}
							alt="Mars"
							ref={marsRef}
							className="planet"
						/>

						<img
							src={europa}
							alt="Europa"
							ref={europaRef}
							className="planet"
						/>

						<img
							src={titan}
							alt="Titan"
							ref={titanRef}
							className="planet"
						/>
					</div>

					<div className="planet-info">
						<div className="planet-info__link-wrapper">
							<ul>
								<li
									className={
										currentPlanet === 'moon' &&
										'current-planet'
									}
									onClick={() =>
										handlePlanetLinkClick('moon', 0)
									}>
									moon
								</li>
								<li
									className={
										currentPlanet === 'mars' &&
										'current-planet'
									}
									onClick={() =>
										handlePlanetLinkClick('mars', 1)
									}>
									mars
								</li>
								<li
									className={
										currentPlanet === 'europa' &&
										'current-planet'
									}
									onClick={() =>
										handlePlanetLinkClick('europa', 2)
									}>
									europa
								</li>
								<li
									className={
										currentPlanet === 'titan' &&
										'current-planet'
									}
									onClick={() =>
										handlePlanetLinkClick('titan', 3)
									}>
									titan
								</li>
							</ul>
						</div>
						{destinations.map((planet) => (
							<div
								className={`planet-info__info-wrapper ${
									currentPlanet === planet.name.toLowerCase()
										? 'showInfo'
										: undefined
								}`}>
								<DestinationInfo planetInfo={planet} />
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Destination;
