import { updateButtonsUI, updatePixelsUI } from './ui.js';
import { handleMove } from './move-handlers.js';

/* GLOBAL VARIABLES & DEFAULT VALUES */
export let moveMode = 'hover';
export let colorMode = 'random';
export let pixelColor = '#3c3c3c';
export let gridMode = 'md';

/* REFERENCES TO DOM ELEMENTS */
const smallGridDom = document.querySelector('#grid-btn-sm');
const mediumGridDom = document.querySelector('#grid-btn-md');
const largeGridDom = document.querySelector('#grid-btn-lg');
const singleColorBtnDom = document.querySelector('#single-color-btn');
const randomColorBtnDom = document.querySelector('#random-color-btn');
const resetBtnDom = document.querySelector('#clear-btn');
const hoverBtnDom = document.querySelector('#hover-btn');
const dragBtnDom = document.querySelector('#drag-btn');
const colorPicker = document.querySelector('#color-picker');
const colorBlock = document.querySelector('#color-block');

// HANDLE GRID OPTIONS
smallGridDom.addEventListener('click', () => {
	gridMode = 'sm';
	start();
});

mediumGridDom.addEventListener('click', () => {
	gridMode = 'md';
	start();
});

largeGridDom.addEventListener('click', () => {
	gridMode = 'lg';
	start();
});

// HANDLE COLOR MODE
singleColorBtnDom.addEventListener('click', () => {
	colorMode = 'single';
	updateButtonsUI();
});

randomColorBtnDom.addEventListener('click', () => {
	colorMode = 'random';
	updateButtonsUI();
});

// HANDLE MOVE MODE
hoverBtnDom.addEventListener('click', () => {
	moveMode = 'hover';
	updateButtonsUI();
	handleMove();
});

dragBtnDom.addEventListener('click', () => {
	moveMode = 'drag';
	updateButtonsUI();
	handleMove();
});

// HANDLE CLEAR
resetBtnDom.addEventListener('click', () => {
	document.querySelectorAll('.pixel-8, .pixel-16, .pixel-32').forEach((p) => {
		p.style.backgroundColor = '';
	});
});

/* HANDLE COLOR PICKER */
colorPicker.addEventListener('change', (event) => {
	colorBlock.style.backgroundColor = event.target.value;
	pixelColor = event.target.value;
});

// START Etch-a-Sketch
function start() {
	updateButtonsUI();
	updatePixelsUI();
	handleMove();
}

start();
