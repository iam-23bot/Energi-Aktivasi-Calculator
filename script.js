document.getElementById('activationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let T1 = parseFloat(document.getElementById('T1').value) + 273.15; // Convert to Kelvin
    let k1 = parseFloat(document.getElementById('k1').value);
    let T2 = parseFloat(document.getElementById('T2').value) + 273.15; // Convert to Kelvin
    let k2 = parseFloat(document.getElementById('k2').value);

    if (isNaN(T1) || isNaN(k1) || isNaN(T2) || isNaN(k2)) {
        document.getElementById('result').innerText = "Please provide valid inputs.";
        return;
    }

    const R = 8.314; // Gas constant in J/mol·K
    let ln_k2_k1 = Math.log(k2 / k1);
    let delta_1_T1_T2 = (1 / T1) - (1 / T2);
    let Ea = (ln_k2_k1 * R) / delta_1_T1_T2;

    document.getElementById('result').innerText = `Energy Activation (Ea): ${Ea.toFixed(2)} J/mol`;
});
