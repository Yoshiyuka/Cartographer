Meteor.startup(function () {
    // code to run on server at startup
	zones.insert({ name: "Butcherblock Mountains", map: butcher});
	zones.insert({ name: "Blackburrow", map: blackburrow});
    zones.insert({ name: "Plane of Air", map: airplane});

    Meteor.publish("zonemaps", function(){
    	return zones.find({});
    });
});