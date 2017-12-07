
export function transformEpochToDate(val) {
  const d = new Date(val);
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

export function generateRandomPostId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 14);
}
