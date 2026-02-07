// ============================================================
// Firas's Traveler - Currency Converter
// ============================================================

const CURRENCIES = {
    USD: { name: "US Dollar", flag: "\u{1F1FA}\u{1F1F8}", symbol: "$" },
    EUR: { name: "Euro", flag: "\u{1F1EA}\u{1F1FA}", symbol: "\u20AC" },
    GBP: { name: "British Pound", flag: "\u{1F1EC}\u{1F1E7}", symbol: "\u00A3" },
    TRY: { name: "Turkish Lira", flag: "\u{1F1F9}\u{1F1F7}", symbol: "\u20BA" },
    SAR: { name: "Saudi Riyal", flag: "\u{1F1F8}\u{1F1E6}", symbol: "\uFDFC" },
    AED: { name: "UAE Dirham", flag: "\u{1F1E6}\u{1F1EA}", symbol: "AED" },
    JPY: { name: "Japanese Yen", flag: "\u{1F1EF}\u{1F1F5}", symbol: "\u00A5" },
    CNY: { name: "Chinese Yuan", flag: "\u{1F1E8}\u{1F1F3}", symbol: "\u00A5" },
    KRW: { name: "South Korean Won", flag: "\u{1F1F0}\u{1F1F7}", symbol: "\u20A9" },
    INR: { name: "Indian Rupee", flag: "\u{1F1EE}\u{1F1F3}", symbol: "\u20B9" },
    CAD: { name: "Canadian Dollar", flag: "\u{1F1E8}\u{1F1E6}", symbol: "C$" },
    AUD: { name: "Australian Dollar", flag: "\u{1F1E6}\u{1F1FA}", symbol: "A$" },
    CHF: { name: "Swiss Franc", flag: "\u{1F1E8}\u{1F1ED}", symbol: "CHF" },
    SEK: { name: "Swedish Krona", flag: "\u{1F1F8}\u{1F1EA}", symbol: "kr" },
    NOK: { name: "Norwegian Krone", flag: "\u{1F1F3}\u{1F1F4}", symbol: "kr" },
    DKK: { name: "Danish Krone", flag: "\u{1F1E9}\u{1F1F0}", symbol: "kr" },
    PLN: { name: "Polish Zloty", flag: "\u{1F1F5}\u{1F1F1}", symbol: "z\u0142" },
    CZK: { name: "Czech Koruna", flag: "\u{1F1E8}\u{1F1FF}", symbol: "K\u010D" },
    HUF: { name: "Hungarian Forint", flag: "\u{1F1ED}\u{1F1FA}", symbol: "Ft" },
    MXN: { name: "Mexican Peso", flag: "\u{1F1F2}\u{1F1FD}", symbol: "Mex$" },
    BRL: { name: "Brazilian Real", flag: "\u{1F1E7}\u{1F1F7}", symbol: "R$" },
    ZAR: { name: "South African Rand", flag: "\u{1F1FF}\u{1F1E6}", symbol: "R" },
    THB: { name: "Thai Baht", flag: "\u{1F1F9}\u{1F1ED}", symbol: "\u0E3F" },
    SGD: { name: "Singapore Dollar", flag: "\u{1F1F8}\u{1F1EC}", symbol: "S$" },
    HKD: { name: "Hong Kong Dollar", flag: "\u{1F1ED}\u{1F1F0}", symbol: "HK$" },
    MYR: { name: "Malaysian Ringgit", flag: "\u{1F1F2}\u{1F1FE}", symbol: "RM" },
    PHP: { name: "Philippine Peso", flag: "\u{1F1F5}\u{1F1ED}", symbol: "\u20B1" },
    IDR: { name: "Indonesian Rupiah", flag: "\u{1F1EE}\u{1F1E9}", symbol: "Rp" },
    EGP: { name: "Egyptian Pound", flag: "\u{1F1EA}\u{1F1EC}", symbol: "E\u00A3" },
    NGN: { name: "Nigerian Naira", flag: "\u{1F1F3}\u{1F1EC}", symbol: "\u20A6" },
    KWD: { name: "Kuwaiti Dinar", flag: "\u{1F1F0}\u{1F1FC}", symbol: "KD" },
    QAR: { name: "Qatari Riyal", flag: "\u{1F1F6}\u{1F1E6}", symbol: "QR" },
    BHD: { name: "Bahraini Dinar", flag: "\u{1F1E7}\u{1F1ED}", symbol: "BD" },
    OMR: { name: "Omani Rial", flag: "\u{1F1F4}\u{1F1F2}", symbol: "OMR" },
    JOD: { name: "Jordanian Dinar", flag: "\u{1F1EF}\u{1F1F4}", symbol: "JD" },
    IQD: { name: "Iraqi Dinar", flag: "\u{1F1EE}\u{1F1F6}", symbol: "IQD" },
    NZD: { name: "New Zealand Dollar", flag: "\u{1F1F3}\u{1F1FF}", symbol: "NZ$" },
    RUB: { name: "Russian Ruble", flag: "\u{1F1F7}\u{1F1FA}", symbol: "\u20BD" },
    UAH: { name: "Ukrainian Hryvnia", flag: "\u{1F1FA}\u{1F1E6}", symbol: "\u20B4" },
    RON: { name: "Romanian Leu", flag: "\u{1F1F7}\u{1F1F4}", symbol: "lei" },
    BGN: { name: "Bulgarian Lev", flag: "\u{1F1E7}\u{1F1EC}", symbol: "\u043B\u0432" },
    HRK: { name: "Croatian Kuna", flag: "\u{1F1ED}\u{1F1F7}", symbol: "kn" },
    ISK: { name: "Icelandic Krona", flag: "\u{1F1EE}\u{1F1F8}", symbol: "kr" },
    TWD: { name: "Taiwan Dollar", flag: "\u{1F1F9}\u{1F1FC}", symbol: "NT$" },
    VND: { name: "Vietnamese Dong", flag: "\u{1F1FB}\u{1F1F3}", symbol: "\u20AB" },
    PKR: { name: "Pakistani Rupee", flag: "\u{1F1F5}\u{1F1F0}", symbol: "Rs" },
    BDT: { name: "Bangladeshi Taka", flag: "\u{1F1E7}\u{1F1E9}", symbol: "\u09F3" },
    LKR: { name: "Sri Lankan Rupee", flag: "\u{1F1F1}\u{1F1F0}", symbol: "Rs" },
    MAD: { name: "Moroccan Dirham", flag: "\u{1F1F2}\u{1F1E6}", symbol: "MAD" },
    TND: { name: "Tunisian Dinar", flag: "\u{1F1F9}\u{1F1F3}", symbol: "DT" },
    KES: { name: "Kenyan Shilling", flag: "\u{1F1F0}\u{1F1EA}", symbol: "KSh" },
    GHS: { name: "Ghanaian Cedi", flag: "\u{1F1EC}\u{1F1ED}", symbol: "GH\u20B5" },
};

