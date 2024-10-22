// CREATE RANGE
export function createRange(num) {
	return Array.from({ length: num }, (_, index) => index);
}

// GET RANDOM INT
function getRandomInt(start, end) {
	return Math.floor(Math.random() * (end - start)) + start;
}

// GET RANDOM COLOR
export function getRandomColor() {
	const red = getRandomInt(0, 255);
	const green = getRandomInt(0, 255);
	const blue = getRandomInt(0, 255);

	return `rgb(${red}, ${green}, ${blue})`;
}

// COLOR FROM HEX TO RGBA
export function hexToRgba(hex, opacity = 1) {
	// Remove '#' if present
	hex = hex.replace('#', '');

	// Expand shorthand hex
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map((char) => char + char)
			.join('');
	}

	// Convert hex to RGB
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// Return RGBA string
	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Max width of the canvas
export const MAX_WIDTH = 480;
