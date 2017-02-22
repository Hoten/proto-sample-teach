(function() {
  'use strict';

  var actors = [];
  var $actors = $('#actors');
  var $poop = $('#poop');

  function addActor(actor, actorClass) {
    actors.push(actor);
    var $actor = $('<div>').addClass('fa ' + actorClass);
    actor.$element = $actor;
    $actors.append($('<li>').append($actor));
  }

  $('#add-cat').click(function() {
    addActor(new Cat(), 'fa-paw cat');
  });

  $('#add-dog').click(function() {
    addActor(new Dog(), 'fa-paw dog');
  });

  $('#add-cleaner').click(function() {
    addActor(new RobotCleaner(), 'fa-android cleaner');
  });

  $('#add-killer').click(function() {
    addActor(new RobotKiller(), 'fa-android killer');
  });

  $('#add-robot-dog').click(function() {
    addActor(new RobotDog(), 'fa-paw');
  });

  function setNoiseText(actor, noiseText) {
    actor.$element.text(noiseText);
  }

  setInterval(function() {
    actors.forEach(function(actor) {
      if (actor.bark) {
        var chance = Math.random();

        if (chance > 0.95) {
          setNoiseText(actor, actor.bark());
        } else if (chance > 0.9) {
          setNoiseText(actor, '');
        }
      }

      if (actor.meow) {
        var chance = Math.random();

        if (chance > 0.95) {
          setNoiseText(actor, actor.meow());
        } else if (chance > 0.9) {
          setNoiseText(actor, '');
        }
      }

      if (actor.poop) {
        var chance = Math.random();

        if (chance > 0.95) {
          $poop.append($('<div>').text(actor.poop()));
        }
      }

      if (actor.drive && actor.drive()) {
        actor.$element.animate({ 'margin-left': '50px'}, 500, function(e) {
          actor.$element.animate({ 'margin-left': '0px' }, 500)
        });
      }

      if (actor.clean) {
        var chance = Math.random();

        if (chance > 0.9) {
          $poop.find('div').last().remove();
        }
      }

      if (actor.kill) {
        var chance = Math.random();

        if (chance > 0.95) {
          var anAnimal = actors.find(function(actor) {
            return actor.$element.hasClass('fa-paw');
          });

          if (anAnimal) {
            actors.splice(actors.indexOf(anAnimal), 1);
            anAnimal.$element.remove();
          }
        }
      }
    });
  }, 250);
})();
