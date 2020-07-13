import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			Welcome to your safeguard!
			<Link to="/">
				<span className="navbar-brand mb-0 h1" />
			</Link>
			<div className="ml-auto">
				<Link to="/login">
					<button className="btn btn-primary">login</button>
				</Link>
				<Link to="/signup">
					<button className="btn btn-primary">signup</button>
				</Link>
			</div>
		</nav>
	);
};
