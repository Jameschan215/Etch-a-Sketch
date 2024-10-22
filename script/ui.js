import { MAX_WIDTH, createRange } from './utils.js';
import { moveMode, colorMode, pixelColor, gridMode } from './main.js';

const containerDom = document.querySelector('#container');
const pixelsContainerDom = document.querySelector('#pixels-container');
const largeGridDom = document.querySelector('#grid-btn-lg');
const smallGridDom = document.querySelector('#grid-btn-sm');
const mediumGridDom = document.querySelector('#grid-btn-md');
const singleColorBtnDom = document.querySelector('#single-color-btn');
const randomColorBtnDom = document.querySelector('#random-color-btn');
const hoverBtnDom = document.querySelector('#hover-btn');
const dragBtnDom = document.querySelector('#drag-btn');
const colorBlock = document.querySelector('#color-block');

// UPDATE BUTTONS UI
export function updateButtonsUI() {
	// Set the default grid option
	if (gridMode === 'sm') {
		mediumGridDom.classList.remove('selected');
		largeGridDom.classList.remove('selected');
		smallGridDom.classList.add('selected');
	} else if (gridMode === 'md') {
		largeGridDom.classList.remove('selected');
		smallGridDom.classList.remove('selected');
		mediumGridDom.classList.add('selected');
	} else {
		smallGridDom.classList.remove('selected');
		mediumGridDom.classList.remove('selected');
		largeGridDom.classList.add('selected');
	}

	// Set default move mode
	if (moveMode === 'drag') {
		hoverBtnDom.classList.remove('selected');
		dragBtnDom.classList.remove('selected');
		dragBtnDom.classList.add('selected');
	} else if (moveMode === 'hover') {
		dragBtnDom.classList.remove('selected');
		hoverBtnDom.classList.remove('selected');
		hoverBtnDom.classList.add('selected');
	}

	// Set default color mode
	if (colorMode === 'single') {
		randomColorBtnDom.classList.remove('selected');
		singleColorBtnDom.classList.add('selected');
		colorBlock.classList.remove('hidden');
		// Set color picker background
		colorBlock.style.backgroundColor = pixelColor;
	} else if (colorMode === 'random') {
		singleColorBtnDom.classList.remove('selected');
		randomColorBtnDom.classList.add('selected');
		colorBlock.classList.add('hidden');
	}
}

// UPDATE PIXELS UI
export function updatePixelsUI() {
	// Set pixels
	pixelsContainerDom.innerHTML = '';
	const pixelNumInSide = getPixelNumInSide();

	const pixelWidth = Math.floor(MAX_WIDTH / pixelNumInSide);

	pixelsContainerDom.style.maxWidth = `${pixelWidth * pixelNumInSide + 30}px`;

	createRange(pixelNumInSide ** 2).forEach((_) => {
		const divDom = document.createElement('div');
		divDom.style.width = `${pixelWidth}px`;
		divDom.classList.add(`pixel-${pixelNumInSide}`);

		pixelsContainerDom.appendChild(divDom);
	});

	containerDom.appendChild(pixelsContainerDom);
}

function getPixelNumInSide() {
	if (gridMode === 'sm') return 8;
	if (gridMode === 'md') return 16;
	if (gridMode === 'lg') return 32;

	return 16;
}
