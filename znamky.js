const znamky = [1, 2, 1, 3, 2, 1, 4];

function analyzujProspech(pole) {
    // Validace, zda pole není prázdné
    if (pole.length === 0) {
        console.log("Žádné známky.");
        return;
    }

    let soucet = 0;
    // CYKLUS
    for (let i = 0; i < pole.length; i++) {
        soucet += pole[i];
    }

    let prumer = soucet / pole.length;
    // Zaokrouhlení
    prumer = Math.round(prumer * 100) / 100;

    console.log("Průměrná známka:", prumer);

    // PODMÍNKY pro hodnocení
    if (prumer <= 1.5) {
        console.log("Hodnocení: Vyznamenání 🌟");
    } else if (prumer <= 4.4) {
        console.log("Hodnocení: Prospěl ✅");
    } else {
        console.log("Hodnocení: Neprospěl ❌");
    }
}

analyzujProspech(znamky);
