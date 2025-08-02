# T23D
## Converts text to 3D models using Rust and WebAssembly.

#
The built rust wasm library is in the src/wasm directory.

Build the wasm library with (from the root of the project):
```shell
wasm-pack build ./cad_wasm --target web --out-dir ../web/src/wasm
```

Run the web server (from the web directory):
```shell
npm run dev
```