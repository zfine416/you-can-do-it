const temperaments = [{
    name: "Active"
  },
  {
    name: "Affectionate"
  },
  {
    name: "Alert"
  },
  {
    name: "Attentive"
  },
  {
    name: "Companionable"
  },
  {
    name: "Composed"
  },
  {
    name: "Confident"
  },
  {
    name: "Courageous"
  },
  {
    name: "Devoted"
  },
  {
    name: "Dignified"
  },
  {
    name: "Docile"
  },
  {
    name: "Dominant"
  },
  {
    name: "Energetic"
  },
  {
    name: "Faithful"
  },
  {
    name: "Friendly"
  },
  {
    name: "Gentle"
  },
  {
    name: "Good-tempered"
  },
  {
    name: "Intelligent"
  },
  {
    name: "Kind"
  },
  {
    name: "Lively"
  },
  {
    name: "Loyal"
  },
  {
    name: "Mischievous"
  },
  {
    name: "Obedient"
  },
  {
    name: "Playful"
  },
  {
    name: "Protective"
  },
  {
    name: "Receptive"
  },
  {
    name: "Reliable"
  },
  {
    name: "Reserved"
  },
  {
    name: "Responsive"
  },
  {
    name: "Spirited"
  },
  {
    name: "Stubborn"
  },
  {
    name: "Territorial"
  },
  {
    name: "Trainable"
  },
  {
    name: "Vocal"
  }
];

const breedSizes = [{
  name: 'Small',
  size: {
    min: 0,
    max: 43
  }
}, {
  name: 'Medium',
  size: {
    min: 43,
    max: 50
  }
}, {
  name: 'Large',
  size: {
    min: 50,
    max: 99
  }
}];

export function getBreedSizes() {
  return breedSizes;
};

export function getTemperaments() {
  return temperaments;
};