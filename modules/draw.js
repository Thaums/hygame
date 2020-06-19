
// water_json = loader.shared.resources[filepath]
export function create_water(water_json, displ, displ2, width, height) {
	let sheet = water_json.spritesheet;
	sheet.textures["water1"].baseTexture.mipmap=false;
	sheet.textures["water2"].baseTexture.mipmap=false;
	let s1 = new PIXI.TilingSprite(
		sheet.textures["water1"],
		width,
		height
	);
	let s2 = new PIXI.TilingSprite(
		sheet.textures["water2"],
		width,
		height
	);
	let fil = new PIXI.filters.DisplacementFilter(displ,20);
	let fil2 = new PIXI.filters.DisplacementFilter(displ2,20);
	s1.filters = [fil2];
	s2.filters = [fil];
	return [s1,s2];
}