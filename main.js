import "./style.css"

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

