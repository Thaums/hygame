import * as mathops from "https://thaums.github.io/hygame/modules/useful_math.js";
import map from "https://thaums.github.io/hygame/modules/map.js";
import * as drawops from "https://thaums.github.io/hygame/modules/draw.js";
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.FILTER_RESOLUTION = 4;
PIXI.settings.RESOLUTION = 1;
var myView = document.getElementById('canvas');
const rendererDimensions = [256,195]
let app = new PIXI.Application({width:rendererDimensions[0], height:rendererDimensions[1], view:myCanvas, backgroundColor:0x74adbb});
document.body.appendChild(app.view);

const loader = new PIXI.Loader;
loader
	.add('https://thaums.github.io/hygame/assets/images/tilesets/water.json')
	.add('https://thaums.github.io/hygame/assets/images/misc/displacement_map1.png')
	.load(main);
//loader.shared.resources['assets/images/tilesets/water.json'].baseTexture.mipmap=false;


let m = new map('testing map');

let state;
let water_array;
let displ,displ2;
function main() {
	
	displ = new PIXI.Sprite(
		loader.resources['https://thaums.github.io/hygame/assets/images/misc/displacement_map1.png'].texture
	);
	displ2 = new PIXI.Sprite(
		loader.resources['https://thaums.github.io/hygame/assets/images/misc/displacement_map1.png'].texture
	);
	displ.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
	displ2.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
	
	water_array = drawops.create_water(loader.resources['https://thaums.github.io/hygame/assets/images/tilesets/water.json'],displ,displ2,app.view.width,app.view.height);
	//loader.reset();
	app.stage.addChild(water_array[0]);
	app.stage.addChild(water_array[1]);
	app.stage.addChild(displ);
	app.stage.addChild(displ2);
	//app.stage.addChild(water_array[2]);
	console.log(m.num);
	m.printName();
	/*
	var graphics = new PIXI.Graphics();

	graphics.beginFill(0xFFFF00);

	// set the line style to have a width of 5 and set the color to red
	graphics.lineStyle(5, 0xFF0000);

	// draw an ellipse
	graphics.drawEllipse(0, 0, 30, 30);
	
	app.stage.addChild(graphics);
	*/
	
	
	state = play;
	app.ticker.add(delta => gameLoop(delta));
	
}

function gameLoop(delta) {
	state(delta);
}
let velocity = 0;
const amo = 0.4;
function play(delta) {
	water_array[0].tilePosition.set(velocity*0.75,-velocity*0.75);
	water_array[1].tilePosition.set(velocity*1.5,-velocity*1.5);
	velocity+=0.05;
	displ.y-=amo;
	displ.x+=amo;
	displ2.y-=amo*0.75;
	displ2.x+=amo*0.75;
}