const DEFAULT_QUICK = ["EUR", "TRY", "SAR", "GBP", "AED", "JPY"];

// ---- State ----
let fromCurrency = localStorage.getItem("ft_from") || "USD";
let toCurrency = localStorage.getItem("ft_to") || "TRY";
let quickCurrencies = JSON.parse(localStorage.getItem("ft_quick")) || [...DEFAULT_QUICK];
let rates = {};
let modalMode = null; // "from", "to", or "editQuick"
let editQuickSelection = [];

// ---- DOM refs ----
const $amountInput = document.getElementById("amountInput");
const $expressionLine = document.getElementById("expressionLine");
const $resultAmount = document.getElementById("resultAmount");
const $rateInfo = document.getElementById("rateInfo");
const $fromCode = document.getElementById("fromCode");
const $toCode = document.getElementById("toCode");
const $fromFlag = document.getElementById("fromFlag");
const $toFlag = document.getElementById("toFlag");
const $ratesStatus = document.getElementById("ratesStatus");
const $statusText = document.getElementById("statusText");
const $quickGrid = document.getElementById("quickGrid");
const $modal = document.getElementById("currencyModal");
const $modalTitle = document.getElementById("modalTitle");
const $modalFooter = document.getElementById("modalFooter");
const $currencyList = document.getElementById("currencyList");
const $currencySearch = document.getElementById("currencySearch");

// ---- API ----
const API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

