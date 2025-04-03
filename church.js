// Inside rooms
const gameData = {
    start: {
        description: `You arrive at your church, St. Lawrence. It's a small wooden cathedral built on top of the mountain by visiting British missionaries some decades ago. 
        Despite being a Buddhist country, almost everyone in the village are practicing Christians...you often hear talk of it being the reason why the government 
        offers so little aid- essentially abandoning the village.`,
        commands: {
            'look': { output: `The cathedral is made of wooden logs cut down from the towering trees of the surrounding forests. 
            Tall glass windows reflect the night sky. A cross sits on top of the bell tower.`},
            'examine church': { output: `The cathedral is made of wooden logs cut down from the towering trees of the surrounding forests. 
                Tall glass windows reflect the night sky. A cross sits on top of the bell tower. The sound of bells clanging and echoing across the mountains every
                Sunday at noon has been engrained in your brain.`},
            'enter church': { nextRoom: 'nave', output: `You walk up the steps of the church and enter inside.`,
                action: function () {
                  document.getElementById('topimg').src="art/churchinside.png";
                  document.getElementById('prompt').style.color="white";
                  document.body.style.backgroundColor = "rgb(37, 74, 194)";
                  document.body.style.color = "white";
                  setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
                }
            },
            'help': { output: `VALID COMMAND EXAMPLES: look, examine [item], go to [].<br>
                <i>HINT: Look around to search for clues and see what items can be interacted with.</i>`}
        }
    },
    nave: {
        description: `You find yourself staring down the long aisle of the nave. Rows of carved wooden <span style="font-weight: bold;"> PEWS </span> run down on either side of you leading up to the sancutary. 
        A blur of white catches the corner of your eye. As you squint, you make out the faint smoky silhouette of the <span style="font-weight: bold;"> GHOST </span> seated at the front
        near the altar.`,
        commands: {
            'look': { output: `Rows of wooden  <span style="font-weight: bold;"> PEWS </span> run down both side of the nave with a rather narrow aisle in the center leading up to the 
                sanctuary. Soft light from outside seeps through the many glass windows, illuminating the altar and the large cross that hangs above.
                You notice the smoky figure of the ghost seated in the very front row. A stand of voltive prayer <span style="font-weight: bold;"> CANDLES </span> are at the back of the room.
                <i>You think about offering a prayer to the strange visitor</i>.`,
            action: function() {
                setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
            }},
            'examine ghost': { output: `You can't clearly make out the ghost from this distance.`,
                action: function () {
                  document.getElementById('topimg').src="art/churchghost.png";
                  setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
                }
            },
            'examine pews': { nextRoom: 'pew', output: `You walk down the aisle and genuflect before taking a seat on one of the pews.`,
                action: function() {
                    document.getElementById('topimg').src="art/pew.png";
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }
            },
            'go to pew': { nextRoom: 'pew', output: `You walk down the aisle and genuflect before taking a seat on one of the pews.`,
                action: function() {
                    document.getElementById('topimg').src="art/pew.png";
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }
            },
            'examine candles': { nextRoom: 'candles', output: `You walk over to the candles.`,
                action: function () {
                    document.getElementById('topimg').src="art/candles.png"
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }
            }
        }
    },
    candles: {
        description: `Piles of ash and wax surround the bottom of the unlit candles. A box of matchsticks is neatly tucked away on the side of the stand. The sharp scent of
        incense fills your nostrils.`,
        commands: {
        'look': {output: `Piles of ash and wax surround the bottom of the unlit candles. A box of matchsticks is neatly tucked away on the side of the stand.`,
            action: function() {
                setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
            }
        },
        'light candle': {output: `You shake out a matchstick and strike it against the side of the matchbox before carefully lighting a candle.`,
            action: function () {
                document.getElementById('topimg').src="art/litcandle.png";
                gameData.pew.commands['pray'].output = `You clasp your hands together and close your eyes in prayer...You wish for the safe passage of
                this lost soul...`
                gameData.pew.commands['pray'].action = function () {
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                    document.getElementById('topimg').src="";
                }
                // gameData.pew.commands['pray'].action = function () {
                //     window.location.href = 'prompt4.html';
                // }
                setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
              }
        },
        'go to pew': {nextRoom: 'pew', output: `You walk down the aisle and genuflect before taking a seat on one of the pews.`,
            action: function () {
                document.getElementById('topimg').src="art/pew.png";
                setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
              }
        }
    }},
    pew: {
        description: `You can see the altar. `,
        commands: {
            'look': {output: ``,
                action: function() {
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }
            },
            'pray': {output: `You should light up a candle before you offer a prayer.`,
                action: function () {
                setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
            }
            },
            'examine ghost': {output: ``,
                action: function () {
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }
            },
            'go to candles': {nextRoom: 'candles', output: 'You get back up and walk to the candles at the back of the room.',
                action: function () {
                    document.getElementById('topimg').src="art/candles.png",
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }
             },
             'open eyes': {output: `You open your eyes and almost jump from your seat. The ghost is right in front of you. The outline spirit is now
                much clearer and seems to have shrunk in size, standing at almost your own height. It remains silent and unwavering. Before you can
                move, it slips back out of the building...`, action: function () {
                    document.getElementById('topimg').src="art/churchghostclose.png",
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }},
            'leave church': {action: function() {
                window.location.href = 'prompt4.html';
            }}
        }
    }
};

window.onload = function() {
    const textOutput = document.getElementById('textoutput'); // Adjust to match your actual output area ID
    if (textOutput) {
        textOutput.innerHTML += `<p>${gameData.start.description}</p>`;
    }
};