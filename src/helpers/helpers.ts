function range(sta: number, end: number) {
  return Array.from({ length: end - sta }, (_, i) => sta + i);
}
function ilkHarfiBuyut(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function karisikKelimeSec(kaynak: string[]) {
  return kaynak[Math.floor(Math.random() * kaynak.length)];
}
export { range, ilkHarfiBuyut, karisikKelimeSec };
