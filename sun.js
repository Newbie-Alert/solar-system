import { GLTFLoader } from 'GLTFLoader';
import * as THREE from 'three';
import { RenderPass } from 'RenderPass';
import { EffectComposer } from 'EffectComposer';
import { UnrealBloomPass } from 'UnrealBloomPass';

// HTML에 출력을 위한 기본 3요소 _ 장면, 카메라, 조명 생성
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(100, 1)
camera.position.set(0, 0, 50);
let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1); //default; light shining from top
light.castShadow = true; // default false
light.receiveShadow = true
scene.add(light)

// html에 렌더해줄 렌더러 생성
// 출력해줄 HTML 위치를 지정, antialias로 계단현상 완화
let renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('sun'),
  antialias: true,
  alpha: true, // 배경색 X
});

// 색상 포맷을 sRGB로 렌더
renderer.outputColorSpace = THREE.SRGBColorSpace;

// 후처리 효과
// const renderScene = new RenderPass(scene, camera);
// const composer = new EffectComposer(renderer)
// composer.addPass(renderScene);

// const bloomPass = new UnrealBloomPass(
//   new THREE.Vector2(window.innerWidth, window.innerHeight),
//   0.5,
//   0.9,
//   0.1
// );
// composer.addPass(bloomPass);

// GLTF파일을 로드해줄 로더로 .gltf 파일을 불러와 scene에 더해줌.
let loader = new GLTFLoader();
loader.load('sun/scene.gltf', function (gltf) {
  scene.add(gltf.scene);
  
// 불러온 gltf를 출력 시 입혀줄 애니메이션
  function animate() {
    requestAnimationFrame(animate)
    gltf.scene.rotation.y += 0.003;
    // composer.render()
    renderer.render(scene, camera);

  }
  animate();
})
