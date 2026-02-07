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

// Default quick-convert currencies shown below the main converter
const DEFAULT_QUICK = ["EUR", "TRY", "SAR", "GBP", "AED", "JPY"];

// ---- State ----
let fromCurrency = localStorage.getItem("from") || "USD";
let toCurrency = localStorage.getItem("to") || "TRY";
let rates = {};
let input = "0";
let mode = "numpad"; // "numpad" or "calc"
let calcExpression = "";
let selectorTarget = null; // "from" or "to"
let quickCurrencies = JSON.parse(localStorage.getItem("quick")) || [...DEFAULT_QUICK];

// ---- DOM refs ----
const $amountDisplay = document.getElementById("amountDisplay");
const $resultAmount = document.getElementById("resultAmount");
const $rateInfo = document.getElementById("rateInfo");
const $fromCode = document.getElementById("fromCode");
const $toCode = document.getElementById("toCode");
const $fromFlag = document.getElementById("fromFlag");
const $toFlag = document.getElementById("toFlag");
const $ratesStatus = document.getElementById("ratesStatus");
const $statusText = document.getElementById("statusText");
const $quickGrid = document.getElementById("quickGrid");
const $calcExpression = document.getElementById("calcExpression");
const $modal = document.getElementById("currencyModal");
const $currencyList = document.getElementById("currencyList");
const $currencySearch = document.getElementById("currencySearch");
const $numpad = document.getElementById("numpad");

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
        // Fallback mirror
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
        localStorage.setItem("ratesCache", JSON.stringify({ base: fromCurrency, rates, time: Date.now() }));
    } else {
        // Try cache
        const cache = JSON.parse(localStorage.getItem("ratesCache") || "null");
        if (cache && cache.base === fromCurrency) {
            rates = cache.rates;
            $ratesStatus.className = "rates-status error";
            $statusText.textContent = "Offline - using cached rates";
        } else {
            $ratesStatus.className = "rates-status error";
            $statusText.textContent = "Failed to load rates";
        }
    }
    convert();
    renderQuickGrid();
}

// ---- Conversion ----
function getRate(from, to) {
    if (from === to) return 1;
    const f = from.toLowerCase();
    const t = to.toLowerCase();
    if (rates[t] !== undefined) return rates[t];
    return null;
}

function convert() {
    const amount = parseFloat(input) || 0;
    const rate = getRate(fromCurrency, toCurrency);
    if (rate === null) {
        $resultAmount.textContent = "---";
        $rateInfo.textContent = "Rate unavailable";
        return;
    }
    const result = amount * rate;
    $resultAmount.textContent = formatNumber(result, toCurrency);
    $rateInfo.textContent = `1 ${fromCurrency} = ${formatNumber(rate, toCurrency, 4)} ${toCurrency}`;
}

function formatNumber(num, currency, minDecimals) {
    if (Math.abs(num) < 0.01 && num !== 0) {
        return num.toFixed(6);
    }
    const dec = minDecimals || (num >= 100 ? 2 : num >= 1 ? 3 : 4);
    // Use locale-aware formatting
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
    localStorage.setItem("from", fromCurrency);
    localStorage.setItem("to", toCurrency);
}

function updateAmountDisplay() {
    $amountDisplay.textContent = input === "0" ? "0" : input;
}

