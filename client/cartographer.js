if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.header.helpers({
    zones: [
      { classic: {name: "Ak'Anon", who: "ohhh"}, 
        kunark:  {name: "Burning Woods", who: ""},
        velious: {name: "Cobalt Scar", who: ""}
      },
      { classic: {name: "Befallen", who: ""},
				kunark:  {name: "Cabilis (East)", who: ""},
				velious: {name: "Crystal Caverns", who: ""}
			},
      { classic: {name: "Blackburrow", who: ""},
				kunark:  {name: "Cabilis (West)", who: ""},
				velious: {name: "Dragon Necropolis", who: ""}
			},
      { classic: {name: "Butcherblock Mountains", who: ""},
				kunark:  {name: "Chardok", who: ""},
				velious: {name: "Eastern Wastes", who: ""}
			},
      { classic: {name: "Cazic-Thule", who: ""},
				kunark:  {name: "City of Mist", who: ""},
				velious: {name: "Iceclad Ocean", who: ""}
			},
      { classic: {name: "Commonlands (East)", who: ""},
				kunark:  {name: "Dalnir", who: ""},
				velious: {name: "Icewell Keep", who: ""}
			},
      { classic: {name: "Commonlands (West)", who: ""},
				kunark:  {name: "Dreadlands", who: ""},
				velious: {name: "Kael Drakkal", who: ""}
			},
      { classic: {name: "Crushbone", who: ""},
				kunark:  {name: "Emerald Jungle", who: ""},
				velious: {name: "Plane of Growth", who: ""}
			},
      { classic: {name: "Dagnor's Cauldron", who: ""},
				kunark:  {name: "Field of Bone", who: ""},
				velious: {name: "Plane of Mischief", who: ""}
			},
      { classic: {name: "Erud's Crossing", who: ""},
				kunark:  {name: "Firiona Vie", who: ""},
				velious: {name: "Siren's Grotto", who: ""}
			},
      { classic: {name: "Erudin", who: ""},
				kunark:  {name: "Frontier Mountains", who: ""},
				velious: {name: "Skyshrine", who: ""}
			},
      { classic: {name: "Erudin (Palace)", who: ""},
				kunark:  {name: "Howling Stones (Charasis)", who: ""},
				velious: {name: "Sleeper's Tomb", who: ""}
			},
      { classic: {name: "Everfrost", who: ""},
				kunark:  {name: "Kaesora", who: ""},
				velious: {name: "Temple of Veeshan", who: ""}
			},
      { classic: {name: "Feerrott", who: ""},
				kunark:  {name: "Karnor's Castle", who: ""},
				velious: {name: "The Great Divide", who: ""}
			},
      { classic: {name: "Felwithe (North)", who: ""},
				kunark:  {name: "Kurn's Tower", who: ""},
				velious: {name: "Thurgadin", who: ""}
			},
      { classic: {name: "Felwithe (South)", who: ""},
				kunark:  {name: "Lake of Ill Omen", who: ""},
				velious: {name: "Tower of Frozen Shadow", who: ""}
			},
      { classic: {name: "Freeport (North)", who: ""},
				kunark:  {name: "Overthere", who: ""},
				velious: {name: "Velketor's Labyrinth", who: ""}
			},
      { classic: {name: "Freeport (East)", who: ""},
				kunark:  {name: "Old Sebilis", who: ""},
				velious: {name: "Wakening Land", who: ""}
			},
      { classic: {name: "Freeport (West)", who: ""},
				kunark:  {name: "Mines of Nurga", who: ""},
				velious: {name: "Western Wastes", who: ""}
			},
      { classic: {name: "Greater Faydark", who: ""},
				kunark:  {name: "Skyfire Mountains", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Grobb", who: ""},
				kunark:  {name: "Swamp of No Hope", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Guk (Bottom)", who: ""},
				kunark:  {name: "Temple of Droga", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Guk (Top)", who: ""},
				kunark:  {name: "Timorous Deep", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Halas", who: ""},
				kunark:  {name: "Trakanon's Teeth", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Highpass Hold", who: ""},
				kunark:  {name: "Veeshan's Peak", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Highpass Keep", who: ""},
				kunark:  {name: "Warsliks Woods", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Innothule Swamp", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kaladim (North)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kaladim (South)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Karana (East)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Karana (North)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Karana (South)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Karana (West)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kedge Keep", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kerra Island", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kithicor Woods", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Lake Rathetear", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Lavastorm Mountains", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Lesser Faydark", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Mistmoore Castle", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Misty Thicket", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Nagafen's Lair (Sol B)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Najena", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Nektulos", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Neriak (Commons)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Neriak (Foreign Quarter)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Neriak (Third Gate)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Northern Desert of Ro", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Oasis of Marr", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Oggok", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Ocean of Tears", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Paineel", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Permafrost", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Plane of Fear", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Plane of Hate", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Plane of Sky", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Qeynos (North)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Qeynos (South)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Qeynos Aqueducts", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Qeynos Hills", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Rathe Mountains", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Rivervale", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Runnyeye Citadel", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Solusek's Eye (Sol A)", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Southern Desert of Ro", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Steamfont Mountains", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "The Estate of Unrest", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "The Hole", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "The Temple of Solusek Ro", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Toxxulia Forest", who: ""},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
      }]
  });
  Template.content.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.content.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
