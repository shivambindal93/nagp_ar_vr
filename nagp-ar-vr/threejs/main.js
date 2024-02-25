import * as THREE from "three";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.clearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 12;
scene.add(camera);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const planeGeometry = new THREE.PlaneGeometry(WIDTH, HEIGHT);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x999999 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(-10, 0, 0);
scene.add(box);

const coneGeometry = new THREE.ConeGeometry(2, 4);
const coneMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(-5, 0, 0);
scene.add(cone);

const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(3, 0, 0);
// cylinder.rotation.set(10, 10, 60);
scene.add(cylinder);

const sphereGeometry = new THREE.SphereGeometry(2);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

let time = 0;

const animate = function () {
  requestAnimationFrame(animate);
  box.rotation.x += 0.05;
  box.rotation.y += 0.05;
  time = time + 0.01;
  cylinder.position.z = 10 * Math.sin(time * 2);
  renderer.render(scene, camera);
};

animate();
