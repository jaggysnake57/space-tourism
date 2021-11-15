import { useRef, useState } from 'react';

const Destination = () => {
	// refs
	const moonRef = useRef();
	const marsRef = useRef();
	const europaRef = useRef();
	const titanRef = useRef();

	const refs = [moonRef, marsRef, europaRef, titanRef];

	// state
	const [currentIndex, setCurrentIndex] = useState(0);

	// functions
	const handlePlanetLinkClick = (planet, newIndex) => {
		// check if new index === old index > do nothing if true
		if (newIndex === currentIndex) return;

		let tempCurrentIndex = currentIndex;

		// is new index greater or smaller than old index
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
				}, 1000);
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
				}, 1000);
			};
			myLoop();
		}
		// set the new index
		setCurrentIndex(newIndex);
	};

	return (
		<div className="destination">
			<div className="container">
				<h1 className="destination__main-title">
					<span>01</span> pick your destination
				</h1>
				<section className="destination__content">
					<div className="destination__planet-img">
						{/* planet image */}
						<p ref={moonRef} className="planet showPlanetForwards">
							moon
						</p>
						<p ref={marsRef} className="planet">
							mars
						</p>
						<p ref={europaRef} className="planet">
							europa
						</p>
						<p ref={titanRef} className="planet">
							titan
						</p>
					</div>

					<div className="planet-info">
						<div className="planet-info__link-wrapper">
							<ul>
								<li
									onClick={() =>
										handlePlanetLinkClick('moon', 0)
									}>
									moon
								</li>
								<li
									onClick={() =>
										handlePlanetLinkClick('mars', 1)
									}>
									mars
								</li>
								<li
									onClick={() =>
										handlePlanetLinkClick('europa', 2)
									}>
									europa
								</li>
								<li
									onClick={() =>
										handlePlanetLinkClick('titan', 3)
									}>
									titan
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Destination;
