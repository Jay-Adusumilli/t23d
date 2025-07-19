use wasm_bindgen::prelude::*;
use serde::Serialize;
use serde_wasm_bindgen::to_value;

#[derive(Serialize)]
struct Mesh {
    vertices: Vec<[f32; 3]>,
    faces: Vec<[u32; 3]>,
}

#[wasm_bindgen]
pub fn generate_model(code: &str) -> JsValue {
    // Fake static mesh for now
    let mesh = Mesh {
        vertices: vec![[0.0, 0.0, 0.0], [1.0, 0.0, 0.0], [0.0, 1.0, 0.0]],
        faces: vec![[0, 1, 2]],
    };

    to_value(&mesh).unwrap()
}
