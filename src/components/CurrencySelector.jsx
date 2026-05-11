// import { useCurrency } from "../context/CurrencyContext";

// const CurrencySelector = () => {
//   const { currency, setCurrency } = useCurrency();

//   return (
//     <select
//       value={currency}
//       onChange={(e) => setCurrency(e.target.value)}
//       className="border p-2 rounded bg-white text-sm h-10 max-h-10 overflow-y-auto scroll-m-3"
//     >
//       <option value="USD">USD - $</option>
//       <option value="EUR">EUR - €</option>
//       <option value="GBP">GBP - £</option>
//       <option value="INR">INR - ₹</option>
//       <option value="JPY">JPY - ¥</option>
//       <option value="CNY">CNY - ¥</option>
//       <option value="AUD">AUD - A$</option>
//       <option value="CAD">CAD - C$</option>
//       <option value="CHF">CHF - Fr</option>
//       <option value="HKD">HKD - HK$</option>
//       <option value="SGD">SGD - S$</option>
//       <option value="AED">AED - د.إ</option>
//       <option value="NPR">NPR - रू</option>
//     </select>
//   );
// };

// export default CurrencySelector;

import { useState } from "react";
import { useCurrency } from "../context/CurrencyContext";

const currencies = [
  "USD - $",
  "EUR - €",
  "GBP - £",
  "INR - ₹",
  "JPY - ¥",
  "CNY - ¥",
  "AUD - A$",
  "CAD - C$",
  "CHF - Fr",
  "HKD - HK$",
  "SGD - S$",
  "AED - د.إ<",
  "NPR - रू",
];

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-32">
      <button
        onClick={() => setOpen(!open)}
        className="w-full border bg-white rounded px-3 py-1 text-sm flex items-center justify-between shadow"
      >
        <span>{currency}</span>
        <span className="text-xl mb-3">{open ? "⌃" : "⌄"}</span>
      </button>

      {open && (
        <div className="absolute top-full mt-1 left-0 w-full bg-white border rounded shadow-lg max-h-40 overflow-y-auto z-50">
          {currencies.map((curr) => (
            <div
              key={curr}
              onClick={() => {
                setCurrency(curr);
                setOpen(false);
              }}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {curr}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
