interface Bird {
  speak(): string;
}

class Bird implements Bird {
  speak(): string {
    return this.speak();
  }
}

export default Bird;
