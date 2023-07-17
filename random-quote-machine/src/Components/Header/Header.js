import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

const Header = props => (
	<div className="w-full flex justify-end px-8">
		<a href="#" className="text-sm text-white hover:text-black">About this project </a>
	</div> 
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Header extends React.Component {
//   render() {
//     return <div>This is a component called Header.</div>;
//   }
// }

const HeaderPropTypes = {
	// always use prop types!
	
};

Header.propTypes = HeaderPropTypes;

export default Header;
