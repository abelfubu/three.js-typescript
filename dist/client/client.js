import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer, } from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls';
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({
    color: 311280,
    wireframe: true,
});
const cube = new Mesh(geometry, material);
scene.add(cube);
camera.position.z = 2;
var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
};
animate();
