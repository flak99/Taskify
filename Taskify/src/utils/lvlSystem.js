let gainExp = 200,
  userExpAmount = 0,
  basicNeededExp = 120;

export function ExperienceSystem() {
  let basicUserLvl = 1;

  userExpAmount += gainExp;

  if (userExpAmount > basicNeededExp) {
    basicUserLvl += 1;
    basicNeededExp = basicNeededExp * 1.4;
    console.log(basicNeededExp);
  }
  return basicUserLvl;
}

// ExperienceSystem();
