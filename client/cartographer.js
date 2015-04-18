if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.header.helpers({
    zones: [
      { classic: "Ak'Anon", kunark: "Burning Woods", velious: "Cobalt Scar"},
      { classic: "Befallen", kunark: "Cabilis (East)", velious: "Crystal Caverns"},
      { classic: "Blackburrow", kunark: "Cabilis (West)", velious: "Dragon Necropolis"},
      { classic: "Butcherblock Mountains", kunark: "Chardok", velious: "Eastern Wastes"},
      { classic: "Cazic-Thule", kunark: "City of Mist", velious: "Iceclad Ocean"},
      { classic: "Commonlands (East)", kunark: "Dalnir", velious: "Icewell Keep"},
      { classic: "Commonlands (West)", kunark: "Dreadlands", velious: "Kael Drakkal"},
      { classic: "Crushbone", kunark: "Emerald Jungle", velious: "Plane of Growth"},
      { classic: "Dagnor's Cauldron", kunark: "Field of Bone", velious: "Plane of Mischief"},
      { classic: "Erud's Crossing", kunark: "Firiona Vie", velious: "Siren's Grotto"},
      { classic: "Erudin", kunark: "Frontier Mountains", velious: "Skyshrine"},
      { classic: "Erudin (Palace)", kunark: "Howling Stones (Charasis)", velious: "Sleeper's Tomb"},
      { classic: "Everfrost", kunark: "Kaesora", velious: "Temple of Veeshan"},
      { classic: "Feerrott", kunark: "Karnor's Castle", velious: "The Great Divide"},
      { classic: "Felwithe (North)", kunark: "Kurn's Tower", velious: "Thurgadin"},
      { classic: "Felwithe (South)", kunark: "Lake of Ill Omen", velious: "Tower of Frozen Shadow"},
      { classic: "Freeport (North)", kunark: "Overthere", velious: "Velketor's Labyrinth"},
      { classic: "Freeport (East)", kunark: "Old Sebilis", velious: "Wakening Land"},
      { classic: "Freeport (West)", kunark: "Mines of Nurga", velious: "Western Wastes"},
      { classic: "Greater Faydark", kunark: "Skyfire Mountains", velious: ""},
      { classic: "Grobb", kunark: "Swamp of No Hope", velious: ""},
      { classic: "Guk (Bottom)", kunark: "Temple of Droga", velious: ""},
      { classic: "Guk (Top)", kunark: "Timorous Deep", velious: ""},
      { classic: "Halas", kunark: "Trakanon's Teeth", velious: ""},
      { classic: "Highpass Hold", kunark: "Veeshan's Peak", velious: ""},
      { classic: "Highpass Keep", kunark: "Warsliks Woods", velious: ""},
      { classic: "Innothule Swamp", kunark: "", velious: ""},
      { classic: "Kaladim (North)", kunark: "", velious: ""},
      { classic: "Kaladim (South)", kunark: "", velious: ""},
      { classic: "Karana (East)", kunark: "", velious: ""},
      { classic: "Karana (North)", kunark: "", velious: ""},
      { classic: "Karana (South)", kunark: "", velious: ""},
      { classic: "Karana (West)", kunark: "", velious: ""},
      { classic: "Kedge Keep", kunark: "", velious: ""},
      { classic: "Kerra Island", kunark: "", velious: ""},
      { classic: "Kithicor Woods", kunark: "", velious: ""},
      { classic: "Lake Rathetear", kunark: "", velious: ""},
      { classic: "Lavastorm Mountains", kunark: "", velious: ""},
      { classic: "Lesser Faydark", kunark: "", velious: ""},
      { classic: "Mistmoore Castle", kunark: "", velious: ""},
      { classic: "Misty Thicket", kunark: "", velious: ""},
      { classic: "Nagafen's Lair (Sol B)", kunark: "", velious: ""},
      { classic: "Najena", kunark: "", velious: ""},
      { classic: "Nektulos", kunark: "", velious: ""},
      { classic: "Neriak (Commons)", kunark: "", velious: ""},
      { classic: "Neriak (Foreign Quarter)", kunark: "", velious: ""},
      { classic: "Neriak (Third Gate)", kunark: "", velious: ""},
      { classic: "Northern Desert of Ro", kunark: "", velious: ""},
      { classic: "Oasis of Marr", kunark: "", velious: ""},
      { classic: "Oggok", kunark: "", velious: ""},
      { classic: "Ocean of Tears", kunark: "", velious: ""},
      { classic: "Paineel", kunark: "", velious: ""},
      { classic: "Permafrost", kunark: "", velious: ""},
      { classic: "Plane of Fear", kunark: "", velious: ""},
      { classic: "Plane of Hate", kunark: "", velious: ""},
      { classic: "Plane of Sky", kunark: "", velious: ""},
      { classic: "Qeynos (North)", kunark: "", velious: ""},
      { classic: "Qeynos (South)", kunark: "", velious: ""},
      { classic: "Qeynos Aqueducts", kunark: "", velious: ""},
      { classic: "Qeynos Hills", kunark: "", velious: ""},
      { classic: "Rathe Mountains", kunark: "", velious: ""},
      { classic: "Rivervale", kunark: "", velious: ""},
      { classic: "Runnyeye Citadel", kunark: "", velious: ""},
      { classic: "Solusek's Eye (Sol A)", kunark: "", velious: ""},
      { classic: "Southern Desert of Ro", kunark: "", velious: ""},
      { classic: "Steamfont Mountains", kunark: "", velious: ""},
      { classic: "The Estate of Unrest", kunark: "", velious: ""},
      { classic: "The Temple of Solusek Ro", kunark: "", velious: ""},
      { classic: "Toxxulia Forest", kunark: "", velious: ""}]
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
