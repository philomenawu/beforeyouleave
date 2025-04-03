// Inside rooms
const gameData = {
    start: {
        description: `You arrive at the hospital. It's a rather small building and about a 30 minute walk up the mountain from your house.
        After back and forth negotiations with government officials over several months, you still take pride in finally having convinced them to approve its construction.
        You should <i>enter</i> the hospital to investigate the strange call.`,
        commands: {
            'look': { output: `The building is long and narrow. Overgrown thickets crawl up the sides of the building and cover the hospital sign. The place is illuminated
                only by your flashlight and the moon. <i> You should go inside and check if anything is off... </i>`},
            'enter hospital': { nextRoom: 'corridor', output: `You walk up to the entrance and step inside the hospital, finding yourself in the 
                <span style="font-weight: bold;">CORRIDOR</span>.`,
                action: function () {
                  document.getElementById('topimg').src="art/beds.png";
                  document.getElementById('prompt').style.color="white";
                  document.getElementById('userinput').style.color="white";
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
    corridor: {
        description: `Empty hospital beds line the hallway. The most recent patient was discharged earlier that afternoon. 
        You wonder where the nightshift nurses are...and who rang you. It's eerily quiet other than the ticking of
        the clock and crickets outside. You notice one of the <span style="font-weight: bold;"> WINDOWS </span> was left open.
        The shutters noisly hit against the side of the wall from the strong winds outside.`,
        commands: {
            'look': { output: `Empty hospital beds line the corridor. One of the<span style="font-weight: bold;"> WINDOWS </span> is open.`,
                action: function () {
                    setTimeout(() => {
                      document.querySelectorAll('#textoutput span').forEach(span => {
                          span.style.color = "white";
                          document.getElementById('userinput').style.color="white";
                      });
                  }, 0);
                  }
            },
            'examine windows': { nextRoom: 'window', output: `You move to the open <span style="font-weight: bold;">WINDOW</span>.`,
                action: function () {
                  document.getElementById('topimg').src="art/hospitalwindow.png";
                  setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
                }
            },
            'examine ghost': { nextRoom: 'door', output: `You can barely make out the silhouette of the figure. 
                What seems like hazy smoke blurs distorts its mass and features except for its bright eyes that seem to stare right through you. It doesn't move nor
                make any sound. For some odd reason, you can't shake the feeling that it's someone you know. You wonder if they're a past patient of yours who has recently passed away- a lost soul.`,
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
    window: {
        description: `The shutters noisly hit against the side of the wall from the strong winds outside. You look out and take in the view of
        the dark sea of mountains and shimmering metal rooftops of houses below. It feels as if you can almost touch the moon from this high up the mountain.
        As much as you enjoy the view, you should <i>close</i> the window before any wildlife starts flying in.`,
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
            },
            'close window': { 
                output: `A sudden strong breeze rushes in as you shut the window close, loudly slamming the shutters. You're abruptly engulfed in darkness with 
                just the light from your flashlight. A chill runs down your spine. It feels as if the temperature has dropped by 20 degrees. <i>
                You should go back to the </i> <span style="font-weight: bold;">CORRIDOR</span>.`,
                action: function () {
                    document.getElementById('topimg').src="art/closedwindow.png";
                    gameState.windowClosed = true; // Flag set to true after closing the window

                    gameData.corridor.description = `You stumble back as you suddenly notice a pale faint <span style="font-weight: bold;">GHOST</span> towering over you on the opposite side of the room.
                    Where you imagine its head to be almost reaches the ceiling. You try to contain your shock at its towering stature.
                    Having been born and raised in the mountains, you can't say you've gotten used to the supernatural, but stumbling across wandering spirits and 
                    ghosts are not an uncommon occurrence for you especially during these late-night calls...but
                    you've never had one seemingly and suddenly reveal itself in front you.`;

                    gameData.window.description = ``;
                    gameData.window.commands["look"].output = `The window is now shut.`;
                    gameData.window.commands["look"].action = function () {
                        document.getElementById('topimg').src="art/closedwindow.png";
                    };
                    gameData.corridor.commands["look"].output = "Empty hospital beds line the corridor. A towering ghostly figure silently observes you from the opposite side of the room.";
                    gameData.corridor.commands["examine windows"].output = "All the windows are now closed.";
                    gameData.corridor.commands["examine windows"].action = function () {
                        document.getElementById('topimg').src="art/closedwindow.png";
                    };
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }
            },
            'go to corridor': { 
                nextRoom: 'corridor', 
                output: `You turn around and go back to the <span style="font-weight: bold;">CORRIDOR</span>.`,
                action: function () {
                    // Only display ghost if the window was closed
                    if (gameState.windowClosed) {
                        document.getElementById('topimg').src="art/ghost.png";
                    }
                    else {
                        document.getElementById('topimg').src="art/beds.png";
                    }
                    setTimeout(() => {
                        document.querySelectorAll('#textoutput span').forEach(span => {
                            span.style.color = "white";
                        });
                    }, 0);
                }
            }
        }
    },
    door: {
        description: `You point your flashlight towards the ghost causing it to quickly dissipate. A strong gust of wind envelops you, you shut your eyes and hold your breath,
        bracing for an impact that never comes. Instead you hear the <span style="font-weight: bold;">DOOR</span> creak behind you.`,
        commands: {
        'look': {output: `The ghost has left and is no longer in the hospital, leaving the door behind you slightly ajar.`,
            action: function() {
                setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
            }},
        'examine door': {output: `You turn towards the door and notice that it's now slightly ajar. Rather than fear, you're filled with curiosity and remorse.
            You've crossed paths with this lost soul before. You just know it. You know them like a name on the tip of your tongue. It's beckoning you to follow...
            <i>you should leave the hospital...</i>`,
            action: function () {
                document.getElementById('topimg').src="art/door.png";
                setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
              }
        },
        'leave hospital': {output: ``,
            action: function () {
                window.location.href = 'prompt3.html';
                setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
        }
        }
        }
    }
};

window.onload = function() {
    const textOutput = document.getElementById('textoutput'); // Adjust to match your actual output area ID
    if (textOutput) {
        textOutput.innerHTML += `<p>${gameData.start.description}</p>`;
    }
};