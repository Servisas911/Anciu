function rastiPoras(skaiciuEilute) {
    let poros = {};
    const ilgis = 2;

    for (let i = 0; i < skaiciuEilute.length - ilgis + 1; i++) {
        const pora = skaiciuEilute.substring(i, i + ilgis);
        poros[pora] = (poros[pora] || 0) + 1;
    }

    let daugiausiaiPoru = Object.keys(poros).reduce(function (a, b) {
        return poros[a] > poros[b] ? a : b;
    });

    let pasikartojimuSk = poros[daugiausiaiPoru];

    return [daugiausiaiPoru, pasikartojimuSk];
}

const skaiciuEilute = "402118981140319273661908409619365869589931925152226605792653837238728310846968618162511391999893812224945858513475313944022455267266565495711080731592814982072";

const [daugiausiaiPoru, pasikartojimuSk] = rastiPoras(skaiciuEilute);

console.log(`Daugiausiai pasikartojanti pora: ${daugiausiaiPoru}`);
console.log(`Pasikartojimu skaicius: ${pasikartojimuSk}`);
