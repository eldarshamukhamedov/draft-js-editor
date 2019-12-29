export const matchAll = (text: string, regex: RegExp) => {
  const matches = [];
  while (true) {
    const result = regex.exec(text);
    if (!result) break;

    matches.push({
      text,
      match: result[0],
      captures: result.slice(1),
      start: result.index,
      end: result.index + result[0].length,
    });
  }
  return matches;
};
