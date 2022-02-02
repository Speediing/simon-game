export function timeout(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
