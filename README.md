# react-content-zoom

React lightweight stateless component for image zoom on mouse hover.

Designed for e-commerce sites product detail.

## Demo

[Demo](https://eubash.github.io/react-content-zoom/example/index.html)

## Status
[![npm](https://img.shields.io/npm/v/react-content-zoom.svg)](https://www.npmjs.com/package/react-content-zoom)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```sh
npm install --save react-content-zoom
```

## Styles

```css
include this css in your project
...
.zoomed-image {
   background-size: cover;
   cursor: pointer;
}
...
```

## Usage

```JavaScript
import ContentZoom from 'react-content-zoom';
...
<ContentZoom zoomPercent={350}
             largeImageUrl="./static/img.jpg"
             imageUrl="./static/img_small.jpg"
             contentHeight={300}
             contentWidth={500} />
...
You can put some content inside if you need
...
<ContentZoom zoomPercent={350}
             largeImageUrl="./static/img.jpg"
             imageUrl="./static/img_small.jpg"
             contentHeight={300}
             contentWidth={500}><h1>Put your content here!</h1></ContentZoom>
...
```
Support any content inside your image container.

## Props API

| Prop                          | Type   | Required | Default | Description                                                |
|-------------------------------|--------|----------|---------|------------------------------------------------------------|
| `zoomPercent`                 | Number |    No    |   250   | Small image url                                            |
| `largeImageUrl`               | String |    Yes   |         | Large image url                                            |
| `imageUrl`                    | String |    Yes   |         | Small image url                                            |
| `contentWidth`                | Number |    No    |   100%  | Style applied to image container                           |
| `contentHeight`               | Number |    No    |   100%  | Style applied to image container                           |

## Support

Please [open an issue](https://github.com/eubash/react-content-zoom/issues).

## Development

```ssh
git clone https://github.com/eubash/react-content-zoom.git
cd react-content-zoom
npm install
npm run #See available commands
```

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch,
add commits, and [open a pull request](https://github.com/eubash/react-content-zoom/compare/).

## License

MIT
