import walkingimg from '../src/app/assets/walkingimg.jpeg'
import cycling from '../src/app/assets/Cycling-While-Pregnant.avif'
import prenatalyoga from '../src/app/assets/prenatal.webp'
import swimming from '../src/app/assets/swimming.jpeg'
import weight from '../src/app/assets/weight.jpeg'
import dance from '../src/app/assets/dance.jpeg'
import bananatoast from '../src/app/assets/bananatoast.jpeg'
import eggs from '../src/app/assets/eggs.jpeg'
import cheese from '../src/app/assets/cheese.jpeg'
import yogurt from '../src/app/assets/yogurt.jpg'
import fruits from '../src/app/assets/fruit.jpeg'
import smoothie from '../src/app/assets/smoothie.jpeg'

export const TRIMESTER_EXERCISES = [
    {
        id:0,
        exercise:"Walking",
        description:"Walk around for 30 minutes. To make it a challenging yet safe, try walking up and down a small incline hill. Take deep breaths every few minutes as you walk. ",
        poll:'Did you try it?',
        answer: ['yes', 'no'],
        image: walkingimg,
        name: 'woman walking',
      
    },
    {   
        id:1,
        exercise:"Riding a bike",
        description:'Use a stationary bike and pedal for at least 45 minutes. Take a short 20 second break after each 15 minutes.This exercise is especially helpful as your belly grows and your center of gravity shifts so there is less risk of falling. ',
        poll:'Did you try it?',
        answer: ['yes', 'no'],
        image: cycling,
        name: 'woman riding a bike',

    },
    {   
        id:2,
        exercise:"Prenatal yoga",
        description: 'Try a few stretches and breathing techniques with prenatal yoga. Try the cow and cat pose (Begin on all fours with hands shoulder width apart and knees hip-width apart. Inhale and lift breastbone and tailbone toward the sky and then exhale and round the spine in the shape of a rainbow.)',
        poll: 'Did you try it?',
        answer: ['yes', 'no'],
        image: prenatalyoga,
        name: 'prenatal yoga'
    },
    {   
        id:3,
        exercise:"Swimming",
        description: 'Swimming is safe during all trimesters of pregnancy. It can be very soothing on the joints and other aches and pains. Consider swimming for 30 minutes at a time. Be cautious not to overexert yourself and be mindful of the water temperature.',
        poll: 'Did you try it?',
        image: swimming,
        answer: ['yes', 'no'],
        name: 'woman swimming'
    },
    {
        id:4,
        exercise: "Strength training",
        description: "Use small weights like 1lbs or 2lbs to help you build muscle. Use the weights in a slow and contolled manner to make sure you don't use any jerky movements.",
        poll: 'Did you try it?',
        image: weight,
        answer: ['yes', 'no'],
        name: 'woman lighting weights'
    },
    {
        id:5,
        exercise: "Aerobic/Dance class",
        description: "Low-impact aerobic or dance class is a great way to get your heart pumping. Just ensure to avoid jumping. As a bonus, babies love when moms listen to music.",
        poll: 'Did you try it?',
        image: dance,
        answer: ['yes', 'no'],
        name: 'woman dancing'
    }

]

export const PREG_SNACKS = [
    {
        id:0,
        snack: 'Banana and Peanut Butter',
        label: 'This is a healthy source of potassium and protein. Put it in a smoothie, on toast, or eat it together plain. Any way is delicious!',
        image: bananatoast,
        name: 'bananas on toast',
      
        
    },
    {
        id:1,
        snack: 'Eggs',
        image: eggs,
        label: 'You can hard-boil them or fry them. Eat the yolks since this is where most of the nutrients are. Eggs are a great souce of choline which is important for your developing baby. Just make sure to cook it fully!',
        name: 'hard-boiled eggs',
      
        
    },
    {
        id:2,
        snack: 'Pasterurized Cheese',
        image: cheese,
        label: 'Try cheese with crackers and fruits. Cheese is great for calcium for those bones that the baby is growing.',
        name: 'crackers with cheese and apples'
        
    },
    {
        id:3,
        snack: 'Yogurt',
        image: yogurt,
        label: 'Try going for greek yogurt. This is good for digestion and good source of calcium, protein, and dairy.',
        name: 'greek yogurt'
        
    },
    {
        id:4,
        snack: 'Fresh Fruits',
        image: fruits,
        label: 'Fresh fruits like berries are a great and delicious snack. Avoid pre-cut ones since these could harbor bacteria.',
        name: 'fruits'
        
    },
    {
        id:5,
        snack: 'Smoothies',
        image: smoothie,
        label: 'Smoothies are great way to get sneak in extra nutrients especially when you are feeling nausesous. You can add some spinach to your smoothie to get some natural folic acid.',
        name: 'smoothie'
        
    }
]