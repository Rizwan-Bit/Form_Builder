import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
	if (history.location.pathname === path) {
		return { color: '#ffffff' };
	} else {
		return { color: '#ffffff' };
	}
};

const Menu = ({ history }) => (
	<div>
		<ul className="nav nav-tabs  bg-secondary">
			<li className="nav-items">
				<Link className="nav-link" style={isActive(history, '/')} to="/">
					Create Form
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" style={isActive(history, '/forms')} to="/forms">
					All forms
				</Link>
			</li>

		</ul>
	</div>
);

export default withRouter(Menu);
