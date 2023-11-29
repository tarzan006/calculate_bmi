// calculate BMI (Assignment - Programmers group chat)

const calculateBmi = (weights, heights) => {
  return Math.floor((bmi = weights / heights ** 2));
};

const compareBmi = (waseemBmi, aliBmi) => waseemBmi > aliBmi;

// data 1
const waseemWeights = 78;
const waseemHeights = 1.69;

const aliWeights = 92;
const aliHeights = 1.95;

// data 2
// const waseemWeights = 95;
// const waseemHeights = 1.88;

// const aliWeights = 85;
// const aliHeights = 1.76;

const waseemBmi = calculateBmi(waseemWeights, waseemHeights);
const aliBmi = calculateBmi(aliWeights, aliHeights);

const waseemHeigherBMI = compareBmi(waseemBmi, aliBmi);
console.log(
  `Waseem's BMI: ${waseemBmi}, Ali's BMI:${aliBmi}, Is Waseem BMI heigher then Ali? ${waseemHeigherBMI}`
);
