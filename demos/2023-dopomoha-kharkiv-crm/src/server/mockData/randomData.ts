import { baseEngModifiers, createGrammar } from 'tracery-grammar'
import { volunteers, volunteersEng } from './spreadsheetOptions'

const appealElements = {
  openings: [
    '',
    'Please help!\n',
    'Urgent! ',
    'Dear volunteers, asking for your help again!\n',
  ],
  introductions: [
    'We are a family of #numbers#',
    'After my family has evacuated, I stayed behind with my #disabilities# #familyMembers#',
    'We are a group of displaced individuals in Kharkiv',
    'We are a local community',
  ],
  disabilities: ['elderly', 'disabled', 'hospitalized'],
  familyMembers: ['grandmother', 'grandfather', 'mother'],
  numbers: ['three', 'four', 'five', 'six', 'seven'],
  circumstances: [
    'struggling to make ends meet due to the ongoing crisis',
    'forced to leave our homes due to the conflict',
    'displaced by russian invasion',
    'with no means to keep ourselves warm during these harsh times',
    'who’ve lost everything when shelling destroyed our home',
  ],
  pleads: [
    'Our children are hungry, and we desperately need',
    'We are in dire need of',
    'Many of us are in need of',
  ],
  resources: [
    'food and clean water to survive',
    'warm blankets and winter clothing as the temperatures continue to drop',
    'basic medical supplies and medications',
    'psychological support and counseling services to cope with these experiences',
    'warm meals, blankets, and hygiene kits to survive',
  ],
  motivators: [
    'Any assistance you can provide will make a significant difference in our lives.',
    'Your kind donations can help us stay safe and comfortable this winter.',
    'Your support can help us access the necessary healthcare and medicine to stay healthy and resilient.',
    'Your assistance can bring hope and healing to our community.',
    'With your help we can get through these tough times',
  ],
  messages: [
    `We are a family of five in Kharkiv, Ukraine, struggling to make ends meet due to the ongoing crisis.
Our children are hungry, and we desperately need food and clean water to survive.
Any assistance you can provide will make a significant difference in our lives.`,

    `Please help! Our elderly neighbors here are in dire need of warm blankets and winter clothing as the temperatures continue to drop.
They have no means to keep themselves warm during these harsh times.
Your kind donations can help them stay safe and comfortable this winter.`,

    `We are a group of displaced individuals in Kharkiv, forced to leave our homes due to the conflict.
Many of us are in need of basic medical supplies and medications.
Your support can help us access the necessary healthcare and medicine to stay healthy and resilient.`,

    `In Kharkiv, there is a local community of children who have been traumatized by the ongoing conflict.
They urgently require psychological support and counseling services to help them cope with their experiences.
Your assistance can bring hope and healing to these young lives.`,

    `A shelter in Kharkiv is in need of warm meals, blankets, and hygiene kits to survive.
Lets help them to get through these tough times together`,
  ],
}

const addressElements = {
  streets: [
    'Street',
    'Avenue',
    'Lane',
    'Boulevard',
    'Road',
    'Drive',
    'Alley',
    'Plaza',
  ],

  animals: [
    'Lion',
    'Tiger',
    'Elephant',
    'Giraffe',
    'Cheetah',
    'Hippopotamus',
    'Kangaroo',
    'Zebra',
    'Dolphin',
    'Penguin',
    'Koala',
    'Gorilla',
    'Polar Bear',
    'Camel',
    'Rhinoceros',
    'Leopard',
    'Hawk',
    'Ostrich',
    'Crocodile',
    'Panda',
  ],
}

const originData = {
  ...appealElements,
  ...addressElements,
  volunteersEng: [...volunteersEng],
  volunteers: [...volunteers, '#volunteersEng#'],

  addresses: ['#animals# #streets#'],

  stories: [
    '#openings##introductions#, #circumstances#.\n\n#pleads# #resources#\n\n#motivators#',
  ],

  origin: ['#stories#', '#messages#'],
} as const

export const randomData = createGrammar(
  originData as unknown as Record<string, string | string[]>,
)

randomData.addModifiers(baseEngModifiers)
