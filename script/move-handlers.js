import { colorMode, pixelColor, moveMode } from './main.js';
import { hexToRgba, getRandomColor } from './utils.js';

const containerDom = document.querySelector('#container');

let isDragging = false;

// HANDLE MOVE
export function handleMove() {
	// HANDLE MOVE MODE - HOVER
	if (moveMode === 'hover') {
		containerDom.removeEventListener('mousedown', handleMousedown);

		document
			.querySelectorAll('.pixel-8, .pixel-16, .pixel-32')
			.forEach((pixel) => {
				pixel.addEventListener('mouseenter', handleMouseenter);
			});
	}

	// HANDLE MOVE MODE - DRAG
	if (moveMode === 'drag') {
		document
			.querySelectorAll('.pixel-8, .pixel-16, .pixel-32')
			.forEach((pixel) => {
				pixel.removeEventListener('mouseenter', handleMouseenter);
			});

		containerDom.addEventListener('mousedown', handleMousedown);
		containerDom.addEventListener('mousemove', handleMousemove);
		document.addEventListener('mouseup', handleMouseup);
	}
}

// EVENT HANDLERS
function handleMouseenter(event) {
	if (colorMode === 'single') {
		const originalBG = event.target.style.backgroundColor;
		let alpha = 0.1;

		if (originalBG !== '') {
			if (originalBG.length > 15) {
				const originalAlpha = Number(originalBG.slice(-4, -1));

				alpha = Math.round((originalAlpha + alpha) * 100) / 100;
				if (alpha > 1.0) {
					alpha = 1.0;
				}

				event.target.style.backgroundColor = hexToRgba(pixelColor, alpha);
			}
		} else {
			event.target.style.backgroundColor = hexToRgba(pixelColor, alpha);
		}
	} else if (colorMode === 'random') {
		event.target.style.backgroundColor = getRandomColor();
	}
}

function handleMousedown(event) {
	isDragging = true;

	const target = event.target;

	if (
		target.classList.contains('pixel-8') ||
		target.classList.contains('pixel-16') ||
		target.classList.contains('pixel-32')
	) {
		if (colorMode === 'single') {
			target.style.backgroundColor = pixelColor;
		} else if (colorMode === 'random') {
			target.style.backgroundColor = getRandomColor();
		}
	}
}

function handleMousemove(event) {
	if (isDragging) {
		const target = document.elementFromPoint(event.clientX, event.clientY);
		if (
			target &&
			(target.classList.contains('pixel-8') ||
				target.classList.contains('pixel-16') ||
				target.classList.contains('pixel-32'))
		) {
			if (colorMode === 'single') {
				target.style.backgroundColor = pixelColor;
			} else if (colorMode === 'random') {
				target.style.backgroundColor = getRandomColor();
			}
		}
	}
}

function handleMouseup() {
	isDragging = false;
}
