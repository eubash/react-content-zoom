import React from 'react';
import ContentZoom from 'react-content-zoom';

import '../css/main.css';

/**
 * Base component
 *
 * NOTE: this is simple example of usage
 *
 * */
export default class extends React.Component {

  render() {
    return <div>
        <h1>React Content Zoom example!</h1>

        <div>
            <ContentZoom zoomPercent={350} largeImageUrl="./static/img.jpg" imageUrl="./static/img_small.jpg"
                         contentWidth={426} contentHeight={266}/>
        </div>

        <h2>Put some content inside!</h2>

        <div>
            <ContentZoom zoomPercent={350} largeImageUrl="./static/img.jpg" imageUrl="./static/img_small.jpg"
                         contentWidth={426} contentHeight={266}>
                <h1 className="example-title">Put some content here...</h1>
            </ContentZoom>
        </div>
    </div>;
  }

}