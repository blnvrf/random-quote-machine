import React from 'react';
import { shallow, render, mount } from 'enzyme';
import QuoteGenerator from './QuoteGenerator';

describe('QuoteGenerator', () => {
  let props;
  let shallowQuoteGenerator;
  let renderedQuoteGenerator;
  let mountedQuoteGenerator;

  const shallowTestComponent = () => {
    if (!shallowQuoteGenerator) {
      shallowQuoteGenerator = shallow(<QuoteGenerator {...props} />);
    }
    return shallowQuoteGenerator;
  };

  const renderTestComponent = () => {
    if (!renderedQuoteGenerator) {
      renderedQuoteGenerator = render(<QuoteGenerator {...props} />);
    }
    return renderedQuoteGenerator;
  };

  const mountTestComponent = () => {
    if (!mountedQuoteGenerator) {
      mountedQuoteGenerator = mount(<QuoteGenerator {...props} />);
    }
    return mountedQuoteGenerator;
  };  

  beforeEach(() => {
    props = {};
    shallowQuoteGenerator = undefined;
    renderedQuoteGenerator = undefined;
    mountedQuoteGenerator = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