// ---- Quick Grid ----
function renderQuickGrid() {
    $quickGrid.innerHTML = "";
    quickCurrencies.forEach(code => {
        const cur = CURRENCIES[code] || { flag: "", name: code };
        const card = document.createElement("div");
        card.className = "quick-card" + (code === toCurrency ? " active" : "");

        const amount = parseFloat(input) || 0;
        let converted = "";
        if (amount > 0 && rates[code.toLowerCase()] !== undefined) {
            const val = amount * rates[code.toLowerCase()];
            converted = formatNumber(val, code);
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

// ---- Numpad / Calculator ----
function handleInput(val) {
    if (val === "clear") {
        input = "0";
        calcExpression = "";
        $calcExpression.innerHTML = "&nbsp;";
        updateAmountDisplay();
        convert();
        renderQuickGrid();
        return;
    }

    if (val === "del") {
        if (mode === "calc" && calcExpression.length > 0) {
            calcExpression = calcExpression.slice(0, -1);
            $calcExpression.textContent = calcExpression || " ";
            // Also update input from expression's last number
            const nums = calcExpression.split(/[\+\-\*\/]/);
            const last = nums[nums.length - 1];
            if (last && !isNaN(parseFloat(last))) {
                input = last;
            }
        } else {
            input = input.length > 1 ? input.slice(0, -1) : "0";
        }
        updateAmountDisplay();
        convert();
        renderQuickGrid();
        return;
    }

    if (val === "=") {
        if (mode === "calc" && calcExpression) {
            try {
                // Safe eval using Function constructor (only math ops)
                const sanitized = calcExpression.replace(/[^0-9+\-*/.() ]/g, "");
                if (sanitized) {
                    const result = Function('"use strict"; return (' + sanitized + ')')();
                    if (isFinite(result)) {
                        input = String(Math.round(result * 1000000) / 1000000);
                        calcExpression = "";
                        $calcExpression.innerHTML = "&nbsp;";
                        updateAmountDisplay();
                        convert();
                        renderQuickGrid();
                    }
                }
            } catch {
                // Invalid expression, ignore
            }
        }
        return;
    }

    // Operators (calc mode only)
    if (["+", "-", "*", "/"].includes(val)) {
        if (mode !== "calc") return;
        if (calcExpression === "") {
            calcExpression = input + val;
        } else {
            // Replace trailing operator or append
            if (/[\+\-\*\/]$/.test(calcExpression)) {
                calcExpression = calcExpression.slice(0, -1) + val;
            } else {
                calcExpression += val;
            }
        }
        $calcExpression.textContent = calcExpression;
        return;
    }

    // Number / dot
    if (mode === "calc" && calcExpression) {
        // Append to expression
        calcExpression += val;
        $calcExpression.textContent = calcExpression;
        // Extract last number for display
        const nums = calcExpression.split(/[\+\-\*\/]/);
        const last = nums[nums.length - 1];
        if (last) input = last;
    } else {
        if (val === "." && input.includes(".")) return;
        if (input === "0" && val !== ".") {
            input = val;
        } else {
            input += val;
        }
    }

    updateAmountDisplay();
    convert();
    renderQuickGrid();
}

// ---- Mode Toggle ----
document.getElementById("numpadMode").addEventListener("click", () => setMode("numpad"));
document.getElementById("calcMode").addEventListener("click", () => setMode("calc"));

function setMode(m) {
    mode = m;
    document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b.dataset.mode === m));
    // Show/hide calc-only buttons
    document.querySelectorAll("[data-calc-only]").forEach(btn => {
        btn.classList.toggle("hidden", m !== "calc");
    });
    if (m === "numpad") {
        calcExpression = "";
        $calcExpression.innerHTML = "&nbsp;";
    }
}

// ---- Numpad Event ----
$numpad.addEventListener("click", (e) => {
    const btn = e.target.closest(".num-btn");
    if (!btn) return;
    handleInput(btn.dataset.val);
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    if ($modal.classList.contains("open")) return;
    if (e.key >= "0" && e.key <= "9") handleInput(e.key);
    else if (e.key === ".") handleInput(".");
    else if (e.key === "Backspace") handleInput("del");
    else if (e.key === "Escape") handleInput("clear");
    else if (e.key === "Enter" || e.key === "=") handleInput("=");
    else if (e.key === "+") handleInput("+");
    else if (e.key === "-") handleInput("-");
    else if (e.key === "*") handleInput("*");
    else if (e.key === "/") { e.preventDefault(); handleInput("/"); }
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
document.getElementById("modalClose").addEventListener("click", closeModal);
$modal.addEventListener("click", (e) => { if (e.target === $modal) closeModal(); });

function openModal(target) {
    selectorTarget = target;
    $modal.classList.add("open");
    $currencySearch.value = "";
    renderCurrencyList();
    setTimeout(() => $currencySearch.focus(), 100);
}

function closeModal() {
    $modal.classList.remove("open");
    selectorTarget = null;
}

$currencySearch.addEventListener("input", () => renderCurrencyList());

function renderCurrencyList(filter) {
    const search = ($currencySearch.value || "").toLowerCase();
    const selected = selectorTarget === "from" ? fromCurrency : toCurrency;

    $currencyList.innerHTML = "";
    Object.entries(CURRENCIES).forEach(([code, info]) => {
        if (search && !code.toLowerCase().includes(search) && !info.name.toLowerCase().includes(search)) {
            return;
        }
        const item = document.createElement("div");
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
            if (selectorTarget === "from") {
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
        $currencyList.appendChild(item);
    });
}

// ---- Init ----
function init() {
    setMode("numpad");
    updateCurrencyDisplay();
    updateAmountDisplay();

    // Try loading cached rates first for instant display
    const cache = JSON.parse(localStorage.getItem("ratesCache") || "null");
    if (cache && cache.base === fromCurrency) {
        rates = cache.rates;
        convert();
        renderQuickGrid();
    }

    loadRates();

    // Auto-refresh rates every 30 minutes
    setInterval(() => loadRates(), 30 * 60 * 1000);
}

init();