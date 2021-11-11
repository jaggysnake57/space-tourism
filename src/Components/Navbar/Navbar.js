// react
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

//assets
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

const Navbar = () => {
	//state
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	return (
		<header className="navbar">
			<img src={logo} alt="logo" className="brand" />
			<img src={hamburger} alt="" onClick={() => setMenuIsOpen(true)} />

			<nav
				className={`main-nav ${
					menuIsOpen ? 'main-nav--isOpen' : undefined
				}`}>
				<img
					className="main-nav__close"
					src={close}
					alt=""
					onClick={() => setMenuIsOpen(false)}
				/>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'isActive' : undefined
					}
					to="/"
					onClick={() => setMenuIsOpen(false)}>
					<span>00</span> Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'isActive' : undefined
					}
					to="/destination"
					onClick={() => setMenuIsOpen(false)}>
					<span>01</span> Destination
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'isActive' : undefined
					}
					to="/crew"
					onClick={() => setMenuIsOpen(false)}>
					<span>02</span> Crew
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'isActive' : undefined
					}
					to="/technology"
					onClick={() => setMenuIsOpen(false)}>
					<span>03</span> Technology
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
