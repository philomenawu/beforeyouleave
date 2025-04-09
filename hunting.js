// Inside rooms
const gameData = {
    start: {
        description: `You arrive at the old hunting ground you and your fellow coworkers used to frequent. You haven't been back here since you quit the sport a few years ago,
        but you know the grounds are about 8 miles away from the village. You wonder how long you've been out for. Your feet are starting to get sore.`,
        commands: {
            'look': { output: `The hunting ground is a relatively flat clearing of land with gentle slopes. The trees are sparse and spread apart, making it easy
                to spot any wildlife. You and your crew would usually stalk the area when darkness falls, lurking on any sleeping animals. You notice
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
            'help': { output: `VALID COMMAND EXAMPLES: look, examine [item], go to [].<br>
                <i>HINT: Look around to search for clues and see what items can be interacted with.</i>`}
        }
    },
    camp: {
        description: `As you approach the fire, the lack of any signs of human activity or presence makes you feel uneasy. 
        You stop in your tracks a few feet away and crouch behind a shrub. The flames of the fire light up the sky. Embers spark and crackle.
        You can hear voices whispering, but you can barely make out the words.`,
        commands: {
            'look': { output: `Piles of chopped wood and rocks make up the campfire. The flames of the fire light of the sky. Embers spark and crackle as
                ashes float in the air. You don't see anyone around, but can hear voices whispering around the campfire.`,
            },
            'listen': { output: `You try listening harder to the conversation. It sounds like multiple voices layered and distorted on top of each other in
                a back and forth conversation.`,
                action: function () {
                  document.getElementById('topimg').src="art/tiger.png";
                }
            },
            'examine figure': { nextRoom: 'door', output: `You can barely make out the silhouette of the figure. What seems like hazy smoke fogs its features and distorts its mass.
                Yet you can't shake the feeling that it's someone you know. You wonder if it's a patient of yours who's recently passed away.`,
                action: function () {
                    document.getElementById('topimg').src="art/ghostclose.png";
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }
            }
        }
    },
    cave: {
        description: `The shutters of the window loudly clang against the side of the building.`,
        commands: {
            'look': { output: `Despite the dark, you can make out the rolling sea of mountains and the shimmering metal rooftops of houses below.`,
                action: function () {
                    document.getElementById('topimg').src="art/hospitalwindow.png";
                    setTimeout(() => {
                      document.querySelectorAll('#textoutput span').forEach(span => {
                          span.style.color = "white";
                      });
                  }, 0);
                  }
            }
        }
    }
}
 

window.onload = function() {
    const textOutput = document.getElementById('textoutput');
    if (textOutput) {
        textOutput.innerHTML += `<p>${gameData.start.description}</p>`;
    }
};