import * as mathops from "https://thaums.github.io/hygame/modules/usefulmath.js";

export function tilesetArray(tileset) {
	let result = [];
	for (let i = 0; i < (tileset.height/16); i++) {
		for (let j = 0; j < (tileset.width/16); j++) {
			
		}
	}
}


export default class map {
	constructor(name) {
		this.name = name;
		this.num = mathops.intRNG(3,5);
		//this.data = data;
		//this.height = height;
		//this.width = width;
	}
	printName() {
		console.log('This map has been assigned a name of '+this.name+'.');
	}
}