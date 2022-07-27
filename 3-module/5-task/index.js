function getMinMax(str) {
  let result = {};
  let parse = [];
  for (let i = 0; i < str.length; i += 1) {
    if (!isNaN(parseFloat(str.slice(i)))) {
      parse.push(String(parseFloat(str.slice(i))));
      i += parse[parse.length - 1].length;
    }
  }
  parse.sort((a, b) => a - b);
  result.max = Number(parse.at(-1));
  result.min = Number(parse.at(0));
  return result;
}
