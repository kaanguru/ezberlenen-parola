function range(sta, end) {
    return Array.from({ length: end - sta }, (_, i) => sta + i);
}
function ilkHarfiBuyut(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function karisikKelimeSec(kaynak) {
    return kaynak[Math.floor(Math.random() * kaynak.length)];
}
export { range, ilkHarfiBuyut, karisikKelimeSec };
