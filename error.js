
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'
import {GLTFLoader} from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js'


let scene, camera, renderer, model;

// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

// Create the scene
scene = new THREE.Scene();

// Create the camera
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 1;

// Create the renderer
renderer = new THREE.WebGLRenderer({ antialias: true });

// Create the renderer with transparent clear color
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor(0x000000, 0); // Set clear color to black and alpha to 0 (fully transparent)

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
document.body.style.margin = 0; // Remove any default margin
document.body.style.overflow = 'hidden'; // Prevent scrolling

// Add a directional light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 5);
scene.add(light);

// Resize canvas on window resize
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Set renderer dimensions
  renderer.setSize(width, height);

  // Update camera
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Load the GLTF model
const loader = new GLTFLoader();
loader.load('./3d/errormod.glb', (gltf) => {
  model = gltf.scene;
  scene.add(model);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  if (model) {
    model.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}
animate();
