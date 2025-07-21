import { useState } from "react";
import TextEditor from "./components/TextEditor";
import MeshViewer from "./components/MeshViewer";

function App() {
    const [mesh, setMesh] = useState<any>(null);

    return (
        <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <div style={{ flex: 1 }}>
                <TextEditor onMeshUpdate={setMesh} />
            </div>
            <div style={{ flex: 1 }}>
                {mesh && <MeshViewer meshData={mesh} />}
            </div>
        </div>
    );
}

export default App;
