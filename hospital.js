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
        description: `Empty hospital beds line the corridor. The most recent patient was discharged earlier that afternoon. You wonder
        where the nightshift nurses are...and who rang you. It's eerily quiet other than the ticking of
        the clock and crickets outside. You notice one of the <span style="font-weight: bold;"> WINDOWS </span> was left open.`,
        commands: {
            'look': { output: `Empty hospital beds line the corridor. One of the<span style="font-weight: bold;"> WINDOWS </span> is open.`,
                action: function () {
                    setTimeout(() => {
                      document.querySelectorAll('#textoutput span').forEach(span => {
                          span.style.color = "white";
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
    window: {
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
            },
            'close window': { output: `A strong breeze rushes in before you shut the window close, engulfing yourself in darkness with just the light from your flashlight. 
                It feels as if the temperature has dropped by 20 degrees in the
                <span style="font-weight: bold;">CORRIDOR</span>`,
                action: function () {
                  document.getElementById('topimg').src="art/closedwindow.png";
                  gameData.corridor.description = `You stumble back as you suddenly notice a pale ghostly <span style="font-weight: bold;">FIGURE</span> looming over you on the oppostie side of the room.
                  Having been raised in the mountains, stumbling across wandering spirits and ghosts are not and uncommon occurance for you, especially during these late-night calls, but
                  you've never had one come to you.`;
                  gameData.window.description = ``;
                  gameData.window.commands["look"].output = `The window is now shut.`
                  gameData.window.commands["look"].action = function () {
                    document.getElementById('topimg').src="art/closedwindow.png";
                  }
                  gameData.corridor.commands["look"].output = "Empty hospital beds line the corridor. A towering ghostly figure silently hovers on the opposite side of the room. "
                  gameData.corridor.commands["examine windows"].output = "The window is now closed."
                  gameData.corridor.commands["examine windows"].action = function () {
                    document.getElementById('topimg').src="art/closedwindow.png";
                  }
                  setTimeout(() => {
                    document.querySelectorAll('#textoutput span').forEach(span => {
                        span.style.color = "white";
                    });
                }, 0);
                }
            },
            'go to corridor': { nextRoom: 'corridor', output: `You turn around to the <span style="font-weight: bold;">CORRIDOR</span>.`,
                action: function () {
                  document.getElementById('topimg').src="art/ghost.png";
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
        description: `You point your flashlight towards the ghost causing it to quickly vanish. A strong gust of wind envelops you, you shut your eyes and hold your breath
        bracing for impact that never comes. Instead you hear the entrance <span style="font-weight: bold;">DOOR</span> creak behind you.`,
        commands: {
        'look': `.`,
        'examine door': {output: `You turn towards the door and notice that it's now slightly ajar..For some odd reason, you still can't shake the feeling that you've crossed 
            paths with this lost spirit before. A sense of deja vu and familiarty fills you, as if it's beckoning you to follow.`,
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