import "./style.css"

function make2DArray(cols, rows) {
	let arr = new Array(cols)
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows)
		for (let j = 0; j < arr[i].length; j++) {
			arr[i][j] = 0
		}
	}
	return arr
}

let grid
let velocityGrid

let w = 5
let cols, rows
let hueValue = 200

let gravity = 0.1

function withInCols(i) {
	return i >= 0 && i <= cols - 1
}

function withInRows(j) {
	return j >= 0 && j <= rows - 1
}

function setup() {
	createCanvas(800, 800)
	colorMode(HSB, 360, 255, 255)
	cols = width / w
	rows = height / w
	grid = make2DArray(cols, rows)
	velocityGrid = make2DArray(cols, rows, 1)
}

function mouseDragged() {}