if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.header.helpers({
    zones: [
      { classic: "Ak'Anon", kunark: "Burning Woods", velious: ""},
      { classic: "Befallen", kunark: "Cabilis (East)", velious: ""},
      { classic: "Blackburrow", kunark: "Cabilis (West)", velious: ""},
      { classic: "Butcherblock Mountains", kunark: "Dreadlands", velious: ""},
      { classic: "Cazic-Thule", kunark: "Emerald Jungle", velious: ""},
      { classic: "Commonlands (East)", kunark: "Field of Bone", velious: ""},
      { classic: "Commonlands (West)", kunark: "Firiona Vie", velious: ""},
      { classic: "Crushbone", kunark: "Frontier Mountains", velious: ""},
      { classic: "Dagnor's Cauldron", kunark: "Kaesora", velious: ""},
      { classic: "Erud's Crossing", kunark: "Karnor's Castle", velious: ""},
      { classic: "Erudin", kunark: "Kurn's Tower", velious: ""},
      { classic: "Erudin (Palace)", kunark: "Lake of Ill Omen", velious: ""},
      { classic: "Everfrost", kunark: "Overthere", velious: ""},
      { classic: "Feerrott", kunark: "Skyfire Mountains", velious: ""},
      { classic: "Felwithe (North)", kunark: "Swamp of No Hope", velious: ""},
      { classic: "Felwithe (South)", kunark: "Timorous Deep", velious: ""},
      { classic: "Freeport (North)", kunark: "Trakanon's Teeth", velious: ""},
      { classic: "Freeport (East)", kunark: "Warsliks Woods", velious: ""},
      { classic: "Freeport (West)", kunark: "", velious: ""},
      { classic: "Greater Faydark", kunark: "", velious: ""},
      { classic: "Grobb", kunark: "", velious: ""},
      { classic: "Guk (Bottom)", kunark: "", velious: ""},
      { classic: "Guk (Top)", kunark: "", velious: ""},
      { classic: "Halas", kunark: "", velious: ""},
      { classic: "Highpass Hold", kunark: "", velious: ""},
      { classic: "Highpass Keep", kunark: "", velious: ""},
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
