use wasm_bindgen::prelude::*;
use serde::Serialize;

#[derive(Serialize)]
struct Mesh {
    vertices: Vec<[f32; 3]>,
    faces: Vec<[usize; 3]>,
}

#[wasm_bindgen]
pub fn generate_model(_code: &str) -> String {
    let mesh = Mesh {
        vertices: vec![[0.0, 0.0, 0.0], [1.0, 0.0, 0.0], [0.0, 1.0, 0.0]],
        faces: vec![[0, 1, 2]],
    };
    serde_json::to_string(&mesh).unwrap()
}
