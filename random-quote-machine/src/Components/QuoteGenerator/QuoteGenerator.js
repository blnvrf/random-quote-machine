import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuoteGenerator.scss';

const QuoteGenerator = props => (
	<div className="flex flex-col w-full h-full justify-center items-center gap-y-4 text-white">
		<p className="">Quote</p>
        <span className="">Author</span>
        <button className="">Submit</button>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class QuoteGenerator extends React.Component {
//   render() {
//     return <div>This is a component called QuoteGenerator.</div>;
//   }
// }

const QuoteGeneratorPropTypes = {
	// always use prop types!
};

QuoteGenerator.propTypes = QuoteGeneratorPropTypes;

export default QuoteGenerator;
