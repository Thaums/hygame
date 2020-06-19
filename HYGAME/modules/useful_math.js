export function intRNG(min, max) {
	return Math.floor(Math.random()*(max-min+1))+min;
}

export function intDIV(dividend, divisor) {
	return Math.floor(dividend/divisor);
}