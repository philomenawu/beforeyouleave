// Inside rooms
const gameData = {
    start: {
        description: `You're in a dark room. There's a telephone ringing.`,
        commands: {
            'start': { 
                        output: `You rub the sleep from your eyes as you're pulled from a dream you already forgot. You can hear the <span style="color: white; font-weight: bold;">TELEPHONE</span> across the room loudly ringing. 
                        You don't know how long it's been going for. After a long day at the hospital you always seem to find yourself dozing off…but you're never truly off the clock 
                        with these late-night calls. You pick yourself up from the cushioned <span style="color: white; font-weight: bold;">BENCH</span> and stretch your arms and neck. You feel a deep ache in your back as you hear bones crack…
                        God you're getting old. You turn back around, groping the <span style="color: white; font-weight: bold;">BENCH</span> to find your <span style="color: white; font-weight: bold;">GLASSES</span>
                         when you realize it must have fallen to the <span style="color: white; font-weight: bold;">FLOOR</span>.`
                     },

            'go north': { output: `You can not move north from here.`},

            'go south': { nextRoom: 'shop', output: `You move south and walk down the stairs into the shop.` },

            'go east': { nextRoom: 'bedroom', output: `You move east and quietly walk into your <span style="color: white; font-weight: bold;">bedroom</span>.` },

            'go west': { nextRoom: 'diningroom', output: `You move west and walk into the <span style="color: white; font-weight: bold;">dining room</span>.` },

            'pick up glasses': {
                        output: `You bend down and pick up your <span style="color: white; font-weight: bold;">GLASSES</span>. Their bold black frames make them rather hard to lose, and they've lasted you almost a decade by now 
                        despite how many times you've tossed them around. You quickly wipe the lenses with the hem of your shirt and put them on.`, 
                        action: function() {
                            if (!gameState.inventory.includes('glasses')) {
                                gameState.inventory.push('glasses');
                            }
                            gameData.start.commands['pick up glasses'].output = `You already have your glasses on.`;
                            gameData.start.commands['examine floor'].output = `<i>You admire the varnished wooden floor you carefully selected when constructing the house.</i>`;
                        }},

            'look': { 
                        output: `You're in the living room. Beside the <span style="color: white; font-weight: bold;">BENCH</span> you just woke up from are wooden chairs with 
                        floral cushions and a worn table of similar carved designs. Across the room is a taxidermied <span style="color: white; font-weight: bold;">TIGER</span>
                        that you and your friends hunted last year standing proudly on display by the box <span style="color: white; font-weight: bold;">TELEVISION</span> set. 
                        Next to it is a lone black rotary <span style="color: white; font-weight: bold;">TELEPHONE</span>. Despite the strict water and electricity schedule throughout the 
                        entire village, being one of the only specialized doctors gives you the perk of being abruptly woken up in the middle of the night by the blaring noise to attend to emergencies back at your 
                        hospital. Your wristwatch reveals it's just a quarter past midnight.`
                    },

            'pick up telephone': { output: `You carefully place the telephone back down...taken aback by the strange call. You should head outside to check it out.`},

            'examine tiger': { 
                        output: `You walk over to run your fingers through its vibrant fur. You can still remember the moment you shot it- 15 miles out from the village with 
                        your hunting squad (fellow coworkers at the hospital); the sound of his last roar. The whole village turned in early for the day and held a celebratory feast after hearing 
                        the news. Later that night you did your best to gut and taxidermize it, finding blue glass marbles to insert into its eyes. It's been a year since you last picked up your 
                        hunting rifle after your wife sternly demanded to stop for the sake of your reputation as a doctor…`
                    },
            
            'examine television': { 
                        output: `You make an effort to check out the VHS selection when the Mandalay merchant is in town with imported goods. 
                        It's a rather old box set, but for many nights it's filled the entire living room with neighbors, old and young alike, eager to watch the colorful screen.`
                    },
            
            'examine telephone': { output: `The telephone is a shiny black rotary. The clacking sounds as fingers turn the dial is engrained in your head.`},

            'examine floor': { 
                        output: `You've been finding yourself waking up to your <span style="color: white; font-weight: bold;">GLASSES</span> on the floor lately. 
                        You really should try to take better care of them. It'll be quite the trip to have to buy new ones if they break which you know your wife wouldn't 
                        be too pleased about. <i>You should pick it up before you accidentally step on them...</i>`
                    },

            'examine bench': { output: `The bench is part of an intricately carved teak wood furniture set with the back and bottom made of woven cane.`},

            'help': { 
                        output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine item, pick up item.<br>
                        <i>HINT: Look around the room to search for clues and see what items can be interacted with.</i>`
                    }
        }
    },

    bedroom: {
        description: `Your <span style="color: white; font-weight: bold;">WIFE</span> is asleep on the bed. The pale light of the moon through the slits of the window shutters casts a soft glow on her face. 
        Despite the two decades together, she doesn't seem to have aged since the two of you first met. You don't know how she manages it all- running the shop downstairs 
        while taking care of the three little runts all asleep in the bedroom farther down the hallway.`,
        commands: {
            'go north': { output: `You can not move north from here.`},

            'go south': { output: `You can not move south from here.`},

            'go east': { nextRoom: 'children', output: `You move east and quietly walk into your children's bedroom.`},

            'go west': { nextRoom: 'start', output: `You move west and walk into the living room.`},

            'look': { 
                        output: `Your wife is soundly asleep on the bed. A <span style="color: white; font-weight: bold;">MIRROR</span> hangs by the bedroom door. There's a small nightstand next to your side of the bed 
                        with your pocket <span style="color: white; font-weight: bold;">JOURNAL</span> neatly placed on top.`
                    },

            'examine mirror': 
                    { 
                        output: `You look at your reflection. You've grown to have a rather thick skin from being teased for your short stature. You're bundled in multiple layers
                                to stay warm in the mountain cold which only seems to shrink you. You take your glasses off and push your dark hair away from your face- 
                                you try to not think about how you'll be turning 50 in a few weeks...the darkness of the room helps to hide your dark circles. `,
                                action: function() {
                                gameState.action.push('mirror_1');
                                gameState.mirrorState = true;
                                // handleMirror();
                                }
                    },

            'examine journal': 
                    { 
                        output: `Ever since your high school days in Rangoon, you've made an effort to document your days when you remember to. It's become habit by now...the journals
                        are full of interesting medical cases, hunting activities, and family life in the little village...`,
                        action: function() {
                                gameState.action.push('journal_1');
                                gameState.journalState = true;
                                // handleJournal();
                        }
                    },
                        
            'take journal': 
                    { 
                        output: `You pick up the journal and slide it into the pocket of your jacket.`,
                              action: function() {
                                    gameData.bedroom.commands['take journal'].output = 'You already have your journal.';
                                    gameData.bedroom.commands['look'].output = `Your <span style="color: white; font-weight: bold;">WIFE</span> is soundly asleep on the bed. 
                                    A <span style="color: white; font-weight: bold;">MIRROR</span> hangs by the bedroom door. 
                                    There's a small nightstand next to your side of the bed.`;
                                }
                    },

            'examine wife':{ output: `You admire your wife's long ebony black hair which is usually hidden from the world in a neat bun. It pools into ripples around her face as she sleeps.
                                     With the two of you kept busy with work and the kids, you've come to savor any time alone...you should really stop making it a habit of falling asleep
                                     on the bench instead of the bed (it'll probably be best for your back as well).`},

            'wake up wife':{ output: `You think it would be best for your physical and mental health to let her sleep after seeing how exhausted she looked when you got home.`},

            'help': { output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine item, take item, check item, etc.`}
        }
    },

    children: {
        description: `All three <span style="color: white; font-weight: bold;">CHILDREN</span> share a bedroom. A large glass <span style="color: white; font-weight: bold;">WINDOW</span> faces opposite of their beds, 
        giving a view of the mountainous village. The full moon can be seen clearly
        from here, illuminating the entire room in a milky glow. Soft shadows from towering trees nearby sway and dance across the concrete walls.`,
        commands: {
            'go north': { output: `You can not move north from here.`},

            'go south': { output: `You can not move south from here.`},

            'go east': { output: `You can not move east from here.`},

            'go west': { nextRoom: 'bedroom', output: `You move west and walk into your bedroom.`},

            'look': { 
                    output: `In the bed to the farthest right of the room is your oldest daughter who just turned thirteen, then your middle child only two years younger,
                    and at the farthest left your son- only four years old. You can only see the top of their shiny black hair poking from underneath the thick blankets. 
                    A large glass <span style="color: white; font-weight: bold;">WINDOW</span> faces opposite of the children's beds, giving a view of the mountainous village. The full moon can be seen clearly
                    from here, illuminating the entire room in a milky glow. Soft shadows from towering trees nearby sway and dance across the concrete walls.`
                },

            'examine children': { output:  `In the bed to the farthest right of the room is your oldest daughter who just turned thirteen, then your middle child only two years younger,
                and at the farthest left your son- only four years old. You can only see the top of their shiny black hair poking from underneath the thick blankets.`},

            'wake up children': { output: `You and your wife have the children on a strict curfew which you don't want to mess with.`},

            'examine window': { 
                    output: `You quietly make your way to the window and take in the view. Your house is situtated in the middle of the mountain by the main road- a winding
                    path that leads up the the church and hospital. You can see the red metal rooftops of neighbors below against the sea of of trees and shrubbery. Rolling mountains extend out
                    into the horizon, blending with the paint-splattered night sky.`
                },

            'help': { output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine item, take item, check item, etc.`}
        }
    },

    diningroom: {
        description: `At night, the dining room serves as a study space for your children. With the rolling blackouts throughout the village, you usually find them studying by 
        candlelight. The table is cluttered with crumpled up homework sheets and dull pencils. Wax drippings cover the surrounding surface. Despite how many times you and your 
        wife have scolded them to tidy up after, it's always a gamble to find a clean table come dawn. The kitchen is farther down the hallway.`,
        commands: {
            'go north': { output: `You can not move north from here.`},

            'go south': { output: `You can not move south from here.`}, 

            'go east': { nextRoom: 'start', output: `You move east and walk into the living room.` },

            'go west': { nextRoom: 'kitchen', output: `You west and walk into the kitchen.`},

            'look': { 
                    output: `At night, the dining room serves as a study space for your children. With the rolling blackouts throughout the village, you usually find them studying by 
                    candlelight. The table is cluttered with crumpled up homework sheets and dull pencils. Wax drippings cover the surrounding surface. Despite how many times you and your 
                    wife have scolded them to tidy up after, it's always a gamble to find a clean table come dawn.` 
                },

            // 'pick up lamp': { 
            //           output: `You shake a match out of the matchbox and light the lamp. The light flickers wildly against the walls as you pick it up.`,
            //           action: function() {
            //             if (!gameState.inventory.includes('lamp')) {
            //                 gameState.inventory.push('lamp');
            //                 document.getElementById('body').classList.add('glowing-background');
            //             }
            //             if (gameState.action.includes('call_1')) {
            //                 gameData.start.commands['go south'].action = function() {
            //                     window.location.href = 'transition.html';
            //                 };
            //             }
            //             else {
            //             gameData.start.commands['go south'].output = `You really should answer the telephone call before you leave the house.`;
            //             gameData.diningroom.commands['pick up lamp'].output = `You are already holding the lamp.`;
            //             gameData.diningroom.commands['look'].output = `The dining table is cluttered with crumpled up homework sheets and dull pencils.`
            //             }
            //           }},

            'help': { output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine item, pick up item.`}
            }
        },

    kitchen: {
        description: `The kitchen countertops are just as cluttered with <span style="color: white; font-weight: bold;">RECIPE</span> notes and scribbled grocery 
        <span style="color: white; font-weight: bold;">LISTS</span>. A window across the room is left slightly ajar to 
        air out the charcoal scent from cooking. The shelves in the back are stocked with produce. Next to them is a closed wooden <span style="color: white; font-weight: bold;">CABINET</span>.
        You hear the sound of paws walking towards you with heavy panting. <span style="color: white; font-weight: bold;">TOMMY</span>, your labrador retriever, and 
        <span style="color: white; font-weight: bold;">JACKIE</span>, your german shepherd, poke their head around the caged off corner of the kitchen.`,

        commands: {
            'go north': { output: `You can not move north from here.`},

            'go south': { output: `You can not move south from here.`},

            'go east': { nextRoom: 'diningroom', output: `You move east and walk into the dining room.`},

            'go west': { output: `You can not move west from here.`},

            'look': { 
                        output: `The kitchen countertops are just as cluttered with <span style="color: white; font-weight: bold;">RECIPE</span> notes and scribbled grocery 
                        <span style="color: white; font-weight: bold;">LISTS</span>. A window across the room is left slightly ajar to 
                        air out the charcoal scent. The shelves in the back are stocked with produce. Next to them is a closed wooden <span style="color: white; font-weight: bold;">CABINET</span>.
                        <span style="color: white; font-weight: bold;">TOMMY</span>, your labrador retriever, and <span style="color: white; font-weight: bold;">JACKIE</span>, your german shepherd, poke their head around the caged off corner of the kitchen.` 
                    },
            
            'open cabinet': {
                        output: `You find miscellaneous items strewn about inside including your trusty <span style="color: white; font-weight: bold;">FLASHLIGHT</span> you always bring with you on night jobs.`
                    },
            
            'pick up flashlight': { 
                output: `You grab the flashlight from the cabinet and turn it on.`,
                action: function() {
                    if (!gameState.inventory.includes('lamp')) {
                        gameState.inventory.push('lamp');
                        // document.getElementById('body').classList.add('glowing-background');
                    }
                    if (gameState.action.includes('call_1')) {
                        gameData.shop.commands['open door'].action = function() {
                            window.location.href = 'transition.html';
                        };
                    }
                    else {
                    gameData.shop.commands['leave house'].output = `You really should answer the telephone call before you leave the house.`;
                    gameData.diningroom.commands['pick up flashlight'].output = `You are already holding the flashlight.`;
                    gameData.diningroom.commands['open cabinet'].output = `You find miscellaneous items strewn about inside.`
                    }
                }},

            'examine recipe': {
                        output: ``
                    },

            'examine lists': {output: `You pick up the grocery list and need to squint in order to make out the messy note: Corn, Pumpkin, Oxtail…`},

            'pet Tommy': { output: `You pet Tommy. He furiously licks your hand while Jackie pushes his head against him, wanting a turn.`},

            'pet Jackie': {output: `Jackie wags his tail and playfully bites at your fingers while you rub his back.`},

            'help': { output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine item, pick up item.<br>
                <i>HINT: Examine an item in order to read it or give it a closer inspection.</i>`}
        }
    },

    shop: {
        description: `The first floor of the house serves as the general shop your wife runs. Shelves and display cases line the store full with a selection of medicine and 
        herbs, tools, soap, film rolls, clothes, blankets, and any other random goods she places and order with the Mandalay merchant. There's a painted blue 
        <span style="color: white; font-weight: bold;">DOOR</span> at the front of the shop.`,

        commands: {
            'go north': { nextRoom: 'start', output: `You move north and walk up the stairs to the living room.`},

            'go south': { output: `You can not move south from here.`},

            'go east': { output: `You can not move east from here.`},

            'go west': { output: `You can not move west from here.`},

            'look': { 
                    output: `The first floor of the house serves as the general shop your wife runs. Shelves and display cases line the store full with a selection of medicine and 
                    herbs, tools, soap, film rolls, clothes, blankets, and any other random goods she places and order with the Mandalay merchant. There's a painted blue 
                    <span style="color: white; font-weight: bold;">DOOR</span> at the front of the shop.`
                },

            'examine door': { output: `The door leads out to the main road.`},

            'open door': { output: `You really should answer the telephone call before you leave the house.`},

            'help': { output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine item, pick up item, open item.<br>
                <i>HINT: Examine an item in order to read it or give it a closer inspection.</i>`}
        }

    },

    };

    window.onload = function() {
        const textOutput = document.getElementById('textoutput'); // Adjust this to your actual output area ID
        if (textOutput) {
            textOutput.innerHTML += `<p>${gameData.start.commands['start'].output}</p>`;
        }
    };