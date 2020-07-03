export const generatorID = function () {
	return '_' + Math.random().toString(36).substr(2, 9);
};

export const yyyy_mm_dd = function(date){
	return date.toISOString().substring(0, 10);
};