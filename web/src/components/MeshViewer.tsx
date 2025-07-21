import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
    meshData: any;
}

export default function MeshViewer({ meshData }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sceneRef = useRef<THREE.Scene>(new THREE.Scene());

    useEffect(() => {
        if (!meshData || !canvasRef.current) return;

        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(400, 400);

        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 3;

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1);

        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(meshData.vertices.flat());
        geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex(meshData.faces.flat());
        geometry.computeVertexNormals();

        const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
        const mesh = new THREE.Mesh(geometry, material);

        const scene = sceneRef.current;
        scene.clear();
        scene.add(light);
        scene.add(mesh);
        renderer.render(scene, camera);
    }, [meshData]);

    return <canvas ref={canvasRef} width={400} height={400} />;
}
