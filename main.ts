import 'dotenv/config';
import Bird from './bird';
import Duck from './duck';
import Pigeon from './pigeon';

function main() {
  let bird: Bird;

  switch (process.env.BIRD) {
    case 'duck':
      bird = new Duck();
      break;
    case 'pigeon':
      bird = new Pigeon();
      break;
    default:
      throw new Error('🦃🐔🕊️🦆🦅🚫');
  }

  birdSpeak(bird);
}

export function birdSpeak(bird: Bird): string {
  return bird.speak();
}

main();

// Open: bird에 다른 동물이 오더라도 speak()함수를 사용해 원하는 return값을 얻을 수 있는 것

// Close: class 상속으로 인해 같은 함수를 사용할 수 있기 떄문에 기존 Bird 코드의 변경 없이 원하는 return 값을 얻을 수 있는 것
