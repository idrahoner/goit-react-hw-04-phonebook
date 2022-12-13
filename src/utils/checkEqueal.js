export function checkEqual(firstString, secondString) {
  const lowerFirstString = firstString.toLowerCase();
  const lowerSecondString = secondString.toLowerCase();

  if (lowerFirstString === lowerSecondString) {
    return firstString;
  }

  return '';
}
