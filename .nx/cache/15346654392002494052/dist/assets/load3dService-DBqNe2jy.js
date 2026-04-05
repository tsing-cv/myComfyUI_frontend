const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./useLoad3d-BIJcUf9u.js","./vendor-primevue-Dnp2bJ8y.js","./rolldown-runtime-DBfy44LZ.js","./vendor-vue-core-Ba0aGEmU.js","./vendor-other-BMn-xt1e.js","./vendor-firebase-x5F51RZV.js","./vendor-three-BgyUnc8C.js","./vendor-tiptap-Dk5jn8en.js","./vendor-reka-ui-D-_wwtHz.js","./vendor-markdown-Cwvpr7zF.js","./formatUtil-CKufMkDg.js","./dialogService-DKx-VcuC.js","./_plugin-vue_export-helper-DhKZ6h9r.js","./vendor-i18n-CQIJzQYM.js","./vendor-sentry-Dn2jSJwd.js","./vendor-vueuse--4MZqvDu.js","./vendor-axios-B-zaJ78_.js","./vendor-zod-Dg3yaIzQ.js","./src-ZLYFRbHY.js","./downloadUtil-DifTE-W9.js","./i18n-1Rh80DIx.js","./types-BqIM6TDt.js","./toastStore-Cs9o1vxC.js","./WaveAudioPlayer-mBVaC-eN.js","./Button-BDFSC50t.js","./Slider-crPZmra_.js","./api-DZnjKRFN.js","./vendor-yjs-CLwSweDd.js","./widget-W78njY6p.js","./colorUtil-D_gLWYA0.js","./Loader-CvZwjy6N.js","./Popover-CIFEPFvK.js","./SelectValue-Bx34DVM6.js","./useCopyToClipboard-MPqv8vkx.js","./useErrorHandling-DtKxKYzs.js","./useExternalLink-DB_su3zs.js","./envUtil-iYCo4Y6R.js","./useFeatureFlags-BaQ5ErdO.js","./VideoPlayOverlay-BdSWt_zU.js","./assetMetadataUtils-C4X4hjOE.js","./telemetry-BglHASuB.js","./dialogStore-BfuGFDEW.js","./electronDownloadStore-CuawkY8S.js","./userStore-Xq2eOfQ2.js","./widgetTypes-DxLkDLQG.js","./markdownRendererUtil-uFQ2wi0y.js","./useLoad3d-By_zxv6R.js","./assetPreviewUtil-b8QgVY6y.js","./vendor-other-DODGPXtn.css","./dialogService-DgoXhFDc.css","./useLoad3dViewer-CPiHjhJp.js","./useLoad3dViewer-rP5gDjML.js","./SkeletonUtils-BmiDSG79.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-DBfy44LZ.js";
import { ct as __vitePreload } from "./vendor-primevue-Dnp2bJ8y.js";
import { Nt as toRaw } from "./vendor-vue-core-Ba0aGEmU.js";
import { a as OBJLoader2WorkerModule_default, o as MtlObjBridge, s as OBJLoader2Parallel } from "./vendor-other-BMn-xt1e.js";
import { r as api } from "./api-DZnjKRFN.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
import { o as t } from "./i18n-1Rh80DIx.js";
import { a as useSettingStore, s as app } from "./dialogService-DKx-VcuC.js";
import { t as downloadBlob } from "./downloadUtil-DifTE-W9.js";
import { $ as Sprite, B as MeshNormalMaterial, C as Clock, D as GridHelper, F as Material, G as PlaneGeometry, J as SRGBColorSpace, K as Points, L as Mesh, M as LinearSRGBColorSpace, O as Group, P as LoopRepeat, R as MeshBasicMaterial, S as Camera, T as DirectionalLight, U as OrthographicCamera, V as MeshStandardMaterial, W as PerspectiveCamera, X as SkeletonHelper, Y as Scene, Z as SkinnedMesh, _ as BasicDepthPacking, a as STLLoader, at as WebGLRenderer, b as BufferAttribute, c as GLTFLoader, d as OrbitControls, et as SpriteMaterial, g as AnimationMixer, h as AmbientLight, i as GLTFExporter, it as Vector3, k as Light, l as FBXLoader, n as STLExporter, nt as TextureLoader, o as PLYLoader, q as PointsMaterial, r as OBJExporter, rt as Vector2, s as MTLLoader, t as ViewHelper, tt as Texture, u as SplatMesh, v as Bone, w as Color, x as BufferGeometry, y as Box3, z as MeshDepthMaterial } from "./vendor-three-BgyUnc8C.js";
import { t as exceedsClickThreshold } from "./useClickDragGuard-DNjf-Zpl.js";
//#region src/extensions/core/load3d/AnimationManager.ts
var AnimationManager = class {
	currentAnimation = null;
	animationActions = [];
	animationClips = [];
	selectedAnimationIndex = 0;
	isAnimationPlaying = false;
	animationSpeed = 1;
	eventManager;
	constructor(eventManager) {
		this.eventManager = eventManager;
	}
	init() {}
	dispose() {
		if (this.currentAnimation) {
			this.animationActions.forEach((action) => {
				action.stop();
			});
			this.currentAnimation = null;
		}
		this.animationActions = [];
		this.animationClips = [];
		this.selectedAnimationIndex = 0;
		this.isAnimationPlaying = false;
		this.animationSpeed = 1;
		this.eventManager.emitEvent("animationListChange", []);
	}
	setupModelAnimations(model, originalModel) {
		if (this.currentAnimation) {
			this.currentAnimation.stopAllAction();
			this.animationActions = [];
		}
		let animations = [];
		if (model.animations?.length > 0) animations = model.animations;
		else if (originalModel && "animations" in originalModel && Array.isArray(originalModel.animations)) animations = originalModel.animations;
		if (animations.length > 0) {
			this.animationClips = animations;
			this.currentAnimation = new AnimationMixer(model);
			if (this.animationClips.length > 0) this.updateSelectedAnimation(0);
		} else this.animationClips = [];
		this.updateAnimationList();
	}
	updateAnimationList() {
		let updatedAnimationList = [];
		if (this.animationClips.length > 0) updatedAnimationList = this.animationClips.map((clip, index) => ({
			name: clip.name || `Animation ${index + 1}`,
			index
		}));
		this.eventManager.emitEvent("animationListChange", updatedAnimationList);
	}
	setAnimationSpeed(speed) {
		this.animationSpeed = speed;
		this.animationActions.forEach((action) => {
			action.setEffectiveTimeScale(speed);
		});
	}
	updateSelectedAnimation(index) {
		if (!this.currentAnimation || !this.animationClips || index >= this.animationClips.length) {
			console.warn("Invalid animation update request");
			return;
		}
		this.animationActions.forEach((action) => {
			action.stop();
		});
		this.currentAnimation.stopAllAction();
		this.animationActions = [];
		this.selectedAnimationIndex = index;
		const clip = this.animationClips[index];
		const action = this.currentAnimation.clipAction(clip);
		action.setEffectiveTimeScale(this.animationSpeed);
		action.reset();
		action.clampWhenFinished = false;
		action.loop = LoopRepeat;
		if (this.isAnimationPlaying) action.play();
		else {
			action.play();
			action.paused = true;
		}
		this.animationActions = [action];
		this.eventManager.emitEvent("animationProgressChange", {
			progress: 0,
			currentTime: 0,
			duration: clip.duration
		});
	}
	toggleAnimation(play) {
		if (!this.currentAnimation || this.animationActions.length === 0) {
			console.warn("No animation to toggle");
			return;
		}
		this.isAnimationPlaying = play ?? !this.isAnimationPlaying;
		this.animationActions.forEach((action) => {
			if (this.isAnimationPlaying) {
				action.paused = false;
				if (action.time === 0 || action.time === action.getClip().duration) action.reset();
			} else action.paused = true;
		});
	}
	update(delta) {
		if (this.currentAnimation && this.isAnimationPlaying) {
			this.currentAnimation.update(delta);
			if (this.animationActions.length > 0) {
				const action = this.animationActions[0];
				const clip = action.getClip();
				const progress = action.time / clip.duration * 100;
				this.eventManager.emitEvent("animationProgressChange", {
					progress,
					currentTime: action.time,
					duration: clip.duration
				});
			}
		}
	}
	getAnimationTime() {
		if (this.animationActions.length === 0) return 0;
		return this.animationActions[0].time;
	}
	getAnimationDuration() {
		if (this.animationActions.length === 0) return 0;
		return this.animationActions[0].getClip().duration;
	}
	setAnimationTime(time) {
		if (this.animationActions.length === 0) return;
		const duration = this.getAnimationDuration();
		const clampedTime = Math.max(0, Math.min(time, duration));
		const wasPaused = this.animationActions.map((action) => action.paused);
		this.animationActions.forEach((action) => {
			action.paused = false;
			action.time = clampedTime;
		});
		if (this.currentAnimation) {
			this.currentAnimation.setTime(clampedTime);
			this.currentAnimation.update(0);
		}
		this.animationActions.forEach((action, i) => {
			action.paused = wasPaused[i];
		});
		this.eventManager.emitEvent("animationProgressChange", {
			progress: clampedTime / duration * 100,
			currentTime: clampedTime,
			duration
		});
	}
	reset() {}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.AnimationManager = window.comfyAPI.AnimationManager || {};
window.comfyAPI.AnimationManager.AnimationManager = AnimationManager;
//#endregion
//#region src/extensions/core/load3d/CameraManager.ts
var CameraManager = class {
	perspectiveCamera;
	orthographicCamera;
	activeCamera;
	eventManager;
	controls = null;
	DEFAULT_DISTANCE = 10;
	DEFAULT_LOOK_AT = 0;
	DEFAULT_CAMERA = {
		near: .01,
		far: 1e4
	};
	DEFAULT_PERSPECTIVE_CAMERA = {
		fov: 35,
		aspect: 1
	};
	DEFAULT_FRUSTUM_SIZE = 10;
	DEFAULT_ORTHOGRAPHIC_CAMERA = {
		left: -this.DEFAULT_FRUSTUM_SIZE / 2,
		right: this.DEFAULT_FRUSTUM_SIZE / 2,
		top: this.DEFAULT_FRUSTUM_SIZE / 2,
		bottom: -this.DEFAULT_FRUSTUM_SIZE / 2
	};
	constructor(_renderer, eventManager) {
		this.eventManager = eventManager;
		this.perspectiveCamera = new PerspectiveCamera(this.DEFAULT_PERSPECTIVE_CAMERA.fov, this.DEFAULT_PERSPECTIVE_CAMERA.aspect, this.DEFAULT_CAMERA.near, this.DEFAULT_CAMERA.far);
		this.orthographicCamera = new OrthographicCamera(this.DEFAULT_ORTHOGRAPHIC_CAMERA.left, this.DEFAULT_ORTHOGRAPHIC_CAMERA.right, this.DEFAULT_ORTHOGRAPHIC_CAMERA.top, this.DEFAULT_ORTHOGRAPHIC_CAMERA.bottom, this.DEFAULT_CAMERA.near, this.DEFAULT_CAMERA.far);
		this.reset();
		this.activeCamera = this.perspectiveCamera;
	}
	init() {}
	dispose() {}
	setControls(controls) {
		this.controls = controls;
		if (this.controls) this.controls.addEventListener("end", () => {
			this.eventManager.emitEvent("cameraChanged", this.getCameraState());
		});
	}
	getCurrentCameraType() {
		return this.activeCamera === this.perspectiveCamera ? "perspective" : "orthographic";
	}
	toggleCamera(cameraType) {
		const oldCamera = this.activeCamera;
		const position = oldCamera.position.clone();
		const rotation = oldCamera.rotation.clone();
		const target = this.controls?.target.clone() || new Vector3();
		const oldZoom = oldCamera instanceof OrthographicCamera ? oldCamera.zoom : oldCamera.zoom;
		if (!cameraType) this.activeCamera = oldCamera === this.perspectiveCamera ? this.orthographicCamera : this.perspectiveCamera;
		else {
			this.activeCamera = cameraType === "perspective" ? this.perspectiveCamera : this.orthographicCamera;
			if (oldCamera === this.activeCamera) return;
		}
		this.activeCamera.position.copy(position);
		this.activeCamera.rotation.copy(rotation);
		if (this.activeCamera instanceof OrthographicCamera) {
			this.activeCamera.zoom = oldZoom;
			this.activeCamera.updateProjectionMatrix();
		} else if (this.activeCamera instanceof PerspectiveCamera) {
			this.activeCamera.zoom = oldZoom;
			this.activeCamera.updateProjectionMatrix();
		}
		if (this.controls) {
			this.controls.object = this.activeCamera;
			this.controls.target.copy(target);
			this.controls.update();
		}
		this.eventManager.emitEvent("cameraTypeChange", cameraType);
	}
	setFOV(fov) {
		if (this.activeCamera === this.perspectiveCamera) {
			this.perspectiveCamera.fov = fov;
			this.perspectiveCamera.updateProjectionMatrix();
		}
		this.eventManager.emitEvent("fovChange", fov);
	}
	getCameraState() {
		return {
			position: this.activeCamera.position.clone(),
			target: this.controls?.target.clone() || new Vector3(),
			zoom: this.activeCamera instanceof OrthographicCamera ? this.activeCamera.zoom : this.activeCamera.zoom,
			cameraType: this.getCurrentCameraType()
		};
	}
	setCameraState(state) {
		this.activeCamera.position.copy(state.position);
		this.controls?.target.copy(state.target);
		if (this.activeCamera instanceof OrthographicCamera) {
			this.activeCamera.zoom = state.zoom;
			this.activeCamera.updateProjectionMatrix();
		} else if (this.activeCamera instanceof PerspectiveCamera) {
			this.activeCamera.zoom = state.zoom;
			this.activeCamera.updateProjectionMatrix();
		}
		this.controls?.update();
	}
	handleResize(width, height) {
		const aspect = width / height;
		this.updateAspectRatio(aspect);
	}
	updateAspectRatio(aspect) {
		if (this.activeCamera === this.perspectiveCamera) {
			this.perspectiveCamera.aspect = aspect;
			this.perspectiveCamera.updateProjectionMatrix();
		} else {
			const frustumSize = 10;
			this.orthographicCamera.left = -frustumSize * aspect / 2;
			this.orthographicCamera.right = frustumSize * aspect / 2;
			this.orthographicCamera.top = frustumSize / 2;
			this.orthographicCamera.bottom = -frustumSize / 2;
			this.orthographicCamera.updateProjectionMatrix();
		}
	}
	setupForModel(size) {
		const distance = Math.max(size.x, size.z) * 2;
		const height = size.y * 2;
		this.perspectiveCamera.position.set(distance, height, distance);
		this.orthographicCamera.position.set(distance, height, distance);
		if (this.activeCamera === this.perspectiveCamera) {
			this.perspectiveCamera.lookAt(0, size.y / 2, 0);
			this.perspectiveCamera.updateProjectionMatrix();
		} else {
			const frustumSize = Math.max(size.x, size.y, size.z) * 2;
			const aspect = this.perspectiveCamera.aspect;
			this.orthographicCamera.left = -frustumSize * aspect / 2;
			this.orthographicCamera.right = frustumSize * aspect / 2;
			this.orthographicCamera.top = frustumSize / 2;
			this.orthographicCamera.bottom = -frustumSize / 2;
			this.orthographicCamera.lookAt(0, size.y / 2, 0);
			this.orthographicCamera.updateProjectionMatrix();
		}
		this.controls?.target.set(0, size.y / 2, 0);
		this.controls?.update();
	}
	reset() {
		this.perspectiveCamera.position.set(this.DEFAULT_DISTANCE, this.DEFAULT_DISTANCE, this.DEFAULT_DISTANCE);
		this.orthographicCamera.position.set(this.DEFAULT_DISTANCE, this.DEFAULT_DISTANCE, this.DEFAULT_DISTANCE);
		this.perspectiveCamera.lookAt(this.DEFAULT_LOOK_AT, this.DEFAULT_LOOK_AT, this.DEFAULT_LOOK_AT);
		this.orthographicCamera.lookAt(this.DEFAULT_LOOK_AT, this.DEFAULT_LOOK_AT, this.DEFAULT_LOOK_AT);
		this.perspectiveCamera.updateProjectionMatrix();
		this.orthographicCamera.updateProjectionMatrix();
	}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.CameraManager = window.comfyAPI.CameraManager || {};
window.comfyAPI.CameraManager.CameraManager = CameraManager;
//#endregion
//#region src/extensions/core/load3d/ControlsManager.ts
var ControlsManager = class {
	controls;
	eventManager;
	camera;
	constructor(renderer, camera, eventManager) {
		this.eventManager = eventManager;
		this.camera = camera;
		this.controls = new OrbitControls(camera, renderer.domElement.parentElement || renderer.domElement);
		this.controls.enableDamping = true;
	}
	init() {
		this.controls.addEventListener("end", () => {
			const cameraState = {
				position: this.camera.position.clone(),
				target: this.controls.target.clone(),
				zoom: this.camera instanceof OrthographicCamera ? this.camera.zoom : this.camera.zoom,
				cameraType: this.camera instanceof PerspectiveCamera ? "perspective" : "orthographic"
			};
			this.eventManager.emitEvent("cameraChanged", cameraState);
		});
	}
	dispose() {
		this.controls.dispose();
	}
	handleResize() {}
	update() {
		this.controls.update();
	}
	updateCamera(camera) {
		const position = this.controls.object.position.clone();
		const target = this.controls.target.clone();
		this.camera = camera;
		this.controls.object = camera;
		this.controls.target = target;
		camera.position.copy(position);
		this.controls.update();
	}
	reset() {
		this.controls.target.set(0, 0, 0);
		this.controls.update();
	}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.ControlsManager = window.comfyAPI.ControlsManager || {};
window.comfyAPI.ControlsManager.ControlsManager = ControlsManager;
//#endregion
//#region src/extensions/core/load3d/EventManager.ts
var EventManager = class {
	listeners = {};
	addEventListener(event, callback) {
		if (!this.listeners[event]) this.listeners[event] = [];
		this.listeners[event].push(callback);
	}
	removeEventListener(event, callback) {
		if (this.listeners[event]) this.listeners[event] = this.listeners[event].filter((cb) => cb !== callback);
	}
	emitEvent(event, data) {
		if (this.listeners[event]) this.listeners[event].forEach((callback) => callback(data));
	}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.EventManager = window.comfyAPI.EventManager || {};
window.comfyAPI.EventManager.EventManager = EventManager;
//#endregion
//#region src/extensions/core/load3d/LightingManager.ts
var LightingManager = class {
	lights = [];
	currentIntensity = 3;
	scene;
	eventManager;
	constructor(scene, eventManager) {
		this.scene = scene;
		this.eventManager = eventManager;
	}
	init() {
		this.setupLights();
	}
	dispose() {
		this.lights.forEach((light) => {
			this.scene.remove(light);
		});
		this.lights = [];
	}
	setupLights() {
		const ambientLight = new AmbientLight(16777215, .5);
		this.scene.add(ambientLight);
		this.lights.push(ambientLight);
		const mainLight = new DirectionalLight(16777215, .8);
		mainLight.position.set(0, 10, 10);
		this.scene.add(mainLight);
		this.lights.push(mainLight);
		const backLight = new DirectionalLight(16777215, .5);
		backLight.position.set(0, 10, -10);
		this.scene.add(backLight);
		this.lights.push(backLight);
		const leftFillLight = new DirectionalLight(16777215, .3);
		leftFillLight.position.set(-10, 0, 0);
		this.scene.add(leftFillLight);
		this.lights.push(leftFillLight);
		const rightFillLight = new DirectionalLight(16777215, .3);
		rightFillLight.position.set(10, 0, 0);
		this.scene.add(rightFillLight);
		this.lights.push(rightFillLight);
		const bottomLight = new DirectionalLight(16777215, .2);
		bottomLight.position.set(0, -10, 0);
		this.scene.add(bottomLight);
		this.lights.push(bottomLight);
	}
	setLightIntensity(intensity) {
		this.currentIntensity = intensity;
		this.lights.forEach((light) => {
			if (light instanceof DirectionalLight) if (light === this.lights[1]) light.intensity = intensity * .8;
			else if (light === this.lights[2]) light.intensity = intensity * .5;
			else if (light === this.lights[5]) light.intensity = intensity * .2;
			else light.intensity = intensity * .3;
			else if (light instanceof AmbientLight) light.intensity = intensity * .5;
		});
		this.eventManager.emitEvent("lightIntensityChange", intensity);
	}
	reset() {}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.LightingManager = window.comfyAPI.LightingManager || {};
window.comfyAPI.LightingManager.LightingManager = LightingManager;
//#endregion
//#region src/scripts/metadata/ply.ts
function parsePLYHeader(lines) {
	let vertexCount = 0;
	let headerEndLine = 0;
	let hasColor = false;
	let xIndex = -1;
	let yIndex = -1;
	let zIndex = -1;
	let redIndex = -1;
	let greenIndex = -1;
	let blueIndex = -1;
	let propertyIndex = 0;
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();
		if (line.startsWith("element vertex")) vertexCount = parseInt(line.split(/\s+/)[2]);
		else if (line.startsWith("property")) {
			const parts = line.split(/\s+/);
			const propName = parts[parts.length - 1];
			if (propName === "x") xIndex = propertyIndex;
			else if (propName === "y") yIndex = propertyIndex;
			else if (propName === "z") zIndex = propertyIndex;
			else if (propName === "red") {
				hasColor = true;
				redIndex = propertyIndex;
			} else if (propName === "green") greenIndex = propertyIndex;
			else if (propName === "blue") blueIndex = propertyIndex;
			propertyIndex++;
		} else if (line === "end_header") {
			headerEndLine = i;
			break;
		}
	}
	if (vertexCount === 0 || xIndex < 0 || yIndex < 0 || zIndex < 0) return null;
	return {
		vertexCount,
		hasColor,
		propertyIndices: {
			x: xIndex,
			y: yIndex,
			z: zIndex,
			red: redIndex,
			green: greenIndex,
			blue: blueIndex
		},
		headerEndLine
	};
}
function parsePLYVertices(lines, header) {
	const { vertexCount, hasColor, propertyIndices, headerEndLine } = header;
	const { x: xIndex, y: yIndex, z: zIndex } = propertyIndices;
	const { red: redIndex, green: greenIndex, blue: blueIndex } = propertyIndices;
	const positions = new Float32Array(vertexCount * 3);
	const colors = hasColor ? new Float32Array(vertexCount * 3) : null;
	let vertexIndex = 0;
	for (let i = headerEndLine + 1; i < lines.length && vertexIndex < vertexCount; i++) {
		const line = lines[i].trim();
		if (!line) continue;
		const parts = line.split(/\s+/);
		if (parts.length < 3) continue;
		const posIndex = vertexIndex * 3;
		positions[posIndex] = parseFloat(parts[xIndex]);
		positions[posIndex + 1] = parseFloat(parts[yIndex]);
		positions[posIndex + 2] = parseFloat(parts[zIndex]);
		if (hasColor && colors && redIndex >= 0 && greenIndex >= 0 && blueIndex >= 0) {
			if (parts.length > Math.max(redIndex, greenIndex, blueIndex)) {
				colors[posIndex] = parseInt(parts[redIndex]) / 255;
				colors[posIndex + 1] = parseInt(parts[greenIndex]) / 255;
				colors[posIndex + 2] = parseInt(parts[blueIndex]) / 255;
			}
		}
		vertexIndex++;
	}
	return {
		positions,
		colors,
		vertexCount: vertexIndex
	};
}
/**
* Parse ASCII PLY data from an ArrayBuffer
* Returns positions and colors as typed arrays
*/
function parseASCIIPLY(arrayBuffer) {
	const lines = new TextDecoder().decode(arrayBuffer).split("\n");
	const header = parsePLYHeader(lines);
	if (!header) return null;
	return parsePLYVertices(lines, header);
}
/**
* Check if PLY data is in ASCII format
*/
function isPLYAsciiFormat(arrayBuffer) {
	return new TextDecoder().decode(arrayBuffer.slice(0, 500)).includes("format ascii");
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.ply = window.comfyAPI.ply || {};
window.comfyAPI.ply.parseASCIIPLY = parseASCIIPLY;
window.comfyAPI.ply.isPLYAsciiFormat = isPLYAsciiFormat;
//#endregion
//#region src/extensions/core/load3d/loader/FastPLYLoader.ts
/**
* Fast ASCII PLY Loader
* Optimized for simple ASCII PLY files with position and color data
* 4-5x faster than Three.js PLYLoader for ASCII files
*/
var FastPLYLoader = class {
	parse(arrayBuffer) {
		const plyData = parseASCIIPLY(arrayBuffer);
		if (!plyData) throw new Error("Failed to parse PLY data");
		const geometry = new BufferGeometry();
		geometry.setAttribute("position", new BufferAttribute(plyData.positions, 3));
		if (plyData.colors) geometry.setAttribute("color", new BufferAttribute(plyData.colors, 3));
		return geometry;
	}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.FastPLYLoader = window.comfyAPI.FastPLYLoader || {};
window.comfyAPI.FastPLYLoader.FastPLYLoader = FastPLYLoader;
//#endregion
//#region src/extensions/core/load3d/LoaderManager.ts
var LoaderManager = class {
	gltfLoader;
	objLoader;
	mtlLoader;
	fbxLoader;
	stlLoader;
	plyLoader;
	fastPlyLoader;
	modelManager;
	eventManager;
	currentLoadId = 0;
	constructor(modelManager, eventManager) {
		this.modelManager = modelManager;
		this.eventManager = eventManager;
		this.gltfLoader = new GLTFLoader();
		this.objLoader = new OBJLoader2Parallel();
		this.objLoader.setWorkerUrl(true, new URL(OBJLoader2WorkerModule_default, import.meta.url));
		this.mtlLoader = new MTLLoader();
		this.fbxLoader = new FBXLoader();
		this.stlLoader = new STLLoader();
		this.plyLoader = new PLYLoader();
		this.fastPlyLoader = new FastPLYLoader();
	}
	init() {}
	dispose() {}
	async loadModel(url, originalFileName) {
		const loadId = ++this.currentLoadId;
		try {
			this.eventManager.emitEvent("modelLoadingStart", null);
			this.modelManager.clearModel();
			this.modelManager.originalURL = url;
			let fileExtension;
			if (originalFileName) {
				fileExtension = originalFileName.split(".").pop()?.toLowerCase();
				this.modelManager.originalFileName = originalFileName.split("/").pop()?.split(".")[0] || "model";
			} else {
				const filename = new URLSearchParams(url.split("?")[1]).get("filename");
				fileExtension = filename?.split(".").pop()?.toLowerCase();
				if (filename) this.modelManager.originalFileName = filename.split(".")[0] || "model";
				else this.modelManager.originalFileName = "model";
			}
			if (!fileExtension) {
				useToastStore().addAlert(t("toastMessages.couldNotDetermineFileType"));
				return;
			}
			const model = await this.loadModelInternal(url, fileExtension);
			if (loadId !== this.currentLoadId) return;
			if (model) await this.modelManager.setupModel(model);
			this.eventManager.emitEvent("modelLoadingEnd", null);
		} catch (error) {
			if (loadId === this.currentLoadId) {
				this.eventManager.emitEvent("modelLoadingEnd", null);
				console.error("Error loading model:", error);
				useToastStore().addAlert(t("toastMessages.errorLoadingModel"));
			}
		}
	}
	async loadModelInternal(url, fileExtension) {
		let model = null;
		const params = new URLSearchParams(url.split("?")[1]);
		const filename = params.get("filename");
		if (!filename) {
			console.error("Missing filename in URL:", url);
			return null;
		}
		const loadRootFolder = params.get("type") === "output" ? "output" : "input";
		const subfolder = params.get("subfolder") ?? "";
		const path = "api/view?type=" + loadRootFolder + "&subfolder=" + encodeURIComponent(subfolder) + "&filename=";
		switch (fileExtension) {
			case "stl":
				this.stlLoader.setPath(path);
				const geometry = await this.stlLoader.loadAsync(filename);
				this.modelManager.setOriginalModel(geometry);
				geometry.computeVertexNormals();
				const mesh = new Mesh(geometry, this.modelManager.standardMaterial);
				const group = new Group();
				group.add(mesh);
				model = group;
				break;
			case "fbx":
				this.fbxLoader.setPath(path);
				const fbxModel = await this.fbxLoader.loadAsync(filename);
				this.modelManager.setOriginalModel(fbxModel);
				model = fbxModel;
				fbxModel.traverse((child) => {
					if (child instanceof Mesh) {
						this.modelManager.originalMaterials.set(child, child.material);
						if (child instanceof SkinnedMesh) child.frustumCulled = false;
					}
				});
				break;
			case "obj":
				if (this.modelManager.materialMode === "original") try {
					this.mtlLoader.setPath(path);
					const mtlFileName = filename.replace(/\.obj$/, ".mtl");
					const materials = await this.mtlLoader.loadAsync(mtlFileName);
					materials.preload();
					const materialsFromMtl = MtlObjBridge.addMaterialsFromMtlLoader(materials);
					this.objLoader.setMaterials(materialsFromMtl);
				} catch (e) {}
				const objUrl = path + encodeURIComponent(filename);
				model = await this.objLoader.loadAsync(objUrl);
				model.traverse((child) => {
					if (child instanceof Mesh) this.modelManager.originalMaterials.set(child, child.material);
				});
				break;
			case "gltf":
			case "glb":
				this.gltfLoader.setPath(path);
				const gltf = await this.gltfLoader.loadAsync(filename);
				this.modelManager.setOriginalModel(gltf);
				model = gltf.scene;
				gltf.scene.traverse((child) => {
					if (child instanceof Mesh) {
						child.geometry.computeVertexNormals();
						this.modelManager.originalMaterials.set(child, child.material);
						if (child instanceof SkinnedMesh) child.frustumCulled = false;
					}
				});
				break;
			case "ply":
				model = await this.loadPLY(path, filename);
				break;
			case "spz":
			case "splat":
			case "ksplat":
				model = await this.loadSplat(path, filename);
				break;
		}
		return model;
	}
	async fetchModelData(path, filename) {
		const route = "/" + path.replace(/^api\//, "") + encodeURIComponent(filename);
		const response = await api.fetchApi(route);
		if (!response.ok) throw new Error(`Failed to fetch model: ${response.status}`);
		return response.arrayBuffer();
	}
	async loadSplat(path, filename) {
		const splatMesh = new SplatMesh({ fileBytes: await this.fetchModelData(path, filename) });
		this.modelManager.setOriginalModel(splatMesh);
		const splatGroup = new Group();
		splatGroup.add(splatMesh);
		return splatGroup;
	}
	async loadPLY(path, filename) {
		const plyEngine = useSettingStore().get("Comfy.Load3D.PLYEngine");
		if (plyEngine === "sparkjs") return this.loadSplat(path, filename);
		const arrayBuffer = await this.fetchModelData(path, filename);
		const isASCII = isPLYAsciiFormat(arrayBuffer);
		let plyGeometry;
		if (isASCII && plyEngine === "fastply") plyGeometry = this.fastPlyLoader.parse(arrayBuffer);
		else {
			this.plyLoader.setPath(path);
			plyGeometry = this.plyLoader.parse(arrayBuffer);
		}
		this.modelManager.setOriginalModel(plyGeometry);
		plyGeometry.computeVertexNormals();
		const hasVertexColors = plyGeometry.attributes.color !== void 0;
		if (this.modelManager.materialMode === "pointCloud") {
			plyGeometry.computeBoundingSphere();
			if (plyGeometry.boundingSphere) {
				const center = plyGeometry.boundingSphere.center;
				const radius = plyGeometry.boundingSphere.radius;
				plyGeometry.translate(-center.x, -center.y, -center.z);
				if (radius > 0) {
					const scale = 1 / radius;
					plyGeometry.scale(scale, scale, scale);
				}
			}
			const pointMaterial = hasVertexColors ? new PointsMaterial({
				size: .005,
				vertexColors: true,
				sizeAttenuation: true
			}) : new PointsMaterial({
				size: .005,
				color: 13421772,
				sizeAttenuation: true
			});
			const plyPoints = new Points(plyGeometry, pointMaterial);
			this.modelManager.originalMaterials.set(plyPoints, pointMaterial);
			const plyGroup = new Group();
			plyGroup.add(plyPoints);
			return plyGroup;
		}
		let plyMaterial;
		if (hasVertexColors) plyMaterial = new MeshStandardMaterial({
			vertexColors: true,
			metalness: 0,
			roughness: .5,
			side: 2
		});
		else {
			plyMaterial = this.modelManager.standardMaterial.clone();
			plyMaterial.side = 2;
		}
		const plyMesh = new Mesh(plyGeometry, plyMaterial);
		this.modelManager.originalMaterials.set(plyMesh, plyMaterial);
		const plyGroup = new Group();
		plyGroup.add(plyMesh);
		return plyGroup;
	}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.LoaderManager = window.comfyAPI.LoaderManager || {};
window.comfyAPI.LoaderManager.LoaderManager = LoaderManager;
//#endregion
//#region src/extensions/core/load3d/ModelExporter.ts
var ModelExporter = class ModelExporter {
	static detectFormatFromURL(url) {
		try {
			const filenameParam = new URLSearchParams(url.split("?")[1]).get("filename");
			if (filenameParam) return filenameParam.split(".").pop()?.toLowerCase() || null;
		} catch (e) {
			console.error("Error parsing URL:", e);
		}
		return null;
	}
	static canUseDirectURL(url, format) {
		if (!url) return false;
		const urlFormat = ModelExporter.detectFormatFromURL(url);
		if (!urlFormat) return false;
		return urlFormat.toLowerCase() === format.toLowerCase();
	}
	static async downloadFromURL(url, desiredFilename) {
		try {
			downloadBlob(desiredFilename, await (await fetch(url)).blob());
		} catch (error) {
			console.error("Error downloading from URL:", error);
			useToastStore().addAlert(t("toastMessages.failedToDownloadFile"));
			throw error;
		}
	}
	static async exportGLB(model, filename = "model.glb", originalURL) {
		if (originalURL && ModelExporter.canUseDirectURL(originalURL, "glb")) return ModelExporter.downloadFromURL(originalURL, filename);
		const exporter = new GLTFExporter();
		try {
			await new Promise((resolve) => setTimeout(resolve, 50));
			const result = await new Promise((resolve, reject) => {
				exporter.parse(model, (gltf) => {
					resolve(gltf);
				}, (error) => {
					reject(error);
				}, { binary: true });
			});
			await new Promise((resolve) => setTimeout(resolve, 50));
			ModelExporter.saveArrayBuffer(result, filename);
		} catch (error) {
			console.error("Error exporting GLB:", error);
			useToastStore().addAlert(t("toastMessages.failedToExportModel", { format: "GLB" }));
			throw error;
		}
	}
	static async exportOBJ(model, filename = "model.obj", originalURL) {
		if (originalURL && ModelExporter.canUseDirectURL(originalURL, "obj")) return ModelExporter.downloadFromURL(originalURL, filename);
		const exporter = new OBJExporter();
		try {
			await new Promise((resolve) => setTimeout(resolve, 50));
			const result = exporter.parse(model);
			await new Promise((resolve) => setTimeout(resolve, 50));
			ModelExporter.saveString(result, filename);
		} catch (error) {
			console.error("Error exporting OBJ:", error);
			useToastStore().addAlert(t("toastMessages.failedToExportModel", { format: "OBJ" }));
			throw error;
		}
	}
	static async exportSTL(model, filename = "model.stl", originalURL) {
		if (originalURL && ModelExporter.canUseDirectURL(originalURL, "stl")) return ModelExporter.downloadFromURL(originalURL, filename);
		const exporter = new STLExporter();
		try {
			await new Promise((resolve) => setTimeout(resolve, 50));
			const result = exporter.parse(model);
			await new Promise((resolve) => setTimeout(resolve, 50));
			ModelExporter.saveString(result, filename);
		} catch (error) {
			console.error("Error exporting STL:", error);
			useToastStore().addAlert(t("toastMessages.failedToExportModel", { format: "STL" }));
			throw error;
		}
	}
	static saveArrayBuffer(buffer, filename) {
		downloadBlob(filename, new Blob([buffer], { type: "application/octet-stream" }));
	}
	static saveString(text, filename) {
		downloadBlob(filename, new Blob([text], { type: "text/plain" }));
	}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.ModelExporter = window.comfyAPI.ModelExporter || {};
window.comfyAPI.ModelExporter.ModelExporter = ModelExporter;
//#endregion
//#region src/extensions/core/load3d/RecordingManager.ts
var RecordingManager = class {
	mediaRecorder = null;
	recordedChunks = [];
	isRecording = false;
	recordingStream = null;
	recordingIndicator = null;
	scene;
	renderer;
	eventManager;
	recordingStartTime = 0;
	recordingDuration = 0;
	recordingCanvas = null;
	recordingContext = null;
	animationFrameId = null;
	constructor(scene, renderer, eventManager) {
		this.scene = scene;
		this.renderer = renderer;
		this.eventManager = eventManager;
		this.setupRecordingIndicator();
	}
	setupRecordingIndicator() {
		this.recordingIndicator = new Sprite(new SpriteMaterial({
			map: new TextureLoader().load("data:image/svg+xml;base64," + btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="24" fill="#4CAF50" opacity="0.8" />
        <circle cx="32" cy="32" r="16" fill="#2E7D32" opacity="0.8" />
      </svg>`)),
			transparent: true,
			depthTest: false,
			depthWrite: false
		}));
		this.recordingIndicator.scale.set(.5, .5, .5);
		this.recordingIndicator.position.set(-.8, .8, 0);
		this.recordingIndicator.visible = false;
		this.scene.add(this.recordingIndicator);
	}
	async startRecording(targetWidth, targetHeight) {
		if (this.isRecording) return;
		try {
			const sourceCanvas = this.renderer.domElement;
			const sourceWidth = sourceCanvas.width;
			const sourceHeight = sourceCanvas.height;
			const recordWidth = targetWidth || sourceWidth;
			const recordHeight = targetHeight || sourceHeight;
			this.recordingCanvas = document.createElement("canvas");
			this.recordingCanvas.width = recordWidth;
			this.recordingCanvas.height = recordHeight;
			this.recordingContext = this.recordingCanvas.getContext("2d", { alpha: false });
			if (!this.recordingContext) throw new Error("Failed to get 2D context for recording canvas");
			const sourceAspectRatio = sourceWidth / sourceHeight;
			const targetAspectRatio = recordWidth / recordHeight;
			let sx = 0;
			let sy = 0;
			let sw = sourceWidth;
			let sh = sourceHeight;
			if (Math.abs(sourceAspectRatio - targetAspectRatio) > .01) if (sourceAspectRatio > targetAspectRatio) {
				sw = sourceHeight * targetAspectRatio;
				sx = (sourceWidth - sw) / 2;
			} else {
				sh = sourceWidth / targetAspectRatio;
				sy = (sourceHeight - sh) / 2;
			}
			const captureFrame = () => {
				if (!this.isRecording || !this.recordingContext) return;
				this.recordingContext.drawImage(sourceCanvas, sx, sy, sw, sh, 0, 0, recordWidth, recordHeight);
				this.animationFrameId = requestAnimationFrame(captureFrame);
			};
			this.recordingStream = this.recordingCanvas.captureStream(30);
			if (!this.recordingStream) throw new Error("Failed to capture stream from canvas");
			this.mediaRecorder = new MediaRecorder(this.recordingStream, {
				mimeType: "video/webm;codecs=vp9",
				videoBitsPerSecond: 5e6
			});
			this.recordedChunks = [];
			this.mediaRecorder.ondataavailable = (event) => {
				if (event.data.size > 0) this.recordedChunks.push(event.data);
			};
			this.mediaRecorder.onstop = () => {
				this.recordingIndicator.visible = false;
				this.isRecording = false;
				this.recordingStream = null;
				if (this.animationFrameId !== null) {
					cancelAnimationFrame(this.animationFrameId);
					this.animationFrameId = null;
				}
				this.eventManager.emitEvent("recordingStopped", {
					duration: this.recordingDuration,
					hasRecording: this.recordedChunks.length > 0
				});
			};
			if (this.recordingIndicator) this.recordingIndicator.visible = true;
			this.mediaRecorder.start(100);
			this.isRecording = true;
			this.recordingStartTime = Date.now();
			captureFrame();
			this.eventManager.emitEvent("recordingStarted", null);
		} catch (error) {
			console.error("Error starting recording:", error);
			this.eventManager.emitEvent("recordingError", error);
		}
	}
	stopRecording() {
		if (!this.isRecording || !this.mediaRecorder) return;
		this.recordingDuration = (Date.now() - this.recordingStartTime) / 1e3;
		if (this.animationFrameId !== null) {
			cancelAnimationFrame(this.animationFrameId);
			this.animationFrameId = null;
		}
		this.mediaRecorder.stop();
		if (this.recordingStream) this.recordingStream.getTracks().forEach((track) => track.stop());
		this.recordingCanvas = null;
		this.recordingContext = null;
	}
	getIsRecording() {
		return this.isRecording;
	}
	hasRecording() {
		return this.recordedChunks.length > 0;
	}
	getRecordingDuration() {
		return this.recordingDuration;
	}
	getRecordingData() {
		if (this.recordedChunks.length !== 0) {
			const blob = new Blob(this.recordedChunks, { type: "video/webm" });
			return URL.createObjectURL(blob);
		}
		return null;
	}
	exportRecording(filename = "scene-recording.mp4") {
		if (this.recordedChunks.length === 0) {
			this.eventManager.emitEvent("recordingError", /* @__PURE__ */ new Error("No recording available to export"));
			return;
		}
		this.eventManager.emitEvent("exportingRecording", null);
		try {
			downloadBlob(filename, new Blob(this.recordedChunks, { type: "video/webm" }));
			this.eventManager.emitEvent("recordingExported", null);
		} catch (error) {
			console.error("Error exporting recording:", error);
			this.eventManager.emitEvent("recordingError", error);
		}
	}
	clearRecording() {
		this.recordedChunks = [];
		this.recordingDuration = 0;
		this.eventManager.emitEvent("recordingCleared", null);
	}
	dispose() {
		if (this.animationFrameId !== null) {
			cancelAnimationFrame(this.animationFrameId);
			this.animationFrameId = null;
		}
		this.stopRecording();
		this.clearRecording();
		this.recordingCanvas = null;
		this.recordingContext = null;
		if (this.recordingIndicator) {
			this.scene.remove(this.recordingIndicator);
			this.recordingIndicator.material.map?.dispose();
			this.recordingIndicator.material.dispose();
		}
	}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.RecordingManager = window.comfyAPI.RecordingManager || {};
window.comfyAPI.RecordingManager.RecordingManager = RecordingManager;
//#endregion
//#region src/extensions/core/load3d/Load3dUtils.ts
var Load3dUtils = class {
	static async uploadTempImage(imageData, prefix, fileType = "png") {
		const blob = await fetch(imageData).then((r) => r.blob());
		const name = `${prefix}_${Date.now()}.${fileType}`;
		const file = new File([blob], name, { type: fileType === "mp4" ? "video/mp4" : "image/png" });
		const body = new FormData();
		body.append("image", file);
		body.append("subfolder", "threed");
		body.append("type", "temp");
		const resp = await api.fetchApi("/upload/image", {
			method: "POST",
			body
		});
		if (resp.status !== 200) {
			const err = `Error uploading temp file: ${resp.status} - ${resp.statusText}`;
			useToastStore().addAlert(err);
			throw new Error(err);
		}
		return await resp.json();
	}
	static MAX_UPLOAD_SIZE_MB = 100;
	static async uploadFile(file, subfolder) {
		let uploadPath;
		const fileSizeMB = file.size / 1024 / 1024;
		if (fileSizeMB > this.MAX_UPLOAD_SIZE_MB) {
			const message = t("toastMessages.fileTooLarge", {
				size: fileSizeMB.toFixed(1),
				maxSize: this.MAX_UPLOAD_SIZE_MB
			});
			console.warn("[Load3D] uploadFile: file too large", fileSizeMB.toFixed(2), "MB");
			useToastStore().addAlert(message);
			return;
		}
		try {
			const body = new FormData();
			body.append("image", file);
			body.append("subfolder", subfolder);
			const resp = await api.fetchApi("/upload/image", {
				method: "POST",
				body
			});
			if (resp.status === 200) {
				const data = await resp.json();
				let path = data.name;
				if (data.subfolder) path = data.subfolder + "/" + path;
				uploadPath = path;
			} else useToastStore().addAlert(resp.status + " - " + resp.statusText);
		} catch (error) {
			console.error("[Load3D] uploadFile: exception", error);
			useToastStore().addAlert(error instanceof Error ? error.message : t("toastMessages.fileUploadFailed"));
		}
		return uploadPath;
	}
	static splitFilePath(path) {
		const folder_separator = path.lastIndexOf("/");
		if (folder_separator === -1) return ["", path];
		return [path.substring(0, folder_separator), path.substring(folder_separator + 1)];
	}
	static getResourceURL(subfolder, filename, type = "input") {
		return `/view?${[
			"filename=" + encodeURIComponent(filename),
			"type=" + type,
			"subfolder=" + subfolder,
			app.getRandParam().substring(1)
		].join("&")}`;
	}
	static async uploadMultipleFiles(files, subfolder = "3d") {
		const uploadPromises = Array.from(files).map((file) => this.uploadFile(file, subfolder));
		await Promise.all(uploadPromises);
	}
};
//#endregion
//#region src/extensions/core/load3d/SceneManager.ts
var SceneManager = class {
	scene;
	gridHelper;
	backgroundScene;
	backgroundCamera;
	backgroundMesh = null;
	backgroundTexture = null;
	backgroundRenderMode = "tiled";
	backgroundColorMaterial = null;
	currentBackgroundType = "color";
	currentBackgroundColor = "#282828";
	eventManager;
	renderer;
	getActiveCamera;
	constructor(renderer, getActiveCamera, _getControls, eventManager) {
		this.renderer = renderer;
		this.eventManager = eventManager;
		this.scene = new Scene();
		this.getActiveCamera = getActiveCamera;
		this.gridHelper = new GridHelper(20, 20);
		this.gridHelper.position.set(0, 0, 0);
		this.scene.add(this.gridHelper);
		this.backgroundScene = new Scene();
		this.backgroundCamera = new OrthographicCamera(-1, 1, 1, -1, -1, 1);
		this.initBackgroundScene();
	}
	initBackgroundScene() {
		const planeGeometry = new PlaneGeometry(2, 2);
		this.backgroundColorMaterial = new MeshBasicMaterial({
			color: new Color(this.currentBackgroundColor),
			transparent: false,
			depthWrite: false,
			depthTest: false,
			side: 2
		});
		this.backgroundMesh = new Mesh(planeGeometry, this.backgroundColorMaterial);
		this.backgroundMesh.position.set(0, 0, 0);
		this.backgroundScene.add(this.backgroundMesh);
		this.renderer.setClearColor(0, 0);
	}
	init() {}
	dispose() {
		if (this.backgroundTexture) this.backgroundTexture.dispose();
		if (this.backgroundColorMaterial) this.backgroundColorMaterial.dispose();
		if (this.backgroundMesh) {
			this.backgroundMesh.geometry.dispose();
			if (this.backgroundMesh.material instanceof Material) this.backgroundMesh.material.dispose();
		}
		if (this.scene.background) this.scene.background = null;
		this.scene.clear();
	}
	toggleGrid(showGrid) {
		if (this.gridHelper) this.gridHelper.visible = showGrid;
		this.eventManager.emitEvent("showGridChange", showGrid);
	}
	setBackgroundColor(color) {
		this.currentBackgroundColor = color;
		this.currentBackgroundType = "color";
		if (this.scene.background instanceof Texture) this.scene.background = null;
		if (this.backgroundRenderMode === "panorama") {
			this.backgroundRenderMode = "tiled";
			this.eventManager.emitEvent("backgroundRenderModeChange", "tiled");
		}
		if (!this.backgroundMesh || !this.backgroundColorMaterial) this.initBackgroundScene();
		this.backgroundColorMaterial.color.set(color);
		this.backgroundColorMaterial.map = null;
		this.backgroundColorMaterial.transparent = false;
		this.backgroundColorMaterial.needsUpdate = true;
		if (this.backgroundMesh) this.backgroundMesh.material = this.backgroundColorMaterial;
		if (this.backgroundTexture) {
			this.backgroundTexture.dispose();
			this.backgroundTexture = null;
		}
		this.eventManager.emitEvent("backgroundColorChange", color);
	}
	async setBackgroundImage(uploadPath) {
		if (uploadPath === "") {
			this.setBackgroundColor(this.currentBackgroundColor);
			return;
		}
		this.eventManager.emitEvent("backgroundImageLoadingStart", null);
		let type = "input";
		let pathParts = Load3dUtils.splitFilePath(uploadPath);
		let subfolder = pathParts[0];
		let filename = pathParts[1];
		if (subfolder === "temp") {
			type = "temp";
			pathParts = ["", filename];
		} else if (subfolder === "output") {
			type = "output";
			pathParts = ["", filename];
		}
		let imageUrl = Load3dUtils.getResourceURL(...pathParts, type);
		if (!imageUrl.startsWith("/api")) imageUrl = "/api" + imageUrl;
		try {
			const textureLoader = new TextureLoader();
			const texture = await new Promise((resolve, reject) => {
				textureLoader.load(imageUrl, resolve, void 0, reject);
			});
			if (this.backgroundTexture) this.backgroundTexture.dispose();
			texture.colorSpace = SRGBColorSpace;
			this.backgroundTexture = texture;
			this.currentBackgroundType = "image";
			if (this.backgroundRenderMode === "panorama") {
				texture.mapping = 303;
				this.scene.background = texture;
			} else {
				if (!this.backgroundMesh) this.initBackgroundScene();
				const imageMaterial = new MeshBasicMaterial({
					map: texture,
					transparent: true,
					depthWrite: false,
					depthTest: false,
					side: 2
				});
				if (this.backgroundMesh) {
					if (this.backgroundMesh.material !== this.backgroundColorMaterial && this.backgroundMesh.material instanceof Material) this.backgroundMesh.material.dispose();
					this.backgroundMesh.material = imageMaterial;
					this.backgroundMesh.position.set(0, 0, 0);
				}
				this.updateBackgroundSize(this.backgroundTexture, this.backgroundMesh, this.renderer.domElement.clientWidth, this.renderer.domElement.clientHeight);
			}
			this.eventManager.emitEvent("backgroundImageChange", uploadPath);
			this.eventManager.emitEvent("backgroundImageLoadingEnd", null);
		} catch (error) {
			this.eventManager.emitEvent("backgroundImageLoadingEnd", null);
			console.error("Error loading background image:", error);
			this.setBackgroundColor(this.currentBackgroundColor);
		}
	}
	removeBackgroundImage() {
		this.setBackgroundColor(this.currentBackgroundColor);
		this.eventManager.emitEvent("backgroundImageLoadingEnd", null);
	}
	setBackgroundRenderMode(mode) {
		if (this.backgroundRenderMode === mode) return;
		this.backgroundRenderMode = mode;
		if (this.currentBackgroundType === "image" && this.backgroundTexture) try {
			if (mode === "panorama") {
				this.backgroundTexture.mapping = 303;
				this.scene.background = this.backgroundTexture;
			} else {
				this.scene.background = null;
				if (this.backgroundMesh && this.backgroundMesh.material instanceof MeshBasicMaterial) {
					this.backgroundMesh.material.map = this.backgroundTexture;
					this.backgroundMesh.material.needsUpdate = true;
				}
			}
		} catch (error) {
			console.error("Error set background render mode:", error);
		}
		this.eventManager.emitEvent("backgroundRenderModeChange", mode);
	}
	updateBackgroundSize(backgroundTexture, backgroundMesh, targetWidth, targetHeight) {
		if (!backgroundTexture || !backgroundMesh) return;
		const material = backgroundMesh.material;
		if (!material.map) return;
		const imageAspect = backgroundTexture.image.width / backgroundTexture.image.height;
		const targetAspect = targetWidth / targetHeight;
		if (imageAspect > targetAspect) backgroundMesh.scale.set(imageAspect / targetAspect, 1, 1);
		else backgroundMesh.scale.set(1, targetAspect / imageAspect, 1);
		material.needsUpdate = true;
	}
	handleResize(width, height) {
		if (this.backgroundTexture && this.backgroundMesh && this.currentBackgroundType === "image") this.updateBackgroundSize(this.backgroundTexture, this.backgroundMesh, width, height);
	}
	renderBackground() {
		if ((this.backgroundRenderMode === "tiled" || this.currentBackgroundType === "color") && this.backgroundMesh) {
			const currentToneMapping = this.renderer.toneMapping;
			const currentExposure = this.renderer.toneMappingExposure;
			this.renderer.toneMapping = 0;
			this.renderer.render(this.backgroundScene, this.backgroundCamera);
			this.renderer.toneMapping = currentToneMapping;
			this.renderer.toneMappingExposure = currentExposure;
		}
	}
	getCurrentBackgroundInfo() {
		return {
			type: this.currentBackgroundType,
			value: this.currentBackgroundType === "color" ? this.currentBackgroundColor : ""
		};
	}
	captureScene(width, height) {
		return new Promise(async (resolve, reject) => {
			try {
				const originalWidth = this.renderer.domElement.width;
				const originalHeight = this.renderer.domElement.height;
				const originalClearColor = this.renderer.getClearColor(new Color());
				const originalClearAlpha = this.renderer.getClearAlpha();
				const originalOutputColorSpace = this.renderer.outputColorSpace;
				this.renderer.setSize(width, height);
				if (this.getActiveCamera() instanceof PerspectiveCamera) {
					const perspectiveCamera = this.getActiveCamera();
					perspectiveCamera.aspect = width / height;
					perspectiveCamera.updateProjectionMatrix();
				} else {
					const orthographicCamera = this.getActiveCamera();
					const frustumSize = 10;
					const aspect = width / height;
					orthographicCamera.left = -frustumSize * aspect / 2;
					orthographicCamera.right = frustumSize * aspect / 2;
					orthographicCamera.top = frustumSize / 2;
					orthographicCamera.bottom = -frustumSize / 2;
					orthographicCamera.updateProjectionMatrix();
				}
				if (this.backgroundTexture && this.backgroundMesh && this.currentBackgroundType === "image") this.updateBackgroundSize(this.backgroundTexture, this.backgroundMesh, width, height);
				const originalMaterials = /* @__PURE__ */ new Map();
				this.renderer.clear();
				this.renderBackground();
				this.renderer.render(this.scene, this.getActiveCamera());
				const sceneData = this.renderer.domElement.toDataURL("image/png");
				this.renderer.setClearColor(0, 0);
				this.renderer.clear();
				this.renderer.render(this.scene, this.getActiveCamera());
				const maskData = this.renderer.domElement.toDataURL("image/png");
				this.scene.traverse((child) => {
					if (child instanceof Mesh) {
						originalMaterials.set(child, child.material);
						child.material = new MeshNormalMaterial({
							flatShading: false,
							side: 2,
							normalScale: new Vector2(1, 1)
						});
					}
				});
				const gridVisible = this.gridHelper.visible;
				this.gridHelper.visible = false;
				this.renderer.setClearColor(0, 1);
				this.renderer.clear();
				this.renderer.render(this.scene, this.getActiveCamera());
				const normalData = this.renderer.domElement.toDataURL("image/png");
				this.scene.traverse((child) => {
					if (child instanceof Mesh) {
						const originalMaterial = originalMaterials.get(child);
						if (originalMaterial) child.material = originalMaterial;
					}
				});
				this.renderer.setClearColor(16777215, 1);
				this.renderer.clear();
				this.gridHelper.visible = gridVisible;
				this.renderer.setClearColor(originalClearColor, originalClearAlpha);
				this.renderer.setSize(originalWidth, originalHeight);
				this.renderer.outputColorSpace = originalOutputColorSpace;
				this.handleResize(originalWidth, originalHeight);
				resolve({
					scene: sceneData,
					mask: maskData,
					normal: normalData
				});
			} catch (error) {
				reject(error);
			}
		});
	}
	reset() {}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.SceneManager = window.comfyAPI.SceneManager || {};
window.comfyAPI.SceneManager.SceneManager = SceneManager;
//#endregion
//#region src/extensions/core/load3d/SceneModelManager.ts
var SceneModelManager = class {
	currentModel = null;
	originalModel = null;
	originalRotation = null;
	currentUpDirection = "original";
	materialMode = "original";
	originalMaterials = /* @__PURE__ */ new WeakMap();
	normalMaterial;
	standardMaterial;
	wireframeMaterial;
	depthMaterial;
	originalFileName = null;
	originalURL = null;
	appliedTexture = null;
	textureLoader;
	skeletonHelper = null;
	showSkeleton = false;
	scene;
	renderer;
	eventManager;
	activeCamera;
	setupCamera;
	constructor(scene, renderer, eventManager, getActiveCamera, setupCamera) {
		this.scene = scene;
		this.renderer = renderer;
		this.eventManager = eventManager;
		this.activeCamera = getActiveCamera();
		this.setupCamera = setupCamera;
		this.textureLoader = new TextureLoader();
		this.normalMaterial = new MeshNormalMaterial({
			flatShading: false,
			side: 2,
			normalScale: new Vector2(1, 1),
			transparent: false,
			opacity: 1
		});
		this.wireframeMaterial = new MeshBasicMaterial({
			color: 16777215,
			wireframe: true,
			transparent: false,
			opacity: 1
		});
		this.depthMaterial = new MeshDepthMaterial({
			depthPacking: BasicDepthPacking,
			side: 2
		});
		this.standardMaterial = this.createSTLMaterial();
	}
	init() {}
	dispose() {
		this.clearModel();
		this.normalMaterial.dispose();
		this.standardMaterial.dispose();
		this.wireframeMaterial.dispose();
		this.depthMaterial.dispose();
		if (this.appliedTexture) {
			this.appliedTexture.dispose();
			this.appliedTexture = null;
		}
	}
	createSTLMaterial() {
		return new MeshStandardMaterial({
			color: 8421504,
			metalness: .1,
			roughness: .8,
			flatShading: false,
			side: 2
		});
	}
	handlePLYModeSwitch(mode) {
		if (!(this.originalModel instanceof BufferGeometry)) return;
		const plyGeometry = this.originalModel.clone();
		const hasVertexColors = plyGeometry.attributes.color !== void 0;
		const oldMainModels = [];
		this.scene.traverse((obj) => {
			if (obj.name === "MainModel") oldMainModels.push(obj);
		});
		oldMainModels.forEach((oldModel) => {
			oldModel.traverse((child) => {
				if (child instanceof Mesh || child instanceof Points) {
					child.geometry?.dispose();
					if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
					else child.material?.dispose();
				}
			});
			this.scene.remove(oldModel);
		});
		this.currentModel = null;
		let newModel;
		if (mode === "pointCloud") {
			plyGeometry.computeBoundingSphere();
			if (plyGeometry.boundingSphere) {
				const center = plyGeometry.boundingSphere.center;
				const radius = plyGeometry.boundingSphere.radius;
				plyGeometry.translate(-center.x, -center.y, -center.z);
				if (radius > 0) {
					const scale = 1 / radius;
					plyGeometry.scale(scale, scale, scale);
				}
			}
			const points = new Points(plyGeometry, hasVertexColors ? new PointsMaterial({
				size: .005,
				vertexColors: true,
				sizeAttenuation: true
			}) : new PointsMaterial({
				size: .005,
				color: 13421772,
				sizeAttenuation: true
			}));
			newModel = new Group();
			newModel.add(points);
		} else {
			let meshMaterial = hasVertexColors ? new MeshStandardMaterial({
				vertexColors: true,
				metalness: 0,
				roughness: .5,
				side: 2
			}) : this.standardMaterial.clone();
			if (!hasVertexColors && meshMaterial instanceof MeshStandardMaterial) meshMaterial.side = 2;
			const mesh = new Mesh(plyGeometry, meshMaterial);
			this.originalMaterials.set(mesh, meshMaterial);
			newModel = new Group();
			newModel.add(mesh);
			if (mode === "normal") mesh.material = new MeshNormalMaterial({
				flatShading: false,
				side: 2
			});
			else if (mode === "wireframe") mesh.material = new MeshBasicMaterial({
				color: 16777215,
				wireframe: true
			});
		}
		const remainingMainModels = [];
		this.scene.traverse((obj) => {
			if (obj.name === "MainModel") remainingMainModels.push(obj);
		});
		remainingMainModels.forEach((obj) => this.scene.remove(obj));
		this.currentModel = newModel;
		newModel.name = "MainModel";
		if (mode === "pointCloud") this.scene.add(newModel);
		else {
			const box = new Box3().setFromObject(newModel);
			const size = box.getSize(new Vector3());
			const center = box.getCenter(new Vector3());
			const scale = 5 / Math.max(size.x, size.y, size.z);
			newModel.scale.multiplyScalar(scale);
			box.setFromObject(newModel);
			box.getCenter(center);
			box.getSize(size);
			newModel.position.set(-center.x, -box.min.y, -center.z);
			this.scene.add(newModel);
		}
		this.eventManager.emitEvent("materialModeChange", mode);
	}
	setMaterialMode(mode) {
		if (!this.currentModel || mode === this.materialMode) return;
		this.materialMode = mode;
		if (this.originalModel instanceof BufferGeometry) {
			this.handlePLYModeSwitch(mode);
			return;
		}
		if (mode === "depth") this.renderer.outputColorSpace = LinearSRGBColorSpace;
		else this.renderer.outputColorSpace = SRGBColorSpace;
		if (this.currentModel) this.currentModel.visible = true;
		this.currentModel.traverse((child) => {
			if (child instanceof Mesh) switch (mode) {
				case "depth":
					if (!this.originalMaterials.has(child)) this.originalMaterials.set(child, child.material);
					const depthMat = new MeshDepthMaterial({
						depthPacking: BasicDepthPacking,
						side: 2
					});
					depthMat.onBeforeCompile = (shader) => {
						shader.uniforms.cameraType = { value: this.activeCamera instanceof OrthographicCamera ? 1 : 0 };
						shader.fragmentShader = `
                uniform float cameraType;
                ${shader.fragmentShader}
              `;
						shader.fragmentShader = shader.fragmentShader.replace(/gl_FragColor\s*=\s*vec4\(\s*vec3\(\s*1.0\s*-\s*fragCoordZ\s*\)\s*,\s*opacity\s*\)\s*;/, `
                  float depth = 1.0 - fragCoordZ;
                  if (cameraType > 0.5) {
                    depth = pow(depth, 400.0);
                  } else {
                    depth = pow(depth, 0.6);
                  }
                  gl_FragColor = vec4(vec3(depth), opacity);
                `);
					};
					depthMat.customProgramCacheKey = () => {
						return this.activeCamera instanceof OrthographicCamera ? "ortho" : "persp";
					};
					child.material = depthMat;
					break;
				case "normal":
					if (!this.originalMaterials.has(child)) this.originalMaterials.set(child, child.material);
					child.material = new MeshNormalMaterial({
						flatShading: false,
						side: 2,
						normalScale: new Vector2(1, 1),
						transparent: false,
						opacity: 1
					});
					break;
				case "wireframe":
					if (!this.originalMaterials.has(child)) this.originalMaterials.set(child, child.material);
					child.material = new MeshBasicMaterial({
						color: 16777215,
						wireframe: true,
						transparent: false,
						opacity: 1
					});
					break;
				case "original":
				case "pointCloud":
					const originalMaterial = this.originalMaterials.get(child);
					if (originalMaterial) child.material = originalMaterial;
					else if (this.appliedTexture) child.material = new MeshStandardMaterial({
						map: this.appliedTexture,
						metalness: .1,
						roughness: .8,
						side: 2
					});
					else child.material = this.standardMaterial;
					break;
			}
		});
		this.eventManager.emitEvent("materialModeChange", mode);
	}
	setupModelMaterials(model) {
		model.traverse((child) => {
			if (child instanceof Mesh) this.originalMaterials.set(child, child.material);
		});
		this.setMaterialMode("original");
	}
	clearModel() {
		const objectsToRemove = [];
		this.scene.traverse((object) => {
			if (!(object instanceof GridHelper || object instanceof Light || object instanceof Camera)) objectsToRemove.push(object);
		});
		objectsToRemove.forEach((obj) => {
			if (obj.parent && obj.parent !== this.scene) obj.parent.remove(obj);
			else this.scene.remove(obj);
			if (obj instanceof Mesh) {
				obj.geometry?.dispose();
				if (Array.isArray(obj.material)) obj.material.forEach((material) => material.dispose());
				else obj.material?.dispose();
			}
		});
		this.reset();
	}
	reset() {
		this.currentModel = null;
		this.originalModel = null;
		this.originalRotation = null;
		this.currentUpDirection = "original";
		this.setMaterialMode("original");
		this.originalFileName = null;
		this.originalURL = null;
		if (this.appliedTexture) {
			this.appliedTexture.dispose();
			this.appliedTexture = null;
		}
		if (this.skeletonHelper) {
			this.scene.remove(this.skeletonHelper);
			this.skeletonHelper.dispose();
			this.skeletonHelper = null;
		}
		this.showSkeleton = false;
		this.originalMaterials = /* @__PURE__ */ new WeakMap();
	}
	hasSkeleton() {
		if (!this.currentModel) return false;
		let found = false;
		this.currentModel.traverse((child) => {
			if (child instanceof SkinnedMesh && child.skeleton) found = true;
		});
		return found;
	}
	setShowSkeleton(show) {
		this.showSkeleton = show;
		if (show) {
			if (!this.skeletonHelper && this.currentModel) {
				let rootBone = null;
				this.currentModel.traverse((child) => {
					if (child instanceof Bone && !rootBone) {
						if (!(child.parent instanceof Bone)) rootBone = child;
					}
				});
				if (rootBone) {
					this.skeletonHelper = new SkeletonHelper(rootBone);
					this.scene.add(this.skeletonHelper);
				} else {
					let skinnedMesh = null;
					this.currentModel.traverse((child) => {
						if (child instanceof SkinnedMesh && !skinnedMesh) skinnedMesh = child;
					});
					if (skinnedMesh) {
						this.skeletonHelper = new SkeletonHelper(skinnedMesh);
						this.scene.add(this.skeletonHelper);
					}
				}
			} else if (this.skeletonHelper) this.skeletonHelper.visible = true;
		} else if (this.skeletonHelper) this.skeletonHelper.visible = false;
		this.eventManager.emitEvent("skeletonVisibilityChange", show);
	}
	addModelToScene(model) {
		this.currentModel = model;
		model.name = "MainModel";
		this.scene.add(this.currentModel);
	}
	async setupModel(model) {
		this.currentModel = model;
		model.name = "MainModel";
		if (this.containsSplatMesh(model)) {
			this.scene.add(model);
			this.setupCamera(new Vector3(5, 5, 5));
			return;
		}
		const box = new Box3().setFromObject(model);
		const size = box.getSize(new Vector3());
		const center = box.getCenter(new Vector3());
		const scale = 5 / Math.max(size.x, size.y, size.z);
		model.scale.multiplyScalar(scale);
		box.setFromObject(model);
		box.getCenter(center);
		box.getSize(size);
		model.position.set(-center.x, -box.min.y, -center.z);
		this.scene.add(model);
		if (this.materialMode !== "original") this.setMaterialMode(this.materialMode);
		if (this.currentUpDirection !== "original") this.setUpDirection(this.currentUpDirection);
		this.setupModelMaterials(model);
		this.setupCamera(size);
	}
	containsSplatMesh(model) {
		const target = model ?? this.currentModel;
		if (!target) return false;
		if (target instanceof SplatMesh) return true;
		let found = false;
		target.traverse((child) => {
			if (child instanceof SplatMesh) found = true;
		});
		return found;
	}
	setOriginalModel(model) {
		this.originalModel = model;
	}
	setUpDirection(direction) {
		if (!this.currentModel) return;
		if (!this.originalRotation && this.currentModel.rotation) this.originalRotation = this.currentModel.rotation.clone();
		this.currentUpDirection = direction;
		if (this.originalRotation) this.currentModel.rotation.copy(this.originalRotation);
		switch (direction) {
			case "original": break;
			case "-x":
				this.currentModel.rotation.z = Math.PI / 2;
				break;
			case "+x":
				this.currentModel.rotation.z = -Math.PI / 2;
				break;
			case "-y":
				this.currentModel.rotation.x = Math.PI;
				break;
			case "+y": break;
			case "-z":
				this.currentModel.rotation.x = Math.PI / 2;
				break;
			case "+z":
				this.currentModel.rotation.x = -Math.PI / 2;
				break;
		}
		this.eventManager.emitEvent("upDirectionChange", direction);
	}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.SceneModelManager = window.comfyAPI.SceneModelManager || {};
window.comfyAPI.SceneModelManager.SceneModelManager = SceneModelManager;
//#endregion
//#region src/extensions/core/load3d/ViewHelperManager.ts
var ViewHelperManager = class {
	viewHelper = {};
	viewHelperContainer = {};
	getActiveCamera;
	getControls;
	eventManager;
	constructor(_renderer, getActiveCamera, getControls, eventManager) {
		this.getActiveCamera = getActiveCamera;
		this.getControls = getControls;
		this.eventManager = eventManager;
	}
	init() {}
	dispose() {
		if (this.viewHelper) this.viewHelper.dispose();
		if (this.viewHelperContainer && this.viewHelperContainer.parentNode) this.viewHelperContainer.parentNode.removeChild(this.viewHelperContainer);
	}
	createViewHelper(container) {
		this.viewHelperContainer = document.createElement("div");
		this.viewHelperContainer.style.position = "absolute";
		this.viewHelperContainer.style.bottom = "0";
		this.viewHelperContainer.style.left = "0";
		this.viewHelperContainer.style.width = "128px";
		this.viewHelperContainer.style.height = "128px";
		this.viewHelperContainer.addEventListener("pointerup", (event) => {
			event.stopPropagation();
			this.viewHelper.handleClick(event);
		});
		this.viewHelperContainer.addEventListener("pointerdown", (event) => {
			event.stopPropagation();
		});
		container.appendChild(this.viewHelperContainer);
		this.viewHelper = new ViewHelper(this.getActiveCamera(), this.viewHelperContainer);
		this.viewHelper.center = this.getControls().target;
	}
	update(delta) {
		if (this.viewHelper.animating) {
			this.viewHelper.update(delta);
			if (!this.viewHelper.animating) {
				const cameraState = {
					position: this.getActiveCamera().position.clone(),
					target: this.getControls().target.clone(),
					zoom: this.getActiveCamera() instanceof OrthographicCamera ? this.getActiveCamera().zoom : this.getActiveCamera().zoom,
					cameraType: this.getActiveCamera() instanceof PerspectiveCamera ? "perspective" : "orthographic"
				};
				this.eventManager.emitEvent("cameraChanged", cameraState);
			}
		}
	}
	handleResize() {}
	visibleViewHelper(visible) {
		if (visible) {
			this.viewHelper.visible = true;
			this.viewHelperContainer.style.display = "block";
		} else {
			this.viewHelper.visible = false;
			this.viewHelperContainer.style.display = "none";
		}
	}
	recreateViewHelper() {
		if (this.viewHelper) this.viewHelper.dispose();
		this.viewHelper = new ViewHelper(this.getActiveCamera(), this.viewHelperContainer);
		this.viewHelper.center = this.getControls().target;
	}
	reset() {}
};
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.ViewHelperManager = window.comfyAPI.ViewHelperManager || {};
window.comfyAPI.ViewHelperManager.ViewHelperManager = ViewHelperManager;
//#endregion
//#region src/extensions/core/load3d/Load3d.ts
function positionThumbnailCamera(camera, model) {
	const box = new Box3().setFromObject(model);
	const size = box.getSize(new Vector3());
	const center = box.getCenter(new Vector3());
	const distance = Math.max(size.x, size.y, size.z) * 1.5;
	camera.position.set(center.x + distance * .7, center.y + distance * .5, center.z + distance * .7);
	camera.lookAt(center);
	camera.updateProjectionMatrix();
}
var Load3d = class {
	renderer;
	clock;
	animationFrameId = null;
	loadingPromise = null;
	onContextMenuCallback;
	getDimensionsCallback;
	eventManager;
	sceneManager;
	cameraManager;
	controlsManager;
	lightingManager;
	viewHelperManager;
	loaderManager;
	modelManager;
	recordingManager;
	animationManager;
	STATUS_MOUSE_ON_NODE;
	STATUS_MOUSE_ON_SCENE;
	STATUS_MOUSE_ON_VIEWER;
	INITIAL_RENDER_DONE = false;
	targetWidth = 0;
	targetHeight = 0;
	targetAspectRatio = 1;
	isViewerMode = false;
	rightMouseStart = {
		x: 0,
		y: 0
	};
	rightMouseMoved = false;
	dragThreshold = 5;
	contextMenuAbortController = null;
	resizeObserver = null;
	constructor(container, options = {}) {
		this.clock = new Clock();
		this.isViewerMode = options.isViewerMode || false;
		this.onContextMenuCallback = options.onContextMenu;
		this.getDimensionsCallback = options.getDimensions;
		if (options.width && options.height) {
			this.targetWidth = options.width;
			this.targetHeight = options.height;
			this.targetAspectRatio = options.width / options.height;
		}
		this.renderer = new WebGLRenderer({
			alpha: true,
			antialias: true
		});
		this.renderer.setSize(300, 300);
		this.renderer.setClearColor(2631720);
		this.renderer.autoClear = false;
		this.renderer.outputColorSpace = SRGBColorSpace;
		this.renderer.domElement.classList.add("absolute", "inset-0", "h-full", "w-full", "outline-none");
		container.appendChild(this.renderer.domElement);
		this.eventManager = new EventManager();
		this.sceneManager = new SceneManager(this.renderer, this.getActiveCamera.bind(this), this.getControls.bind(this), this.eventManager);
		this.cameraManager = new CameraManager(this.renderer, this.eventManager);
		this.controlsManager = new ControlsManager(this.renderer, this.cameraManager.activeCamera, this.eventManager);
		this.cameraManager.setControls(this.controlsManager.controls);
		this.lightingManager = new LightingManager(this.sceneManager.scene, this.eventManager);
		this.viewHelperManager = new ViewHelperManager(this.renderer, this.getActiveCamera.bind(this), this.getControls.bind(this), this.eventManager);
		this.modelManager = new SceneModelManager(this.sceneManager.scene, this.renderer, this.eventManager, this.getActiveCamera.bind(this), this.setupCamera.bind(this));
		this.loaderManager = new LoaderManager(this.modelManager, this.eventManager);
		this.recordingManager = new RecordingManager(this.sceneManager.scene, this.renderer, this.eventManager);
		this.animationManager = new AnimationManager(this.eventManager);
		this.sceneManager.init();
		this.cameraManager.init();
		this.controlsManager.init();
		this.lightingManager.init();
		this.loaderManager.init();
		this.animationManager.init();
		this.viewHelperManager.createViewHelper(container);
		this.viewHelperManager.init();
		this.STATUS_MOUSE_ON_NODE = false;
		this.STATUS_MOUSE_ON_SCENE = false;
		this.STATUS_MOUSE_ON_VIEWER = false;
		this.initContextMenu();
		this.initResizeObserver(container);
		this.handleResize();
		this.startAnimation();
		setTimeout(() => {
			this.forceRender();
		}, 100);
	}
	initResizeObserver(container) {
		if (typeof ResizeObserver === "undefined") return;
		this.resizeObserver?.disconnect();
		this.resizeObserver = new ResizeObserver(() => {
			this.handleResize();
		});
		this.resizeObserver.observe(container);
	}
	/**
	* Initialize context menu on the Three.js canvas
	* Detects right-click vs right-drag to show menu only on click
	*/
	initContextMenu() {
		const canvas = this.renderer.domElement;
		this.contextMenuAbortController = new AbortController();
		const { signal } = this.contextMenuAbortController;
		const mousedownHandler = (e) => {
			if (e.button === 2) {
				this.rightMouseStart = {
					x: e.clientX,
					y: e.clientY
				};
				this.rightMouseMoved = false;
			}
		};
		const mousemoveHandler = (e) => {
			if (e.buttons === 2) {
				if (exceedsClickThreshold(this.rightMouseStart, {
					x: e.clientX,
					y: e.clientY
				}, this.dragThreshold)) this.rightMouseMoved = true;
			}
		};
		const contextmenuHandler = (e) => {
			if (this.isViewerMode) return;
			const wasDragging = this.rightMouseMoved || exceedsClickThreshold(this.rightMouseStart, {
				x: e.clientX,
				y: e.clientY
			}, this.dragThreshold);
			this.rightMouseMoved = false;
			if (wasDragging) return;
			e.preventDefault();
			e.stopPropagation();
			this.showNodeContextMenu(e);
		};
		canvas.addEventListener("mousedown", mousedownHandler, { signal });
		canvas.addEventListener("mousemove", mousemoveHandler, { signal });
		canvas.addEventListener("contextmenu", contextmenuHandler, { signal });
	}
	showNodeContextMenu(event) {
		if (this.onContextMenuCallback) this.onContextMenuCallback(event);
	}
	getEventManager() {
		return this.eventManager;
	}
	getSceneManager() {
		return this.sceneManager;
	}
	getCameraManager() {
		return this.cameraManager;
	}
	getControlsManager() {
		return this.controlsManager;
	}
	getLightingManager() {
		return this.lightingManager;
	}
	getViewHelperManager() {
		return this.viewHelperManager;
	}
	getLoaderManager() {
		return this.loaderManager;
	}
	getModelManager() {
		return this.modelManager;
	}
	getRecordingManager() {
		return this.recordingManager;
	}
	getTargetSize() {
		return {
			width: this.targetWidth,
			height: this.targetHeight
		};
	}
	shouldMaintainAspectRatio() {
		return this.isViewerMode || this.targetWidth > 0 && this.targetHeight > 0;
	}
	forceRender() {
		const delta = this.clock.getDelta();
		this.animationManager.update(delta);
		this.viewHelperManager.update(delta);
		this.controlsManager.update();
		this.renderMainScene();
		this.resetViewport();
		if (this.viewHelperManager.viewHelper.render) this.viewHelperManager.viewHelper.render(this.renderer);
		this.INITIAL_RENDER_DONE = true;
	}
	renderMainScene() {
		const containerWidth = this.renderer.domElement.clientWidth;
		const containerHeight = this.renderer.domElement.clientHeight;
		if (this.getDimensionsCallback) {
			const dims = this.getDimensionsCallback();
			if (dims) {
				this.targetWidth = dims.width;
				this.targetHeight = dims.height;
				this.targetAspectRatio = dims.width / dims.height;
			}
		}
		if (this.shouldMaintainAspectRatio()) {
			const containerAspectRatio = containerWidth / containerHeight;
			let renderWidth;
			let renderHeight;
			let offsetX = 0;
			let offsetY = 0;
			if (containerAspectRatio > this.targetAspectRatio) {
				renderHeight = containerHeight;
				renderWidth = renderHeight * this.targetAspectRatio;
				offsetX = (containerWidth - renderWidth) / 2;
			} else {
				renderWidth = containerWidth;
				renderHeight = renderWidth / this.targetAspectRatio;
				offsetY = (containerHeight - renderHeight) / 2;
			}
			this.renderer.setViewport(0, 0, containerWidth, containerHeight);
			this.renderer.setScissor(0, 0, containerWidth, containerHeight);
			this.renderer.setScissorTest(true);
			this.renderer.setClearColor(657930);
			this.renderer.clear();
			this.renderer.setViewport(offsetX, offsetY, renderWidth, renderHeight);
			this.renderer.setScissor(offsetX, offsetY, renderWidth, renderHeight);
			const renderAspectRatio = renderWidth / renderHeight;
			this.cameraManager.updateAspectRatio(renderAspectRatio);
		} else {
			this.renderer.setViewport(0, 0, containerWidth, containerHeight);
			this.renderer.setScissor(0, 0, containerWidth, containerHeight);
			this.renderer.setScissorTest(true);
		}
		this.sceneManager.renderBackground();
		this.renderer.render(this.sceneManager.scene, this.cameraManager.activeCamera);
	}
	resetViewport() {
		const width = this.renderer.domElement.clientWidth;
		const height = this.renderer.domElement.clientHeight;
		this.renderer.setViewport(0, 0, width, height);
		this.renderer.setScissor(0, 0, width, height);
		this.renderer.setScissorTest(false);
	}
	getActiveCamera() {
		return this.cameraManager.activeCamera;
	}
	getControls() {
		return this.controlsManager.controls;
	}
	setupCamera(size) {
		this.cameraManager.setupForModel(size);
	}
	startAnimation() {
		const animate = () => {
			this.animationFrameId = requestAnimationFrame(animate);
			if (!this.isActive()) return;
			const delta = this.clock.getDelta();
			this.animationManager.update(delta);
			this.viewHelperManager.update(delta);
			this.controlsManager.update();
			this.renderMainScene();
			this.resetViewport();
			if (this.viewHelperManager.viewHelper.render) this.viewHelperManager.viewHelper.render(this.renderer);
		};
		animate();
	}
	updateStatusMouseOnNode(onNode) {
		this.STATUS_MOUSE_ON_NODE = onNode;
	}
	updateStatusMouseOnScene(onScene) {
		this.STATUS_MOUSE_ON_SCENE = onScene;
	}
	updateStatusMouseOnViewer(onViewer) {
		this.STATUS_MOUSE_ON_VIEWER = onViewer;
	}
	isActive() {
		return this.STATUS_MOUSE_ON_NODE || this.STATUS_MOUSE_ON_SCENE || this.STATUS_MOUSE_ON_VIEWER || this.isRecording() || !this.INITIAL_RENDER_DONE || this.animationManager.isAnimationPlaying;
	}
	async exportModel(format) {
		if (!this.modelManager.currentModel) throw new Error("No model to export");
		const exportMessage = `Exporting as ${format.toUpperCase()}...`;
		this.eventManager.emitEvent("exportLoadingStart", exportMessage);
		try {
			const model = this.modelManager.currentModel.clone();
			const filename = `${this.modelManager.originalFileName || "model"}.${format}`;
			const originalURL = this.modelManager.originalURL;
			await new Promise((resolve) => setTimeout(resolve, 10));
			switch (format) {
				case "glb":
					await ModelExporter.exportGLB(model, filename, originalURL);
					break;
				case "obj":
					await ModelExporter.exportOBJ(model, filename, originalURL);
					break;
				case "stl":
					await ModelExporter.exportSTL(model, filename);
					break;
				default: throw new Error(`Unsupported export format: ${format}`);
			}
			await new Promise((resolve) => setTimeout(resolve, 10));
		} catch (error) {
			console.error(`Error exporting model as ${format}:`, error);
			throw error;
		} finally {
			this.eventManager.emitEvent("exportLoadingEnd", null);
		}
	}
	setBackgroundColor(color) {
		this.sceneManager.setBackgroundColor(color);
		this.forceRender();
	}
	async setBackgroundImage(uploadPath) {
		await this.sceneManager.setBackgroundImage(uploadPath);
		if (this.sceneManager.backgroundTexture && this.sceneManager.backgroundMesh) {
			const containerWidth = this.renderer.domElement.clientWidth;
			const containerHeight = this.renderer.domElement.clientHeight;
			if (this.shouldMaintainAspectRatio()) {
				const containerAspectRatio = containerWidth / containerHeight;
				let renderWidth;
				let renderHeight;
				if (containerAspectRatio > this.targetAspectRatio) {
					renderHeight = containerHeight;
					renderWidth = renderHeight * this.targetAspectRatio;
				} else {
					renderWidth = containerWidth;
					renderHeight = renderWidth / this.targetAspectRatio;
				}
				this.sceneManager.updateBackgroundSize(this.sceneManager.backgroundTexture, this.sceneManager.backgroundMesh, renderWidth, renderHeight);
			} else this.sceneManager.updateBackgroundSize(this.sceneManager.backgroundTexture, this.sceneManager.backgroundMesh, containerWidth, containerHeight);
		}
		this.forceRender();
	}
	removeBackgroundImage() {
		this.sceneManager.removeBackgroundImage();
		this.forceRender();
	}
	toggleGrid(showGrid) {
		this.sceneManager.toggleGrid(showGrid);
		this.forceRender();
	}
	setBackgroundRenderMode(mode) {
		this.sceneManager.setBackgroundRenderMode(mode);
		this.forceRender();
	}
	toggleCamera(cameraType) {
		this.cameraManager.toggleCamera(cameraType);
		this.controlsManager.updateCamera(this.cameraManager.activeCamera);
		this.viewHelperManager.recreateViewHelper();
		this.handleResize();
	}
	getCurrentCameraType() {
		return this.cameraManager.getCurrentCameraType();
	}
	getCurrentModel() {
		return this.modelManager.currentModel;
	}
	setCameraState(state) {
		this.cameraManager.setCameraState(state);
		this.forceRender();
	}
	getCameraState() {
		return this.cameraManager.getCameraState();
	}
	setFOV(fov) {
		this.cameraManager.setFOV(fov);
		this.forceRender();
	}
	setMaterialMode(mode) {
		this.modelManager.setMaterialMode(mode);
		this.forceRender();
	}
	async loadModel(url, originalFileName) {
		if (this.loadingPromise) try {
			await this.loadingPromise;
		} catch (e) {}
		this.loadingPromise = this._loadModelInternal(url, originalFileName);
		return this.loadingPromise;
	}
	async _loadModelInternal(url, originalFileName) {
		this.cameraManager.reset();
		this.controlsManager.reset();
		this.modelManager.clearModel();
		this.animationManager.dispose();
		await this.loaderManager.loadModel(url, originalFileName);
		if (this.modelManager.currentModel) this.animationManager.setupModelAnimations(this.modelManager.currentModel, this.modelManager.originalModel);
		this.handleResize();
		this.loadingPromise = null;
	}
	isSplatModel() {
		return this.modelManager.containsSplatMesh();
	}
	isPlyModel() {
		return this.modelManager.originalModel instanceof BufferGeometry;
	}
	clearModel() {
		this.animationManager.dispose();
		this.modelManager.clearModel();
		this.forceRender();
	}
	setUpDirection(direction) {
		this.modelManager.setUpDirection(direction);
		this.forceRender();
	}
	setLightIntensity(intensity) {
		this.lightingManager.setLightIntensity(intensity);
		this.forceRender();
	}
	setTargetSize(width, height) {
		this.targetWidth = width;
		this.targetHeight = height;
		this.targetAspectRatio = width / height;
		this.handleResize();
	}
	addEventListener(event, callback) {
		this.eventManager.addEventListener(event, callback);
	}
	removeEventListener(event, callback) {
		this.eventManager.removeEventListener(event, callback);
	}
	refreshViewport() {
		this.handleResize();
	}
	handleResize() {
		const parentElement = this.renderer?.domElement?.parentElement;
		if (!parentElement) {
			console.warn("Parent element not found");
			return;
		}
		const containerWidth = parentElement.clientWidth;
		const containerHeight = parentElement.clientHeight;
		if (this.getDimensionsCallback) {
			const dims = this.getDimensionsCallback();
			if (dims) {
				this.targetWidth = dims.width;
				this.targetHeight = dims.height;
				this.targetAspectRatio = dims.width / dims.height;
			}
		}
		if (this.shouldMaintainAspectRatio()) {
			const containerAspectRatio = containerWidth / containerHeight;
			let renderWidth;
			let renderHeight;
			if (containerAspectRatio > this.targetAspectRatio) {
				renderHeight = containerHeight;
				renderWidth = renderHeight * this.targetAspectRatio;
			} else {
				renderWidth = containerWidth;
				renderHeight = renderWidth / this.targetAspectRatio;
			}
			this.renderer.setSize(containerWidth, containerHeight);
			this.cameraManager.handleResize(renderWidth, renderHeight);
			this.sceneManager.handleResize(renderWidth, renderHeight);
		} else {
			this.renderer.setSize(containerWidth, containerHeight);
			this.cameraManager.handleResize(containerWidth, containerHeight);
			this.sceneManager.handleResize(containerWidth, containerHeight);
		}
		this.forceRender();
	}
	captureScene(width, height) {
		return this.sceneManager.captureScene(width, height);
	}
	async startRecording() {
		this.viewHelperManager.visibleViewHelper(false);
		return this.recordingManager.startRecording(this.targetWidth, this.targetHeight);
	}
	stopRecording() {
		this.viewHelperManager.visibleViewHelper(true);
		this.recordingManager.stopRecording();
		this.eventManager.emitEvent("recordingStatusChange", false);
	}
	isRecording() {
		return this.recordingManager.getIsRecording();
	}
	getRecordingDuration() {
		return this.recordingManager.getRecordingDuration();
	}
	getRecordingData() {
		return this.recordingManager.getRecordingData();
	}
	exportRecording(filename) {
		this.recordingManager.exportRecording(filename);
	}
	clearRecording() {
		this.recordingManager.clearRecording();
	}
	setAnimationSpeed(speed) {
		this.animationManager.setAnimationSpeed(speed);
	}
	updateSelectedAnimation(index) {
		this.animationManager.updateSelectedAnimation(index);
	}
	toggleAnimation(play) {
		this.animationManager.toggleAnimation(play);
	}
	hasAnimations() {
		return this.animationManager.animationClips.length > 0;
	}
	hasSkeleton() {
		return this.modelManager.hasSkeleton();
	}
	setShowSkeleton(show) {
		this.modelManager.setShowSkeleton(show);
		this.forceRender();
	}
	getShowSkeleton() {
		return this.modelManager.showSkeleton;
	}
	getAnimationTime() {
		return this.animationManager.getAnimationTime();
	}
	getAnimationDuration() {
		return this.animationManager.getAnimationDuration();
	}
	setAnimationTime(time) {
		this.animationManager.setAnimationTime(time);
		this.forceRender();
	}
	async captureThumbnail(width = 256, height = 256) {
		if (!this.modelManager.currentModel) throw new Error("No model loaded for thumbnail capture");
		const savedState = this.cameraManager.getCameraState();
		const savedCameraType = this.cameraManager.getCurrentCameraType();
		const savedGridVisible = this.sceneManager.gridHelper.visible;
		try {
			this.sceneManager.gridHelper.visible = false;
			if (savedCameraType !== "perspective") this.cameraManager.toggleCamera("perspective");
			positionThumbnailCamera(this.cameraManager.perspectiveCamera, this.modelManager.currentModel);
			if (this.controlsManager.controls) {
				const box = new Box3().setFromObject(this.modelManager.currentModel);
				this.controlsManager.controls.target.copy(box.getCenter(new Vector3()));
				this.controlsManager.controls.update();
			}
			return (await this.sceneManager.captureScene(width, height)).scene;
		} finally {
			this.sceneManager.gridHelper.visible = savedGridVisible;
			if (savedCameraType !== "perspective") this.cameraManager.toggleCamera(savedCameraType);
			this.cameraManager.setCameraState(savedState);
			this.controlsManager.controls?.update();
		}
	}
	remove() {
		if (this.resizeObserver) {
			this.resizeObserver.disconnect();
			this.resizeObserver = null;
		}
		if (this.contextMenuAbortController) {
			this.contextMenuAbortController.abort();
			this.contextMenuAbortController = null;
		}
		this.renderer.forceContextLoss();
		const canvas = this.renderer.domElement;
		const event = new Event("webglcontextlost", {
			bubbles: true,
			cancelable: true
		});
		canvas.dispatchEvent(event);
		if (this.animationFrameId !== null) cancelAnimationFrame(this.animationFrameId);
		this.sceneManager.dispose();
		this.cameraManager.dispose();
		this.controlsManager.dispose();
		this.lightingManager.dispose();
		this.viewHelperManager.dispose();
		this.loaderManager.dispose();
		this.modelManager.dispose();
		this.recordingManager.dispose();
		this.animationManager.dispose();
		this.renderer.dispose();
		this.renderer.domElement.remove();
	}
};
//#endregion
//#region src/services/load3dService.ts
/**
* Load3D Service - provides access to Load3D instances
*
* This service uses lazy imports to avoid pulling THREE.js into the main bundle.
* The nodeToLoad3dMap is accessed lazily - it will only be available after
* the load3d extension has been loaded.
*/
var cachedNodeToLoad3dMap = null;
var cachedUseLoad3dViewer = null;
var cachedSkeletonUtils = null;
function getNodeToLoad3dMapSync() {
	return cachedNodeToLoad3dMap;
}
async function loadNodeToLoad3dMap() {
	if (!cachedNodeToLoad3dMap) cachedNodeToLoad3dMap = (await __vitePreload(() => import("./useLoad3d-BIJcUf9u.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]), import.meta.url)).nodeToLoad3dMap;
	return cachedNodeToLoad3dMap;
}
async function loadUseLoad3dViewer() {
	if (!cachedUseLoad3dViewer) cachedUseLoad3dViewer = (await __vitePreload(() => import("./useLoad3dViewer-CPiHjhJp.js"), __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,51,48,49]), import.meta.url)).useLoad3dViewer;
	return cachedUseLoad3dViewer;
}
async function loadSkeletonUtils() {
	if (!cachedSkeletonUtils) cachedSkeletonUtils = await __vitePreload(() => import("./SkeletonUtils-BmiDSG79.js"), __vite__mapDeps([52,6,2]), import.meta.url);
	return cachedSkeletonUtils;
}
var viewerInstances = /* @__PURE__ */ new Map();
var Load3dService = class Load3dService {
	static instance;
	constructor() {}
	static getInstance() {
		if (!Load3dService.instance) Load3dService.instance = new Load3dService();
		return Load3dService.instance;
	}
	/**
	* Get Load3d instance for a node (synchronous).
	* Returns null if the load3d module hasn't been loaded yet.
	*/
	getLoad3d(node) {
		const rawNode = toRaw(node);
		const map = getNodeToLoad3dMapSync();
		if (!map) return null;
		return map.get(rawNode) || null;
	}
	/**
	* Get Load3d instance for a node (async, loads module if needed).
	*/
	async getLoad3dAsync(node) {
		const rawNode = toRaw(node);
		return (await loadNodeToLoad3dMap()).get(rawNode) || null;
	}
	getNodeByLoad3d(load3d) {
		const map = getNodeToLoad3dMapSync();
		if (!map) return null;
		for (const [node, instance] of map) if (instance === load3d) return node;
		return null;
	}
	removeLoad3d(node) {
		const rawNode = toRaw(node);
		const map = getNodeToLoad3dMapSync();
		if (!map) return;
		const instance = map.get(rawNode);
		if (instance) {
			instance.remove();
			map.delete(rawNode);
		}
	}
	clear() {
		const map = getNodeToLoad3dMapSync();
		if (!map) return;
		for (const [node] of map) this.removeLoad3d(node);
	}
	/**
	* Get or create viewer (async, loads module if needed).
	* Use this for initial viewer creation.
	*/
	async getOrCreateViewer(node) {
		if (!viewerInstances.has(node.id)) {
			const useLoad3dViewer = await loadUseLoad3dViewer();
			viewerInstances.set(node.id, useLoad3dViewer(node));
		}
		return viewerInstances.get(node.id);
	}
	/**
	* Get or create viewer (sync version).
	* Only works after useLoad3dViewer has been loaded.
	* Returns null if module not yet loaded - use async version instead.
	*/
	getOrCreateViewerSync(node, useLoad3dViewer) {
		if (!viewerInstances.has(node.id)) viewerInstances.set(node.id, useLoad3dViewer(node));
		return viewerInstances.get(node.id);
	}
	removeViewer(node) {
		const viewer = viewerInstances.get(node.id);
		if (viewer) viewer.cleanup();
		viewerInstances.delete(node.id);
	}
	async copyLoad3dState(source, target) {
		const sourceModel = source.modelManager.currentModel;
		if (sourceModel) {
			const existingModel = target.getModelManager().currentModel;
			if (existingModel) target.getSceneManager().scene.remove(existingModel);
			if (source.isSplatModel()) {
				const originalURL = source.modelManager.originalURL;
				if (originalURL) await target.loadModel(originalURL);
			} else {
				const modelClone = (await loadSkeletonUtils()).clone(sourceModel);
				target.getModelManager().currentModel = modelClone;
				target.getSceneManager().scene.add(modelClone);
				const sourceOriginalModel = source.getModelManager().originalModel;
				if (sourceOriginalModel) target.getModelManager().originalModel = sourceOriginalModel;
				target.getModelManager().materialMode = source.getModelManager().materialMode;
				target.getModelManager().currentUpDirection = source.getModelManager().currentUpDirection;
				target.setMaterialMode(source.getModelManager().materialMode);
				target.setUpDirection(source.getModelManager().currentUpDirection);
				if (source.getModelManager().appliedTexture) target.getModelManager().appliedTexture = source.getModelManager().appliedTexture;
				if (source.hasAnimations()) target.animationManager.setupModelAnimations(modelClone, sourceOriginalModel);
			}
		}
		const sourceCameraType = source.getCurrentCameraType();
		const sourceCameraState = source.getCameraState();
		target.toggleCamera(sourceCameraType);
		target.setCameraState(sourceCameraState);
		target.setBackgroundColor(source.getSceneManager().currentBackgroundColor);
		target.toggleGrid(source.getSceneManager().gridHelper.visible);
		if (source.getSceneManager().getCurrentBackgroundInfo().type === "image") {
			const backgroundPath = (this.getNodeByLoad3d(source)?.properties?.["Scene Config"])?.backgroundImage;
			if (backgroundPath) await target.setBackgroundImage(backgroundPath);
		} else await target.setBackgroundImage("");
		target.setLightIntensity(source.getLightingManager().lights[1]?.intensity || 1);
		if (sourceCameraType === "perspective") target.setFOV(source.getCameraManager().perspectiveCamera.fov);
	}
	handleViewportRefresh(load3d) {
		if (!load3d) return;
		load3d.handleResize();
		const currentType = load3d.getCurrentCameraType();
		load3d.toggleCamera(currentType === "perspective" ? "orthographic" : "perspective");
		load3d.toggleCamera(currentType);
		load3d.getControlsManager().controls.update();
	}
	async handleViewerClose(node) {
		const viewer = await useLoad3dService().getOrCreateViewer(node);
		if (!viewer) return;
		if (viewer.needApplyChanges.value) {
			await viewer.applyChanges();
			const load3DNode = node;
			if (load3DNode.syncLoad3dConfig) load3DNode.syncLoad3dConfig();
		}
		useLoad3dService().removeViewer(node);
	}
};
var useLoad3dService = () => {
	return Load3dService.getInstance();
};
//#endregion
export { Load3d as n, Load3dUtils as r, useLoad3dService as t };

//# sourceMappingURL=load3dService-DBqNe2jy.js.map