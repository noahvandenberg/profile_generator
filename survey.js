const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {}

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  profile.name = answer;

  rl.question('What\'s an activity you like doing?', (answer) => {
    profile.activity = answer;

    rl.question('What do you listen to while doing that?', (answer) => {
      profile.listen = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        profile.meal = answer;

        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          profile.food = answer;

          rl.question('Which sport is your absolute favourite?', (answer) => {
            profile.sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              profile.superpower = answer;

              console.log(`Hi! I'm ${profile.name}. Most of the time you can find me listening to ${profile.listen} while ${profile.activity} or watching ${profile.sport}. When hunger < 20% && time === ${profile.meal} i'll be munching one some ${profile.food}. Need some help? i'm best known for my ability to ${profile.superpower}`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});



// const askQuestion = (question) => {
//   rl.question(question, (answer) => {
//     console.log(`Cool?: ${answer}`);
//     rl.close()
//   });
// };

// const questionsArray = [
//   'What\'s your name? Nicknames are also acceptable :)',
//   'What\'s an activity you like doing?',
//   'What do you listen to while doing that?',
//   'Which meal is your favourite (eg: dinner, brunch, etc.)',
//   'What\'s your favourite thing to eat for that meal?',
//   'Which sport is your absolute favourite?',
//   'What is your superpower? In a few words, tell us what you are amazing at!',
// ];


// questionsArray.forEach(element => {
//   askQuestion(element);
// });