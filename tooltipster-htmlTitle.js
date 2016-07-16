/**
 * tooltipster-htmlTitle v1.0.0
 * https://github.com/louisameline/tooltipster-htmlTitle/
 * Developed by Louis Ameline
 * MIT license
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module unless amdModuleId is set
		define(['tooltipster'], function ($) {
			return (factory($));
		});
	}
	else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory(require('tooltipster'));
	}
	else {
		factory(jQuery);
	}
}(this, function($) {
	
	var pluginName = 'laa.htmlTitle';
	
	$.tooltipster._plugin({
		name: pluginName,
		core: {
			__init: function() {
				
				// auto-activation of the plugin on the instance
				$.tooltipster._on('init', function(event) {
					event.instance._plug(pluginName);
				});
			}
		},
		instance: {
			__init: function(instance){
				
				var scope = instance.option('htmlTitleScope') || $('body'),
					sel = $(instance.elementOrigin()).attr('data-htmltitle');
				
				if (sel) {
					
					var $el = $(sel, scope);
					
					if ($el.length) {
						instance.content($el.first());
					}
				}
			}
		}
	});
	
	return $;
}));
