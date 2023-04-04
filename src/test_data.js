import walkingimg from '../src/app/assets/walkingimg.jpeg'
import cycling from '../src/app/assets/Cycling-While-Pregnant.avif'
import prenatalyoga from '../src/app/assets/prenatal.webp'
import swimming from '../src/app/assets/swimming.jpeg'

export const TRIMESTER_EXERCISES = [
    {
        id:0,
        exercise:"Walking",
        description:"Walk around for 30 minutes. To make it a challenging yet safe, try walking up and down a small incline hill. Take deep breaths every few minutes as you walk. ",
        poll:'Did you try it?',
        answer: ['yes', 'no'],
        image: walkingimg,
        name: 'woman walking'
    },
    {   
        id:1,
        exercise:"Riding a bike",
        description:'Use a stationary bike and pedal for at least 45 minutes. Take a short 20 second break after each 15 minutes.This exercise is especially helpful as your belly grows and your center of gravity shifts so there is less risk of falling. ',
        poll:'Did you try it?',
        answer: ['yes', 'no'],
        image: cycling,
        name: 'woman riding a bike'

    },
    {   
        id:2,
        exercise:"Prenatal yoga",
        description: 'Try a few stretches and breathing techniques with prenatal yoga. Try the cow and cat pose (Begin on all fours with hands shoulder width apart and knees hip-width apart. Inhale and lift breastbone and tailbone toward the sky and then exhale and round the spine in the shape of a rainbow.)',
        poll: 'Did you try it?',
        image: prenatalyoga,
        answer: ['yes', 'no']
    },
    {   
        id:3,
        exercise:"Swimming",
        description: 'Swimming is safe during all trimesters of pregnancy. It can be very soothing on the joints and other aches and pains. Consider swimming for 30 minutes at a time. Be cautious not to overexert yourself and be mindful of the water temperature.',
        poll: 'Did you try it?',
        image: swimming,
        answer: ['yes', 'no']
    }
]

export const TRIMESTER_POLL = [
    {
        id:0,
        exerciseId:0,
        answer: 'yes'
        
    },
    {
        id:1,
        exerciseId:1,
        answer: 'no'
        
    },
    {
        id:2,
        exerciseId: 2,
        answer: 'yes'
        
    },
    {
        id:3,
        exerciseId: 3,
        answer: 'no'
        
    },
]