async function fetchRates(base) {
    const key = base.toLowerCase();
    try {
        const resp = await fetch(`${API_URL}${key}.json`);
        if (!resp.ok) throw new Error("API error");
        const data = await resp.json();
        return data[key] || {};
    } catch {
        try {
            const resp = await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${key}.json`);
            const data = await resp.json();
            return data[key] || {};
        } catch {
            return null;
        }
    }
}

async function loadRates() {
    $ratesStatus.className = "rates-status loading";
    $statusText.textContent = "Updating rates...";

    const data = await fetchRates(fromCurrency);
    if (data) {
        rates = data;
        const now = new Date();
        $ratesStatus.className = "rates-status";
        $statusText.textContent = `Updated ${now.toLocaleTimeString()}`;
        localStorage.setItem("ft_ratesCache", JSON.stringify({ base: fromCurrency, rates, time: Date.now() }));
    } else {
        const cache = JSON.parse(localStorage.getItem("ft_ratesCache") || "null");
        if (cache && cache.base === fromCurrency) {
            rates = cache.rates;
            $ratesStatus.className = "rates-status error";
            $statusText.textContent = "Offline \u2014 using cached rates";
        } else {
            $ratesStatus.className = "rates-status error";
            $statusText.textContent = "Failed to load rates";
        }
    }
    convert();
    renderQuickGrid();
}

// ---- Math evaluation ----
function evaluateExpression(expr) {
    const sanitized = expr.replace(/[^0-9+\-*/.() ]/g, "");
    if (!sanitized || /[+\-*/.]$/.test(sanitized.trim())) return null;
    try {
        const result = Function('"use strict"; return (' + sanitized + ')')();
        return isFinite(result) ? result : null;
    } catch {
        return null;
    }
}

function isExpression(val) {
    return /[+*/]/.test(val) || /(?!^)-/.test(val) || /\d\s*-\s*\d/.test(val);
}

// ---- Conversion ----
function getRate(from, to) {
    if (from === to) return 1;
    const t = to.toLowerCase();
    if (rates[t] !== undefined) return rates[t];
    return null;
}

function convert() {
    const raw = $amountInput.value.trim();
    let amount = 0;

    if (isExpression(raw)) {
        const result = evaluateExpression(raw);
        if (result !== null) {
            amount = result;
            $expressionLine.textContent = `${raw} = ${formatNumber(result)}`;
        } else {
            $expressionLine.textContent = raw + " ...";
        }
    } else {
        amount = parseFloat(raw) || 0;
        $expressionLine.innerHTML = "&nbsp;";
    }

    const rate = getRate(fromCurrency, toCurrency);
    if (rate === null) {
        $resultAmount.textContent = "---";
        $rateInfo.textContent = "Rate unavailable";
        return;
    }
    const result = amount * rate;
    $resultAmount.textContent = formatNumber(result);
    $rateInfo.textContent = `1 ${fromCurrency} = ${formatNumber(rate, 4)} ${toCurrency}`;

    localStorage.setItem("ft_lastInput", raw);
}

function formatNumber(num, minDecimals) {
    if (Math.abs(num) < 0.01 && num !== 0) return num.toFixed(6);
    const dec = minDecimals || (Math.abs(num) >= 100 ? 2 : Math.abs(num) >= 1 ? 3 : 4);
    return num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: dec });
}

// ---- UI Updates ----
function updateCurrencyDisplay() {
    const from = CURRENCIES[fromCurrency] || { flag: "", name: fromCurrency };
    const to = CURRENCIES[toCurrency] || { flag: "", name: toCurrency };
    $fromCode.textContent = fromCurrency;
    $toCode.textContent = toCurrency;
    $fromFlag.textContent = from.flag;
    $toFlag.textContent = to.flag;
    localStorage.setItem("ft_from", fromCurrency);
    localStorage.setItem("ft_to", toCurrency);
}

// ---- Quick Grid ----
function renderQuickGrid() {
    $quickGrid.innerHTML = "";
    const raw = $amountInput.value.trim();
    let amount = 0;
    if (isExpression(raw)) {
        const result = evaluateExpression(raw);
        if (result !== null) amount = result;
    } else {
        amount = parseFloat(raw) || 0;
    }

    quickCurrencies.forEach(code => {
        const cur = CURRENCIES[code] || { flag: "", name: code };
        const card = document.createElement("div");
        card.className = "quick-card" + (code === toCurrency ? " active" : "");

        let converted = "";
        if (amount > 0 && rates[code.toLowerCase()] !== undefined) {
            const val = amount * rates[code.toLowerCase()];
            converted = formatNumber(val);
        }

        card.innerHTML = `
            <span class="flag">${cur.flag}</span>
            <div class="code">${code}</div>
            <div class="converted">${converted}</div>
        `;
        card.addEventListener("click", () => {
            toCurrency = code;
            updateCurrencyDisplay();
            convert();
            renderQuickGrid();
        });
        $quickGrid.appendChild(card);
    });
}

// ---- Input events ----
$amountInput.addEventListener("input", () => {
    convert();
    renderQuickGrid();
});

// ---- Operator buttons ----
document.querySelectorAll(".operator-row .op-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const op = btn.dataset.op;

        if (op === "C") {
            $amountInput.value = "";
            $expressionLine.innerHTML = "&nbsp;";
            convert();
            renderQuickGrid();
            $amountInput.focus();
            return;
        }

        if (op === "=") {
            const raw = $amountInput.value.trim();
            if (isExpression(raw)) {
                const result = evaluateExpression(raw);
                if (result !== null) {
                    $expressionLine.textContent = `${raw} =`;
                    $amountInput.value = String(Math.round(result * 1000000) / 1000000);
                    convert();
                    renderQuickGrid();
                }
            }
            $amountInput.focus();
            return;
        }

        const current = $amountInput.value;
        if (/[+\-*/]$/.test(current.trim())) {
            $amountInput.value = current.trim().slice(0, -1) + op;
        } else {
            $amountInput.value = current + op;
        }
        convert();
        renderQuickGrid();
        $amountInput.focus();
    });
});

$amountInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const raw = $amountInput.value.trim();
        if (isExpression(raw)) {
            const result = evaluateExpression(raw);
            if (result !== null) {
                $expressionLine.textContent = `${raw} =`;
                $amountInput.value = String(Math.round(result * 1000000) / 1000000);
                convert();
                renderQuickGrid();
            }
        }
    }
});

// ---- Swap ----
document.getElementById("swapBtn").addEventListener("click", () => {
    [fromCurrency, toCurrency] = [toCurrency, fromCurrency];
    updateCurrencyDisplay();
    loadRates();
});

// ---- Currency Selector Modal ----
document.getElementById("fromSelector").addEventListener("click", () => openModal("from"));
document.getElementById("toSelector").addEventListener("click", () => openModal("to"));
document.getElementById("editQuickBtn").addEventListener("click", () => openModal("editQuick"));
document.getElementById("modalClose").addEventListener("click", closeModal);
$modal.addEventListener("click", (e) => { if (e.target === $modal) closeModal(); });

document.getElementById("doneBtn").addEventListener("click", () => {
    if (modalMode === "editQuick") {
        quickCurrencies = [...editQuickSelection];
        localStorage.setItem("ft_quick", JSON.stringify(quickCurrencies));
        renderQuickGrid();
    }
    closeModal();
});

function openModal(target) {
    modalMode = target;
    $modal.classList.add("open");
    $currencySearch.value = "";

    if (target === "editQuick") {
        $modalTitle.textContent = "Choose Quick Currencies";
        $modalFooter.classList.add("show");
        editQuickSelection = [...quickCurrencies];
    } else {
        $modalTitle.textContent = "Select Currency";
        $modalFooter.classList.remove("show");
    }

    renderCurrencyList();
    setTimeout(() => $currencySearch.focus(), 100);
}

function closeModal() {
    $modal.classList.remove("open");
    $modalFooter.classList.remove("show");
    modalMode = null;
}

$currencySearch.addEventListener("input", () => renderCurrencyList());

function renderCurrencyList() {
    const search = ($currencySearch.value || "").toLowerCase();
    const selected = modalMode === "from" ? fromCurrency :
                     modalMode === "to" ? toCurrency : null;

    $currencyList.innerHTML = "";
    Object.entries(CURRENCIES).forEach(([code, info]) => {
        if (search && !code.toLowerCase().includes(search) && !info.name.toLowerCase().includes(search)) {
            return;
        }

        const item = document.createElement("div");

        if (modalMode === "editQuick") {
            const isSelected = editQuickSelection.includes(code);
            item.className = "currency-item" + (isSelected ? " selected" : "");
            item.innerHTML = `
                <span class="ci-flag">${info.flag}</span>
                <div class="ci-info">
                    <div class="ci-code">${code}</div>
                    <div class="ci-name">${info.name}</div>
                </div>
                ${isSelected ? '<span class="ci-check">&#10003;</span>' : ""}
            `;
            item.addEventListener("click", () => {
                const idx = editQuickSelection.indexOf(code);
                if (idx >= 0) {
                    editQuickSelection.splice(idx, 1);
                } else {
                    editQuickSelection.push(code);
                }
                renderCurrencyList();
            });
        } else {
            item.className = "currency-item" + (code === selected ? " selected" : "");
            item.innerHTML = `
                <span class="ci-flag">${info.flag}</span>
                <div class="ci-info">
                    <div class="ci-code">${code}</div>
                    <div class="ci-name">${info.name}</div>
                </div>
                ${code === selected ? '<span class="ci-check">&#10003;</span>' : ""}
            `;
            item.addEventListener("click", () => {
                if (modalMode === "from") {
                    fromCurrency = code;
                    updateCurrencyDisplay();
                    loadRates();
                } else {
                    toCurrency = code;
                    updateCurrencyDisplay();
                    convert();
                    renderQuickGrid();
                }
                closeModal();
            });
        }

        $currencyList.appendChild(item);
    });
}

// ---- Init ----
function init() {
    updateCurrencyDisplay();

    const lastInput = localStorage.getItem("ft_lastInput");
    if (lastInput) {
        $amountInput.value = lastInput;
    }

    const cache = JSON.parse(localStorage.getItem("ft_ratesCache") || "null");
    if (cache && cache.base === fromCurrency) {
        rates = cache.rates;
        convert();
        renderQuickGrid();
    }

    loadRates();

    setInterval(() => loadRates(), 30 * 60 * 1000);
}

init();