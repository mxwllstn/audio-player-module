# audio-player (JS module)
JS module for embedding audio files and streams

## Usage

#### HTML
```html
  <body>
    <!-- audio file player -->
    <audio-player src="https://test.com/file.mp3"></audio-player>
    
    <!-- audio stream player -->
    <audio-player src="https://test.com/stream" stream></audio-player>
    
    <script type="module" src="dist/audio-player.es.js"></script>
  </body>
```

## Development Setup (Vue + Vite)

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production
$ yarn build

# preview production build
$ yarn preview --host

```
