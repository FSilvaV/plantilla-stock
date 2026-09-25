const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const darkModeActive =
            document.body.classList.contains("dark-mode");

        if (darkModeActive) {
            themeToggle.textContent = "☀️";
            themeToggle.title = "Cambiar a modo claro";
        } else {
            themeToggle.textContent = "🌙";
            themeToggle.title = "Cambiar a modo oscuro";
        }
    });
}


/* ==============================
   VENTAS - MEDIOS DE PAGO
================================= */

const paymentOptions =
    document.querySelectorAll(".payment-option");

const paymentDetails =
    document.getElementById("payment-details");


paymentOptions.forEach((button) => {
    button.addEventListener("click", () => {

        paymentOptions.forEach((option) => {
            option.classList.remove("selected");
        });

        button.classList.add("selected");

        const paymentType =
            button.dataset.payment;

        showPaymentDetails(paymentType);
    });
});


function showPaymentDetails(type) {

    if (!paymentDetails) return;

    if (type === "efectivo") {
        paymentDetails.innerHTML = `
            <div class="payment-box">

                <h4>💵 Pago en efectivo</h4>

                <label>
                    Total de la venta
                </label>

                <strong>$5.370</strong>

                <label for="cash-received">
                    Monto recibido
                </label>

                <input
                    id="cash-received"
                    type="number"
                    placeholder="Ej: 10000"
                >

                <div class="change-result">
                    Vuelto:
                    <strong id="change-amount">
                        $0
                    </strong>
                </div>

            </div>
        `;

        setupCashCalculation();
    }


    if (type === "debito") {
        paymentDetails.innerHTML = `
            <div class="payment-box">

                <h4>💳 Pago con débito</h4>

                <p>
                    Total a cobrar:
                    <strong>$5.370</strong>
                </p>

                <span class="payment-message">
                    Registra el pago en el terminal
                    y luego confirma la venta.
                </span>

            </div>
        `;
    }


    if (type === "credito") {
        paymentDetails.innerHTML = `
            <div class="payment-box">

                <h4>💳 Pago con crédito</h4>

                <label for="installments">
                    Número de cuotas
                </label>

                <select id="installments">
                    <option>1 cuota</option>
                    <option>3 cuotas</option>
                    <option>6 cuotas</option>
                    <option>12 cuotas</option>
                </select>

            </div>
        `;
    }


    if (type === "fiado") {
        paymentDetails.innerHTML = `
            <div class="payment-box">

                <h4>📒 Venta fiada</h4>

                <label for="client-search">
                    Cliente
                </label>

                <input
                    id="client-search"
                    type="text"
                    placeholder="Buscar por nombre o código..."
                >

                <div class="demo-client">

                    <div>
                        <strong>Juan Pérez</strong>
                        <span>CLI-0001</span>
                    </div>

                    <button
                        type="button"
                        class="table-action"
                        id="select-demo-client"
                    >
                        Seleccionar
                    </button>

                </div>

                <div
                    id="selected-client"
                    class="selected-client"
                ></div>

            </div>
        `;

        setupFiadoDemo();
    }
}


/* ==============================
   CÁLCULO DE EFECTIVO
================================= */

function setupCashCalculation() {

    const input =
        document.getElementById("cash-received");

    const change =
        document.getElementById("change-amount");

    if (!input || !change) return;

    input.addEventListener("input", () => {

        const total = 5370;
        const received = Number(input.value);
        const result = received - total;

        if (result >= 0) {
            change.textContent =
                `$${result.toLocaleString("es-CL")}`;
        } else {
            change.textContent = "$0";
        }
    });
}


/* ==============================
   DEMO DE VENTA FIADA
================================= */

function setupFiadoDemo() {

    const selectButton =
        document.getElementById("select-demo-client");

    const selectedClient =
        document.getElementById("selected-client");

    if (!selectButton || !selectedClient) {
        return;
    }

    selectButton.addEventListener("click", () => {

        selectedClient.innerHTML = `
            <div class="selected-client-card">

                <span>Cliente seleccionado</span>

                <strong>
                    Juan Pérez · CLI-0001
                </strong>

                <span>
                    Deuda actual: $17.870
                </span>

                <span>
                    Nueva compra: $5.370
                </span>

                <strong>
                    Nueva deuda: $23.240
                </strong>

            </div>
        `;
    });
}