import 'dotenv/config';
import Bird from "./bird";

function main() {
    let bird: Bird

    switch (process.env.BIRD) {
        default:
            throw new Error("🦃🐔🕊️🦆🦅🚫");
    }

    birdSpeak(bird);
}

export function birdSpeak(bird: Bird): string {
    return bird.speak();
}

main();
