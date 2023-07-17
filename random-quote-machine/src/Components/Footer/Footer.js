import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';

const Footer = props => (
	<div className="text-sm flex justify-center text-white">
		Created by © Blin Varfi
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Footer extends React.Component {
//   render() {
//     return <div>This is a component called Footer.</div>;
//   }
// }

const FooterPropTypes = {
	// always use prop types!
};

Footer.propTypes = FooterPropTypes;

export default Footer;
