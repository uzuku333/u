const znamky = [1, 2, 1, 3, 2, 1, 4];

function analyzujProspech(pole) {
    let soucet = 0;

    // CYKLUS: Sečtení všech známek
    for (let i = 0; i < pole.length; i++) {
        soucet += pole[i];
    }

    // Výpočet průměru (SEKVENCE)
    let prumer = soucet / pole.length;
    console.log("Průměr je:", prumer);
}

analyzujProspech(znamky);
