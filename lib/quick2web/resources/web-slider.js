$(function() {
	var sliderControl = new Array();
	$('input[data-type="range"]').each(function(i, el) {
		sliderControl[i] = $(el);
		var sharedPath = sliderControl[i].data('shared');
		var path;
		if (sharedPath) {
			if(i==0){
				path='/volume-value';
			}else if(i==1){
				path='/tone-value';
			}else if(i==2){
				path='/sustain-value';
			}
			var sliderValue = new SharedValue(path)
				.open(function() {
					sliderControl[i].slider('enable');
				})
				.close(function() {
					sliderControl[i].slider('disable');
				})
				.change(function(event, value) {
					sliderControl[i].val(value).slider('refresh')
				});
			
			sliderControl[i].change(function(event, element) {
				sliderValue.set(sliderControl[i].val());
			});
		}
	});
});