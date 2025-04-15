// Inside rooms
const gameData = {
    start: {
        description: `You arrive at the old hunting ground you and your fellow coworkers used to frequent. You haven't been back here since you quit the sport a few years ago,
        but you know the grounds are about 8 miles away from the main village. You wonder how long you've been wandering the mountains for. Your back and feet are starting to get sore.
        You notice a small <strong>CAVE</strong> in the distance and what seems to be smoke billowing from a nearby <strong>CAMPFIRE</strong>.`,
        commands: {
            'look': { output: `The hunting ground is a relatively flat clearing of land with gentle slopes. The trees are sparse and far apart, making it easy
                to spot any wildlife (but for wildlife to spot you as well). Dry <strong>TWIGS</strong> cover your path. You watch your steps as to not make any loud, sudden noises.
                You and your crew would usually stalk the area when darkness fell, lurking on any sleeping animals. You notice
                a small <strong>CAVE</strong> in the distance and what seems to be smoke billowing from a nearby <strong>CAMPFIRE</strong>.`},
            'examine twigs': { output: `Dry <strong>TWIGS</strong> cover the ground.`,
                action: function() {
                    document.getElementById('topimg').src="art/twigs.png";
                }
            },
            'pick up twigs': { output: `You crouch down and collect a few of the dry twigs and branches, shoving them in your pockets.`,
                action: function() {
                    document.getElementById('topimg').src="art/twigs.png";
                    gameData.camp.commands['feed fire'].action = function() {
                        document.getElementById('topimg').src = "art/fire.png";
                        gameData.camp.commands['feed fire'].output = `You toss the dry twigs into the fire and quickly blow air to fan it, bringing the fire back to life. You can
                    feel the heat pricking at your face. The voices become clearer...<i>you should get closer</i>`;
                    };
                }
            },
            'go to campfire': { nextRoom: 'camp', output: `You walk over to the campfire.`,
                action: function () {
                  document.getElementById('topimg').src="art/smallfire.png";
                }
            },
            'go to cave': {nextRoom: 'cave', output: `You quietly walk over to the den and take a peek inside.`,
                action: function () {
                    document.getElementById('topimg').src="art/tiger.png";
                  }
            },
            'help': { output: `VALID COMMANDS: look, pick up twigs, go to campfire, go to cave`}
        }
    },
    camp: {
        description: `You look around, and as you approach the <strong>FIRE</strong>, you begin to feel uneasy from the lack of any signs of activity or human presence. 
        You stop in your tracks a few feet away and crouch behind a shrub. The dying flames light up the sky. Embers spark and crackle.
        The fire is almost out. You aren't sure if you're tired mind is playing tricks on you, but you can hear what seems to be voices 
        whispering...you can barely make out the words let alone notice anyone around. You can see a small <strong> dark
        CAVE</strong> in the distance.`,
        commands: {
            'look': { output: `Piles of chopped wood, twigs, branches, and rocks make up the campfire. Whispy smoke rise into the sky. Embers spark and crackle as
                ashes float into the air. You don't see anyone around, but can hear what sounds to be multiple voices whispering around the campfire. 
                You should try to <i>listen</i>.`,
            },
            'listen': { output: `You close your eyes and try listening to the conversation. It sounds like multiple voices layered and distorted on top of each other in
                a back and forth conversation.`,
            },
            'feed fire': { output: `You have nothing to feed the flames. <i>You should pick up some of the dry twigs back at the</i> <strong>CLEARING</strong>.`,
                action: function() {
                document.getElementById('topimg').src = "art/fire.png";
                gameData.camp.commands['examine fire'].action = function() {
                    document.getElementById('topimg').src = "art/fireghost.png";
                    gameData.camp.commands['examine fire'].output = `The flames crackle and wildly dance with the breeze, taking the shape of the ghost you've been following.
                Except now it's even smaller, appearing as a young child, dancing wild and freely with the wind but chained to the charcoal and wood
                that keeps it alive.`;
                    gameData.camp.commands['examine fire'].nextRoom = "ghost";
                };
                }
            },
            'get closer': { output: `You lean in towards the flame, careful to not get burned...<br><br>
                <i>ak kui</i>...<br><br>
                Suddenly, you hear your name being uttered.<br><br>
                The voices sound eerily like your children calling out to you. Growing up in the mountains, you were always told to never
                say your name outloud, for spirits can steal voices and lure you into another world. <br><br>You stand still and stay quiet.<br><br>
                <i>You should examine the fire</i>.`},
            'examine fire': { output: `A small flame flickers as the summer breeze threatens to blow it out.`},
            'go to cave': {nextRoom: 'cave', output: `You quietly make your way over to the den and take a peek inside.`,
                action: function () {
                    document.getElementById('topimg').src="art/tiger.png";
                    }
            },
            'go to clearing': {nextRoom: 'start', output: `You walk back over to the large clearing.`,
                action: function() {
                    document.getElementById('topimg').src="art/hunting.png";
                }
            },
            'help': { output: `VALID COMMANDS: look, listen, feed fire, get closer, examine fire, go to cave, go to clearing`}
        }
    },
    cave: {
        description: `You turn off your flashlight in case there's an animal inside the cave. You're taken aback by the sleeping <strong>TIGER</strong> inside.
        You can see smoke coming from the <strong>CAMPFIRE</strong> in the distance.`,
        commands: {
            'look': { output: `There's a sleeping tiger in the cave.`},
            'examine tiger': { output: `Despite the dark, you can see the tiger's body moving up and down with each breath. You can still recall the day
                you hunted your first and only one down. The softness of its fur and the weight of its body as you and your friends carried it back to the village; 
                the whole village had a celebatory feast that night. The last roar of a mighty beast. You look down at your wrinkled hands and feel a pang of guilt. 
                You let the tiger sleep.`},
            'go to campfire': { nextRoom: 'camp', output: `You walk over to the campfire.`,
                action: function () {
                  document.getElementById('topimg').src="art/smallfire.png";
                }
            },
            'help': { output: `VALID COMMANDS: look, examine tiger, go to campfire`}
        }
    },
    ghost: {
        description: ``,
        commands: {
            'help': { output: `VALID COMMANDS: look, examine ghost, touch ghost, leave hunting ground`}
        }
    }
}
 

window.onload = function() {
    const textOutput = document.getElementById('textoutput');
    if (textOutput) {
        textOutput.innerHTML += `<p>${gameData.start.description}</p>`;
    }
};