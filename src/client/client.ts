import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from '/build/three.module.js'
import { OrbitControls } from '/jsm/controls/OrbitControls'

const scene: Scene = new Scene()

const camera: PerspectiveCamera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
)
const renderer: WebGLRenderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry: BoxGeometry = new BoxGeometry()
const material: MeshBasicMaterial = new MeshBasicMaterial({
  color: 311280,
  wireframe: true,
})

const cube: Mesh = new Mesh(geometry, material)
scene.add(cube)

camera.position.z = 2

var animate = function () {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  controls.update()

  renderer.render(scene, camera)
}

animate()
