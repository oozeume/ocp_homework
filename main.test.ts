import Duck from './duck';
import { birdSpeak } from './main';
import Pigeon from './pigeon';

describe('birdSpeak', function () {
  test('duck', () => {
    expect(birdSpeak(new Duck())).toBe('duck duck');
  });

  test('pigeon', () => {
    expect(birdSpeak(new Pigeon())).toBe('goo goo');
  });
});
