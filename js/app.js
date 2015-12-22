"use strict";


var myapp = new senna.App();
myapp.setBasePath('/');
myapp.addSurfaces('container');
myapp.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));
senna.Screen.prototype.load = function() {
	
};


var app = {
	config: {
		url:"https://smp.ovh",
		target:"#main"
	},
	init : function(){
		this.makeTpl();
	},
	makeTpl: function(){
		var tpl = "<p>{{msg}}</p>";
		var output = Mustache.render(tpl, {msg : "Coucous les simploniens !"});
		$("#main").html(output);
	}
};

$(document).ready(function(){
	app.init();

});


