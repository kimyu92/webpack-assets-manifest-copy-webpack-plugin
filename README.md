# Webpack Manifest Assets with Copy Webpack Plugin sample
A sample project to produce `manifest.json` for static assets that can be looked up even without going through loaders

## Dependencies:
- Webpack 5+
- Webpack dev server 4+
- Webpack Manifest Assets
- Copy Webpack Plugin

## How to run
```sh
npm install
npm run dev
```

## Output
Note: even though we export `svg/star.svg` via `copy-webpack-plugin` and [assets-modules](https://webpack.js.org/guides/asset-modules/), it's being merged under the same entry
```json
{
  "entrypoints": {
    "main": {
      "assets": {
        "js": [
          "/assets/main.js"
        ]
      }
    }
  },
  "fonts/Miglia.ttf": "/assets/fonts/Miglia-767f77adc54aa614023b.ttf",
  "main.js": "/assets/main.js",
  "svg/circle.svg": "/assets/svg/circle-cabec827907f07a5cf26.svg",
  "svg/star.svg": "/assets/svg/star-50a73fe17181f247e4c3.svg"
}
```
