const DestinationInfo = ({ planetInfo }) => {
	const { name, description, distance, travel } = planetInfo || {};
	return (
		<>
			<div className="destination-info__about">
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
			<div className="destination-info__stats-wrapper">
				<div className="destination-info__distance-wrapper">
					<h3>avg. distance</h3>
					<p>{distance}</p>
				</div>
				<div className="destination-info__travel-wrapper">
					<h3>est. travel time</h3>
					<p>{travel}</p>
				</div>
			</div>
		</>
	);
};

export default DestinationInfo;
