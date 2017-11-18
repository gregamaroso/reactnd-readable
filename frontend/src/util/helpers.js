
export function transformEpochToDate(val) {
  const d = new Date(val);
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}
