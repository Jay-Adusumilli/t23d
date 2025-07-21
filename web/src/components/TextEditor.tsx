import { useState, useEffect } from "react";
import init, { generate_model } from "../wasm/cad_wasm.js";

interface Props {
    onMeshUpdate: (mesh: any) => void;
}

export default function TextEditor({ onMeshUpdate }: Props) {
    const [code, setCode] = useState("box();");

    useEffect(() => {
        init().then(() => {
            try {
                const meshJson = JSON.parse(generate_model(code));
                onMeshUpdate(meshJson);
            } catch (e) {
                console.error("Error generating mesh", e);
            }
        });
    }, [code]);

    return (
        <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ width: "100%", height: "400px", fontFamily: "monospace" }}
        />
    );
}
