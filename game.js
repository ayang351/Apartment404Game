const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  document.body.style.backgroundImage = textNode.bkgd
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  //start of pre-exploration
  {
    id: 1,
    bkgd: "url('../../images/DoorEntrance.png')",
    text: 'You struggle to keep your eyes open as you fumble through your keychain. The semester has only just begun, and yet you already feel as if you are drowning in assignments. You have spent the entirety of the past few days attending lectures while juggling project meetings, and it is beginning to take its toll. You are overwhelmed with an insurmountable feeling of exhaustion, worsened by the fact that you have not been able to get a wink of sleep ever since…*click*. The weighty sound of a key turning into a lock interrupts your line of thought, replacing them with an intense feeling of relief. Finally, you can rest for the day. You stifle a yawn as you pull open the door. Not wanting to spend any second longer standing in the cold, dimly-lit hallway, you step into the dark entrance of your new home, apartment 404.',
    options: [
      {
        text: 'Proceed',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    bkgd: "url('../../images/DoorEntrance.png')",
    text: 'It was only a few days ago that you found yourself in a state of complete panic. The starting date for the semester was inching closer and closer, but you had yet to find any living accommodations for the upcoming school months. It was not until you were at the end of your rope, having already come up short after contacting friends and apartment agencies, that you stumbled upon an ad for an apartment in a complex nearby the school. Though the apartment was aged in its appearance, the price was affordable enough, and the lack of any other option made it an attractive deal regardless of any “quirks” it might possess. At least, that’s what you believed until it came time to move in. ',
    options: [
      {
        text: 'Proceed',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    bkgd: "url('../../images/living room.png')",
    text: ' You flick on the light switch as you step into the apartment for what now marks the 4th night since you took residence. The lights sputter on, and you are greeted with the same, now familiar sights of the furnishings of your home. One thing that you took for a surprise upon your visit to the apartment was its size, appearing much larger on the inside than one would initially surmise given the layout of the complex. Though you appreciated all the space, you didn’t particularly enjoy having to spend the first two days performing a full sweep of it. It was obvious that no one had lived in the apartment for a very long time, as every inch of the kitchen, bathroom, and bedroom was caked with dust. Fortunately, this dire state of disrepair did not extend to the water and electricity, though a few of the light fixtures were emitting a dull, buzzing sound, and flickered constantly. You were planning on calling an electrician today to fix them, but it’s much too late now. For now, all you want to do is reach your bed and finally get some rest.',
    options: [
      {
        text: 'Proceed',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    bkgd: "url('../../images/bedroom.png')",
    text: 'Having found your way into the bedroom, you jump onto the mattress, rapidly enveloping yourself within the bed sheets with one final burst of energy.  Fully, utterly exhausted, you steadily close your eyes, and slowly, gradually, gently drift into sleep.',
    options: [
      {
        text: 'Proceed',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    bkgd: "url('../../images/bedroom.png')",
    text: '*Tick-tock* *tick-tock* *tick-tock*',
    options: [
      {
        text: 'Proceed',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    bkgd: "url('../../images/bedroom.png')",
    text: 'Your eyes shoot open, and your body darts up, launching the bedsheets in tandem.  Though you are still lethargic, your feelings of exhaustion have subsided, due to a much more intense feeling of frustration taking its place. It’s the fourth night since you first started living here, and subsequently, it is the fourth night in a row that you haven’t been able to get any sleep. All because of the infernal chiming of the contemplable clockwork contraption. You’ve tried everything, music, earplugs, but none of it has worked, and the sound of the clock still bleeds through. Worst of all, you can’t find the damn thing anywhere in your apartment, meaning that it must be from a neighboring tenant. Well, today was the last straw, you plan on storming up to the floor above to give the tenant above a piece of your mind, that is, until, you notice a peculiar-looking envelope sitting atop your nightstand. One that you are certain wasn’t there before.',
    options: [
      {
        text: 'Proceed',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    bkgd: "url('../../images/bedroom.png')",
    text: 'You flick on the lamp residing on the nightstand, then pick up the letter. The envelope has remarkable features, in fact, it is completely blank, save for a deep, crimson-red seal that is holding it together. After a brief struggle, you manage to wrangle the letter from its paper shell. As you start to read its contents, you feel an unnerving chill tinge throughout your body. ',
    options: [
      {
        text: 'Proceed',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    bkgd: "url('../../images/blackBG.png')",
    text: 'To the resident of Apartment 404,\n' +
    'If you are receiving this letter, then I must inform you with the deepest regret that you have been placed under a terrible curse. Though the misfortune of your present circumstances is most utterly unfair, it is nonetheless the reality that you must face, especially if you intend on lasting through the night.' +
    'This curse is one that has been allowed to fester for decades, its darkness has grown so palpable that it has managed to crawl from the deepest depths of occultic obscurity and morph the very reality it subsides in.' +
    'Though you may now find yourself in a disposition most dire, there is still one glimmer of hope that you may cling onto in order to ensure your survival. Now, I advise you read the next few lines very carefully, as failing to do so will most certainly cost your life. The only way to expel the curse plaguing this locale is to perform the following ritual. First, you must obtain the following components.\n\n' +
    '2 candles alight with flames of life\n\n' +
    '4 talismans imbued with mantras of protection\n\n' +
    'A spotless bowl with contents emptied\n\n' +
    'Two halves of a long-forgotten chant\n\n' +
    'And lastly,\n' +
    'Two drops of blood from the cursed victim\n\n' +
    'Once you have procured all of these elements. Take them into a large, empty room. Place the bowl, then the candles, then the talismans. Once this has been completed, utter the chant 4 times, then let your blood rip into the bowl. If successful, you will be freed from the wretches of the curse.' +
    'One final word of warning, you must not give in to the fallacies of the senses. The horrors you witness tonight will overwhelm your capacity to trust your own mind. Focus only on the completion of the ritual, that is the one truth on which you can fully rely upon.\n' +
    '...\n' +
    'the letter ends, there is no indication of the identity of the writer, only a date, 30 years ago from today' 
    ,
    options: [
      {
        text: 'Proceed',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    bkgd: "url('../../images/blackBG.png')",
    text: 'Before you even have the ability to fully process your bewilderment at the letter’s content, the lamp abruptly cuts off. Not long after, the entire apartment begins to shake violently, as if being uprooted from the earth itself. Your head feels like it is about to explode as the sounds of furniture falling and silverware crashing amplify throughout the apartment. Right when you feel as though you’re about to fall apart, it all comes to a complete stop. The sound of the apartment collapsing in on itself has vanished. Silence permeates throughout the pitch-black room. The irritation that was fueling your movements only moments ago has now once again been replaced by an even greater sense. Complete and utter fear.',
    options: [
      {
        text: 'Proceed',
        nextText: 10
      }
    ]
  },
  {
    //start of bedroom exploration
    id: 10,
    bkgd: "url('../../images/blackBG.png')",
    text: 'Your eyes are wide awake in terror, and you feel your body shivering, not from the cold, but from instinct. Every fiber of your being is telling you to stay awake because deep down, it knows that something is out there, and it knows that it’s a threat.',
    options: [
      {
        text: 'Proceed',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    bkgd: "url('../../images/blackBG.png')",
    text: 'The first thing you attempt to do is restore some light to your bedroom. Though you’ve never been particularly afraid of the dark, you are afraid of what may be lurking within it. You aimlessly reach your hand around, attempting to find the switch which turns on the lamp. \n' + 
    "As you reach for the light switch, you feel your hand rub against something. Scratch that, it wasn’t something, it was someone. What your hand briefly brushed was cold, rigid, and worn, but it was unmistakably living. Your mind, already on the defensive, goes into full panic mode You quickly retract your arm with such ferocity that it brings the contents on top of the nightstand along with it. The various trinkets and accessories now splayed across your bed, though there is one that you don't seem to recall having been there before.",
    options: [
      {
        text: 'Pick up candle',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    bkgd: "url('../../images/WaxCandle2.png')",
    text: 'As soon as your fingers press upon the slick sensation of wax, the candle bursts aflame with light, illuminating a significant, albeit contained amount of the room. You quickly scan your nearby surroundings but are unable to see the source of what you came into contact with a few moments ago. However, the candle’s vigorous flame reminds you of the letter you read earlier in the night. Though it seemed like utter nonsense, the situation you find yourself in could not be further detached from reality. Perhaps it would be best to go around preparing for this “ritual”. At the very least, it would be better than sitting idly by. Though you may have some small reprieve in the form of light, you are far from feeling comfortable enough to go back to sleep. You stand up, candle in hand, and begin examining the area around you.' +
    '\n Begin searching...',
    options: [
      {
        text: 'The Desk',
        nextText: 14
      },
      {
        text: 'The Door',
        nextText: 15
      },
      {
        text: 'The Bed',
        nextText: 16
      },

    ]
  },
  {
    //bedroom main options
    id: 13,
    bkgd: "url('../../images/bedroom.png')",
    text: 'You move back to the center of your bedroom to survey the area around you.',
    options: [
      {
        text: 'The Desk',
        nextText: 14
      },
      {
        text: 'The Door',
        nextText: 15
      },
      {
        text: 'The Bed',
        nextText: 16
      },

    ]
  },
  {
    //TABLE
    id: 14,
    bkgd: "url('../../images/BrokenTable.png')",
    text: "What was once your desk has now been reduced to an amorphous pile of wood. Most of the legs are either splintered beyond repair or are lodged through the desk itself. You don't see your computer anywhere, but you do see your monitor, that is, what's left of it, as one of the desk legs has pierced clean through one side and out the other." +
    "There doesn’t seem to be anything of interest here.",
    options: [
      {
        text: 'return',
        nextText: 13
      }

    ]
  },
  {
    //DOOR 
    id: 15,
    bkgd: "url('../../images/blackBG.png')",
    text: "You go to the entranceway of your bedroom. As soon as you arrive, you nearly drop the candle you’ve been clinging to for dear life. In front of you appears a pitch-black void in place of where the door should normally be. You reach out to it, attempting to perhaps see if it will still work as an exit. Before your fingers can even get within a foot of the hole, it begins to writhe and emanates a visible aura so strong that it nearly knocks you off your feet as it propels you backward. The only exit out of your room, and is completely blocked, though perhaps you can find a way to dispel it.",
    options: [
      {
        text: 'return',
        nextText: 13
      }

    ]
  },
  {
    //BED
    id: 16,
    bkgd: "url('../../images/Bed1.png')",
    text: "You are standing next to your bed. Check...",
    options: [
      {
        text: 'top of the bed',
        nextText: 17
      },
      {
        text: 'under the bed',
        nextText: 18
      }

    ]
  },
  {
    //TOP OF BED
    id: 17,
    bkgd: "url('../../images/Bed1.png')",
    text: "You decide to revisit the area that you were just earlier lying upon to see if you overlooked any other useful items. Unfortunately, it seems that the candle was the only relevant item, as the rest of the various objects splayed across the messy sheets are either broken or functionally worthless.",
    options: [
      {
        text: 'return',
        nextText: 16
      }
    ]
  },
  {
    //UNDER THE BED pt. 1
    id: 18,
    bkgd: "url('../../images/blackBG.png')",
    text: "You crouch down to view the floorboards obscured by the bed. You scan around, but nothing catches your eye. As you move to stretch back up, you notice a faintly glowing paper firmly lodged in the corner of the bed. The only way to get to it would be to crawl underneath and grab it.",
    options: [
      {
        text: 'begin crawling',
        nextText: 19
      }
    ]
  },
  {
    //UNDER THE BED pt. 2
    id: 19,
    bkgd: "url('../../images/blackBG.png')",
    text: "You place the candle down a slight ways away from the bedframe. Taking it with you would undoubtedly burn the mattress above, and you don't want it too close to you in case you accidentally bump into it when crawling backward. Once you’ve secured the candle into a safe place, you descend lower onto your hands and knees and begin wading towards the opposite end of the bed. Soon enough, you reach the luminescent scrap of paper.",
    options: [
      {
        text: 'reach towards the paper',
        nextText: 20
      }
    ]
  },
  {
    //UNDER THE BED pt. 3
    id: 20,
    bkgd: "url('../../images/blackBG.png')",
    text: "Your hands are inches away from tugging the slip free from the clutches of the bedframe when you notice something strange. Though once again, you realize too late that it is not, in fact, a something, but a someone. The paper’s pulsating glow rhythmically illuminates the silhouette of a rotted, putrid hand. You realize now that you have found its hiding place. It takes all you willpower you can muster to stifle a scream. You " + 
    "try to slowly crawl backward, holding onto the slightest belief that it may not have noticed you. That hope, however, quickly goes up in flames, as your eyes briefly dart upwards, you directly stare towards the entity.",
    options: [
      {
        text: 'proceed',
        nextText: 21
      }
    ]
  },
  {
    //UNDER THE BED pt. 4
    id: 21,
    bkgd: "url('../../images/blackBG.png')",
    text:  
    "You shut your eyes, the horror of the visage you briefly witnessed being so severe that it has reverted you to an utterly absurd and childlike defense mechanism, that maybe if you can't see it, then it can't see you. You’d be able to find humor in the vanity in such a strategy if you weren't so utterly terrified. Whatever you saw, even if it was only for the briefest of moments, was something that does not belong, something that should " + 
    "not be. You crawl as furiously as possible, even though it only took a few seconds to reach the slip, it feels as though it's taken hours to get out from underneath the bed. You feel your legs buckling from underneath you. The underside of the bed frame feels as if it's closing inwards, concaving in so as to sandwich you in between it and the hard floorboards. Your elbows are now scraping against the floor, and the top of your head is bumping against the frame.",
    options: [
      {
        text: 'push harder',
        setState: { talisman1: true },
        nextText: 22
      }
    ]
  },
  {
    //UNDER THE BED pt. 5
    id: 22,
    bkgd: "url('../../images/blackBG.png')",
    text: "You give yourself one final push, and at long last find yourself free from what seemed to be your impending tomb. Though you initially dread that the “beast” may still be chasing you, your fears are assuaged once you realize that the bedframe has fully cemented itself onto the floor. Whatever was under there couldn’t possibly get out now. Though battered and bruised, the fact that you have triumphed over such an ordeal has left you with a rush of confidence, and your recovery of the slip of paper, which you now recognize must be one of the talismans, ignites a spark of hope that you hadn't yet felt since you arrived in this cursed nightmare.",
    options: [
      {
        text: 'return',

        nextText: 23
      }
    ]
  },
  {
    //AFTER TALISMAN #1 - DOOR
    id: 23,
    bkgd: "url('../../images/bedroom.png')",
    text: "As you move to return to the center of your bedroom, you hear the faint sound of a key turning into place, coming from the direction of the doorway, perhaps it would be best to check it out?",
    options: [
      {
        text: 'check the door',
        nextText: 24
      }
    ]
  },
  {
    //DOOR pt. 2
    id: 24,
    bkgd: "url('../../images/blackBG.png')",
    text: "You step towards the entranceway to your bedroom. To your surprise, the door is wide open, allowing you to access the other parts of your apartment that you were unable to before.",
    options: [
      {
        text: 'proceed',
        nextText: 25
      }
    ]
  },
  //start of bathroom exploration
  {
    id: 25,
    bkgd: "url('../../images/blackBG.png')",
    text: "You exit your bedroom and find yourself in the main hallway of your apartment, however, you are quickly cut off from proceeding any further by a pulsating shroud of fog, which has entirely blocked off the entranceway to the kitchen, and by extension, the rest of the apartment. Perhaps you need to search elsewhere in the apartment to open the way forward. Currently, the only other room currently available to you is the bathroom.",
    options: [
      {
        text: 'proceed',
        nextText: 26
      }
    ]
  },
  {
    id: 26,
    bkgd: "url('../../images/bathroom.png')",
    text: "You enter the bathroom and begin searching",
    options: [
      {
        text: 'medicine cabinet',
        nextText: 27
      },
      {
        text: 'the shower',
        nextText: 28
      },
      {
        text: 'the sink',
        nextText: 29
      },
      {
        text: 'the toilet',
        nextText: 30
      },
    ]
  },
  {
    //CABINET
    id: 27,
    bkgd: "url('../../images/medicine.png')",
    text: "You move towards the stained medicine cabinet lying above the equally dillapted sink. The worn doors of the cabinet nearly fall apart as you move to pull them, the hinges having rusted beyond repair. Upon examining the interior of the cupboard, you spot a lone medicine bottle tucked away in the corner.",
    options: [
      {
        text: 'examine the bottle',
        nextText: 31
      }
    ]
  },
  {
    //cabinet pt. 2
    id: 31,
    bkgd: "url('../../images/medicine.png')",
    text: "The majority of the bottle’s label is scratched out to the point of  illegibility. You can only just barely make out the name of the drug, clozapine. The bottle itself contains no medication, in its place, hinstead, what appears to be a folded piece of paper, with a faintly glowing inscription.",
    options: [
      {
        text: 'Open the bottle',
        nextText: 32
      }
    ]
  },
  {
    //cabinet pt. 3
    id: 32,
    bkgd: "url('../../images/medicine.png')",
    text: "You open the bottle and reach for the contents within. As soon as your fingers make contact with the slip, you feel a sharp, squirming sensation slither course from your fingertips all the way to your head. The excruciating pain nearly causes you to collapse. You try to focus on the talisman, hoping desperately that it will provide you with some small salvation similar to how it did before. However, the talisman appears to be changing before your eyes, as the iridescent glow of the mark morphs into dull, crimson-tinted etchings so crude that they can barely be made out as words. Your head is splitting, and you feel like it’s only a matter of moments until you’ll slip out of consciousness entirely.",
    options: [
      {
        text: 'read the slip',
        nextText: 33
      }
    ]
  },
  {
    //cabinet pt. 4
    id: 33,
    bkgd: "url('../../images/blackBG.png')",
    text: "BREAKING: MURDER IN NEWLY BUILT APARTMENT COMPLEX\n" + 
    "On September 17th, 1992, **** was announced dead at her apartment, having been found with grave physical trauma in the form of multiple stab wounds punctuated throughout her body." +
    "At the time of this report, **, the husband of the victim, has been apprehended and is currently being interrogated. **, aged 33, has had prior reports of domestic abuse, and it is currently believed that the assailant was experiencing a severe schizophrenic attack , which led him to lash out and ultimately fatally injure his partner.",
    options: [
      {
        text: 'proceed',
        setState: {talisman2: true},
        nextText: 34,
      }
    ]
  },
  {
    //cabinet pt. 5
    id: 34,
    bkgd: "url('../../images/medicine.png')",
    text: "As soon as you finish reading the excerpt, the intense pain recedes, and the talisman once again takes a form similar to one found in the bedroom. Taking a quick moment to gather your bearings, you set off to explore the rest of the bathroom, though the contents of the excerpt repeatedly run through your head.",
    options: [
      {
        text: 'return',
        requiredState: (currentState) => (!currentState.talisman3),
        nextText: 35,
      },
      {
        //if talisman 3 already collected
        text: 'return',
        requiredState: (currentState) => (currentState.talisman3),
        nextText: 38,
      },
      
    ]
  },
  {
    //bathroom main options
    id: 35,
    bkgd: "url('../../images/bathroom.png')",
    text: "You return to the bathroom entrance, and start searching the...",
    options: [
      {
        text: 'medicine cabinet',
        nextText: 27
      },
      {
        text: 'the shower',
        nextText: 28
      },
      {
        text: 'the sink',
        nextText: 29
      },
      {
        text: 'the toilet',
        nextText: 30
      },
    ]
  },
  {
    //SHOWER
    id: 28,
    bkgd: "url('../../images/blackBG.png')",
    text: "You step towards the shower. The interior is partially obscured by a curtain, though its condition is so ragged that you are able to easily peer through its multiple openings. After a few moments of examination, you spot another faintly glowing mark on top of the shower drain, signifying the appearance of another talisman.",
    options: [
      {
        text: 'reach for the talisman',
        nextText: 36,
      }
    ]
  },
  {
    //Shower pt. 2
    id: 36,
    bkgd: "url('../../images/blackBG.png')",
    text: "You attempt to open the curtain so that you can step into the shower, but it doesn’t budge. Fortunately, there is a tear close enough to the drain to where the talisman could just barely be reached if you were to extend your arm through. " + 
    "You place your candle down on the floor, then kneel down to get closer to the tear in the shower curtain. You slowly poke your arm through the hole. As it becomes clearer that there is no immediate danger, you pick up the pace, and before long, " + 
    "your entire arm is protruding through the cover. You aimlessly grasp for the talisman, your arm now obfuscating your former viewpoint. Before long, you feel what you believe to be the talisman slip against your fingers. " + "You begin pulling your " + 
    "arm back, but are quickly halted after the talisman appears to snag. You try to exert more force, but the slip won't budge. In fact, not only is the paper not moving, but it seems like something is pulling it back. Before you can even send the signal to your arm to abandon the chase, you feel a viscous, hairy sensation crawl its " + 
    "way up your arm, and within moments, what initially seemed a trivial task now appears to be a horrific battle of tug-of-war.",
    options: [
      {
        text: 'pull harder',
        setState: {talisman3: true},
        nextText: 37,
      }
    ]
  },
  {
    //shower pt. 3
    id: 37,
    bkgd: "url('../../images/blackBG.png')",
    text: "You pull your arm back as hard as you can, but to no avail. You try to take a brief moment to pause and catch your breath, but as soon as you relieve some exertion from your arm, your entire body lurches towards the shower. You slam against the curtain, " + 
    "its linen appearance betrayed by a sensation that feels more akin to colliding against concrete. The sudden pain is almost enough to knock you out, though you manage to stay alert due to the constant stimulation caused by your arm feeling as if it’s about to be " + 
    "ripped from your body. Your attacker, now revealed to be long, blood-soaked strands of hair, is now up to your shoulder, and it doesn’t appear to be stopping. If you don’t do something, and quickly, you’ll surely lose your life. You notice the candle, still glowing " + 
    "brightly a short distance away on the floor where you placed it. Using one final burst of strength, you extend your other arm towards the candle, and just barely manage to wrap your fingers around the handle. Without hesitation, you  jerk the arm back, and draw the candle " + 
    "flame close to your arm. An ear piercing cry rattles throughout the room, and the hair quickly begins to retract from your body and arm. You yank the arm holding the talisman back, and put some distance between yourself from the shower. Now that you managed to get the talisman, " + 
    "you doubt you’ll revisit the area anytime soon…",
    options: [
      {
        text: 'return',
        requiredState: (currentState) => (!currentState.talisman2),
        nextText: 35
      },
      {
        text: 'return',
        requiredState: (currentState) => (currentState.talisman2),
        nextText: 38
      }
    ]
  },
  {
    //SINK
    id: 29,
    bkgd: "url('../../images/blackBG.png')",
    text: "The sink basin is cracked and stained with grime and blood. You try to turn on the facet, but no water comes out, though it’s unlikely you would’ve tried to drink from it anyways, given the condition of your surroundings. Hopefully you’ll be able to escape before dehydration becomes a concern…",
    options: [
      {
        text: 'return',
        nextText: 35,
      }
    ]
  },
  {
    //TOILET
    id: 30,
    bkgd: "url('../../images/blackBG.png')",
    text: "The toilet, similar to the rest of the bathroom, is in a dire condition of disrepair. The bowl is covered with cracks, and the lid has been completely torn off. You peer inside , but there doesn’t appear to be anything liquid or otherwise inside the basin. Luckily for you, it seems that anything remarkable is hidden here…",
    options: [
      {
        text: 'return',
        nextText: 35,
      }
    ]
  },
  {
    //AFTER TALISMAN 2 and 3 - proceed to kitchen scene
    id: 38,
    bkgd: "url('../../images/blackBG.png')",
    text: "As you move to return to the entrance of the bathroom, you see a vivid shimmering of light coming from the direction of the kitchen. Perhaps it would be best to return towards the hallway",
    options: [
      {
        text: 'proceed',
        nextText: 39,
      }
    ]
  },
  {
    //start of Kitchen Exploration
    id: 39,
    bkgd: "url('../../images/blackBG.png')",
    text: "You exit the bathroom to find that the fog that blocked your view previously has been cleared around the kitchen.",
    options: [
      {
        text: 'proceed',
        nextText: 40,
      }
    ]
  },
  {
    //main options
    id: 40,
    bkgd: "url('../../images/kitchen.png')",
    text: "you search for the remaining items left for the ritual by checking...",
    options: [
      {
        text: 'knife block',
        nextText: 41
      },
      {
        text: 'cabinet',
        nextText: 44
      },
      {
        text: 'fridge',
        nextText: 45
      }
    ]
  },
  {
    //knife block
    id: 41,
    bkgd: "url('../../images/blackBG.png')",
    text: "You checked the knife block and noticed several missing from their slots. There were tiny amounts of blood splattered across the block.",
    options: [
      {
        text: 'pull one out',
        nextText: 42,
      }
    ]
  },
  {
    //knife block pt. 2
    id: 42,
    bkgd: "url('../../images/blackBG.png')",
    text: "You slid one of the remaining ones out to find something scribbled across its blade in a dark red liquid that appears to be dried blood.",
    options: [
      {
        text: 'Examine the words',
        setState: {incantation1: true},
        nextText: 43,
      }
    ]
  },
  {
    //knife block pt. 3
    id: 43,
    bkgd: "url('../../images/blackBG.png')",
    text: "You brought it closer to you, trying to make out the tiny words written.\n\n" +
    "In nomine Magni Dei Nostri Satanas. Introibo ad altare Domini Inferi.\n\n" +
    "After reciting the words out loud, your head begins to throb uncontrollably. The words resounded in your mind like someone is whispering the sentences continuously in both your ears. This is the devil’s chant–there is no mistaking it, it must be the incantation. The excruciating " + 
    "headache lasted for a few more seconds before subsiding along with the voices.",
    options: [
      {
        text: 'return',
        requiredState: (currentState) => (!currentState.bowl),
        nextText: 40
      },
      {
        text: 'return',
        requiredState: (currentState) => (currentState.bowl),
        nextText: 46
      }
    ]
  },
  {
    //cabinet
    id: 44,
    bkgd: "url('../../images/blackBG.png')",
    text: "You remembered the bowl you needed for the ritual. You looked through the cabinet to find a large metal bowl. When you picked it up, however, an image flashed before your eyes. It was only for a split second, but you can make out the large figure of a man. You turn around and the images begin to flash again but " + 
    "more rapidly this time in one continuous progression of scenes. You see the man again, but he was in an angry rampage in the same kitchen you were standing in. He was throwing knives, plates, and anything he could get his hands at the frightened woman curled up on the ground before him. Bits and pieces of shattered plates " + 
    "and bowls were scattered all around. You watched the woman shivering on the ground in tears before you, a stream of blood trickling down from a large blow on her head down her face. There was blood everywhere. On the countertops, the floor, the cabinets like you were witnessing a murder take place. The images stopped abruptly, " + 
    "replaced by the bowl that you had grabbed from the cabinet.",
    options: [
      {
        text: 'return',
        setState: {bowl: true},
        requiredState: (currentState) => (!currentState.incantation1),
        nextText: 40,
      },
      {
        text: 'return',
        setState: {bowl: true},
        requiredState: (currentState) => (currentState.incantation1),
        nextText: 46
      }
    ]
  },
  {
    //FRIDGE
    id: 45,
    bkgd: "url('../../images/blackBG.png')",
    text: "You looked inside your fridge. There was nothing in there other than a few bottles of water and some fruits your mom dropped off the other day. There doesn’t seem to be anything of interest here. ",
    options: [
      {
        text: 'return',
        nextText: 40,
      }
    ]
  },
  {
    //after collecting bowl and incantation #1 -  proceed to dining scene
    id: 46,
    bkgd: "url('../../images/blackBG.png')",
    text: "Across the kitchen in the dining area, you see a small flicker of light in the midst of the fog.",
    options: [
      {
        text: 'proceed',
        nextText: 47,
      }
    ]
  },
  {
    //placeholder 
    id: 100, //ending 1
    bkgd: "url('../../images/.png')",
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    //placeholder
    id: 101, //ending 2
    bkgd: "url('../../images/.png')",
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()
