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
    bkgd: "url('../../images/.png')",
    text: 'insert image of letter',
    options: [
      {
        text: 'Proceed',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    bkgd: "url('../../images/.png')",
    text: 'Before you even have the ability to fully process your bewilderment at the letter’s content, the lamp abruptly cuts off. Not long after, the entire apartment begins to shake violently, as if being uprooted from the earth itself. Your head feels like it is about to explode as the sounds of furniture falling and silverware crashing amplify throughout the apartment. Right when you feel as though you’re about to fall apart, it all comes to a complete stop. The sound of the apartment collapsing in on itself has vanished. Silence permeates throughout the pitch-black room. The irritation that was fueling your movements only moments ago has now once again been replaced by an even greater sense. Complete and utter fear.',
    options: [
      {
        text: 'Proceed',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
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
    id: 11,
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
