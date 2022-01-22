// var capitalizeTitle = function (title) {
//   const replaceAt = (index, char) => {
//     if (index === 0) {
//       title = char + title.slice(1);
//       return;
//     }
//     if (index === title.length - 1) {
//       title = title.slice(0, index) + char;
//       return;
//     }
//     title = title.slice(0, index) + char + title.slice(index + 1);
//     return;
//   };
//   title = title.toLowerCase();
//   let l = 0;
//   let r = 1;
//   let noSpace = true;
//   for (let i = 1; i < title.length; i++) {
//     if ((title[i + 1] === " " && title[i] !== " ") || i === title.length - 1)
//       r = i;
//     if (title[i - 1] === " " && i > 0) {
//       l = i;
//       noSpace = false;
//     }
//     if (r - l > 1) replaceAt(l, title[l].toUpperCase());
//   }
//   if (noSpace && title.length > 2) replaceAt(0, title[0].toUpperCase());
//   console.log(title);
//   return title;
// };

//split
var capitalizeTitle = function (title) {
  let words = title.toLowerCase().split(" ");
  let result = "";
  for (let i of words) {
    if (i.length > 2) result += i[0].toUpperCase() + i.slice(1) + " ";
    else result += i + " ";
  }
  return result.slice(0, -1);
};
console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTeR of EACH Word"));
console.log(capitalizeTitle("i t leTTeR of EACH Word"));
console.log(capitalizeTitle("LPJOJ"));
console.log(capitalizeTitle("IUz g OM"));
console.log(capitalizeTitle("a"));
console.log(capitalizeTitle(""));
