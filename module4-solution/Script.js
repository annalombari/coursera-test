
(function () {

var names = ["Anna", "John", "Jen", "Jason", "Rob", "Frank", "Mark", "Paula", "Jack", "Simon"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



