Meteor.startup(function () {
    // code to run on server at startup
	zones.insert({ name: "butcher", map: butcher});
	zones.insert({ name: "blackburrow", map: blackburrow});
    zones.insert({ name: "airplane", map: airplane});

    Meteor.publish("zonemaps", function(){
    	return zones.find({});
    });
});