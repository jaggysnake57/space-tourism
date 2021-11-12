import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="home">
			<div className="container">
				<div className="home__content">
					<h1 className="home__title">space</h1>
					<h2 className="home__tagline">so, you want to travel to</h2>
					<p className="home__blurb">
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</p>
				</div>
				<div className="home__CTA-wrapper">
					<Link className="home__CTA-button" to="/destination">
						explore
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
