export const typePassword = (typePassword) => {
  let result = "";
  const objName = Object.keys(typePassword);
  objName.map((p, index) => {
    console.log(typePassword[objName[index]] === true);
    typePassword[objName[index]] === true
      ? (result += objName[index].charAt(0))
      : null;
  });

  return result;
};
