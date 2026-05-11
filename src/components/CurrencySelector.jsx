import { useCurrency } from "../context/CurrencyContext";

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="border p-2 rounded bg-white text-sm h-10 max-h-10 overflow-y-auto"
    >
      <option value="USD">USD - $</option>
      <option value="EUR">EUR - €</option>
      <option value="GBP">GBP - £</option>
      <option value="INR">INR - ₹</option>
      <option value="JPY">JPY - ¥</option>
      <option value="CNY">CNY - ¥</option>
      <option value="AUD">AUD - A$</option>
      <option value="CAD">CAD - C$</option>
      <option value="CHF">CHF - Fr</option>
      <option value="HKD">HKD - HK$</option>
      <option value="SGD">SGD - S$</option>
      <option value="AED">AED - د.إ</option>
      <option value="NPR">NPR - रू</option>
    </select>
  );
};

export default CurrencySelector;
