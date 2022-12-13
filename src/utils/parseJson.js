export function parseJson(string) {
  try {
    return JSON.parse(string);
  } catch {
    return [];
  }
}
