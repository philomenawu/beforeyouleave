// Inside rooms
const gameData = {
    start: {
        description: `You arrive at the old hunting ground you and your fellow coworkers used to frequent. You haven't been back here since you quit the sport a few years ago,
        but you know the grounds are about 8 miles away from the village. You wonder how long you've been out for. Your feet are starting to get sore.`,
        commands: {
            'look': { output: `The hunting ground is a relatively flat clearing of land with gentle slopes. The trees are sparse and spread apart, making it easy
                to spot any wildlife. You and your crew would usually stalk the area when darkness fell, lurking on any sleeping animals. You notice
                a small CAVE den in the distance and what seems to be smoke billowing from a nearby CAMPFIRE.`},
            'go to campfire': { nextRoom: 'camp', output: `You walk over to the campfire.`,
                action: function () {
                  document.getElementById('topimg').src="art/fire.png";
                }
            },
            'go to cave': {nextRoom: 'cave', output: `You quietly walk over to the den and take a peek inside.`,
                action: function () {
                    document.getElementById('topimg').src="art/tiger.png";
                  }
            },
            'help': { output: `VALID COMMANDS: look, go to campfire, go to cave`}
        }
    },
    camp: {
        description: `As you approach the fire, the lack of any signs of human activity or presence makes you feel uneasy. 
        You stop in your tracks a few feet away and crouch behind a shrub. The flames of the fire light up the sky. Embers spark and crackle.
        You can hear voices whispering, but you can barely make out the words. You notice smaller spirits circling around the fire.`,
        commands: {
            'look': { output: `Piles of chopped wood and rocks make up the campfire. The flames of the fire light of the sky. Embers spark and crackle as
                ashes float in the air. You don't see anyone around, but can hear voices whispering around the campfire. You notice smaller spirits
                circling around the fire`,
            },
            'listen': { output: `You try listening harder to the conversation. It sounds like multiple voices layered and distorted on top of each other in
                a back and forth conversation.`,
                action: function () {
                  document.getElementById('topimg').src="art/";
                }
            },
            'get closer': { output: `As you get closer, the voices become clearer- <br>
                <i>ak kui</i>...<br>
                Suddenly, you hear your name being uttered.<br>
                The voices sound eerily like your children calling out to you. Growing up in the mountains, you were always told to never
                say your name outloud,for spirits can steal voices and lure you into another world. <br>You stand still and stay quiet.`},
            'examine ghost': { output: `The flames crackle and wildly dance with the breeze, taking the shape of the ghost you've been following.
                Except now it's even smaller, appearing as a young child, dancing wild and freely with the wind but chained to the charcoal and wood
                that keeps it alive. You can't help but feel sorry.`},
            'help': { output: `VALID COMMANDS: look, listen, get closer, examine ghost, go to cave`}
        }
    },
    cave: {
        description: `You turn off your flashlight in order to not scare whatever is inside the cave. You can make out a large mass and are taken aback
        once you realize it's a tiger.`,
        commands: {
            'look': { output: `Despite the dark, you can make out the rolling sea of mountains and the shimmering metal rooftops of houses below.`}
        }
    }
}
 

window.onload = function() {
    const textOutput = document.getElementById('textoutput');
    if (textOutput) {
        textOutput.innerHTML += `<p>${gameData.start.description}</p>`;
    }
};