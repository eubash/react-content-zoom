import React from 'react';
import { spy } from 'sinon';
import { shallowToJson } from 'enzyme-to-json';

import ContentZoom from '../src/app';

spy(ContentZoom.prototype, 'componentDidMount');

describe('<ContentZoom />', () => {
  //describe
  it('calls componentDidMount', () => {
    const wrapper = mount(<ContentZoom />);
    expect(ContentZoom.prototype.componentDidMount.calledOnce).toEqual(true);
  });

  it('should render correctly', () => {
    const output = shallow(
      <ContentZoom largeImageUrl="./static/img.jpg" imageUrl="./static/img_small.jpg" zoomPercent={350}
        contentWidth={426}
        contentHeight={266}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('renders as a div', () => {
    const wrapper = shallow(<ContentZoom />);
    expect(wrapper.is('div')).toBe(true);
  });
});
