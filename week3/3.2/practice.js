const brain = {
  energyLevel: "low",
  thoughts: ["coffee", "nap", "why am I coding?", "zzz"],
  motivation: 0,
  tasks: {
    todo: ["write code", "debug", "cry softly"],
    done: []
  },
  status: function() {
    return `I'm ${this.energyLevel} on energy, ${this.motivation}% motivated, and dreaming of ${this.thoughts[0]}.`;
  }
}
// stimulate a tired coder trying to work
for (let i = 0; i < 3; i++) {
  if (brain.energyLevel === "low") {
    console.log(`Tried to do "${brain.tasks.todo[i]}" ... but fell asleep`);
    brain.thoughts.push("maybe tomorrow");
  } else {
    brain.tasks.done.push(brain.tasks.todo[i]);
    console.log(`Completed task: "${brain.tasks.todo[i]}"`);
  }
}
console.log(brain.status());
