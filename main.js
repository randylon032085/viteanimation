import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import * as THREE from "three";



const scene = new THREE.Scene();
const axesHelper  = new THREE.AxesHelper(10);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("box").appendChild(renderer.domElement);

const boxGemeotry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x3498db});
const box = new THREE.Mesh(boxGemeotry,boxMaterial);

const cakeGemeotry = new THREE.TorusGeometry();
const cakeMaterial = new THREE.MeshBasicMaterial({color: 0x3498db});
const cake = new THREE.Mesh(cakeGemeotry,cakeMaterial);

cake.position.x=5;
scene.add(box);
scene.add(axesHelper);
scene.add(cake);

camera.position.z = 5;
camera.position.x = 2.5;
camera.position.y = 2.5;

renderer.render(scene,camera);

