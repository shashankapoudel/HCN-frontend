import { useCurrency } from "../context/CurrencyContext";

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="border p-1 rounded"
    >
      <option value="USD">USD $</option>
      <option value="EUR">EUR €</option>
      <option value="INR">INR ₹</option>
      <option value="GBP">GBP £</option>
      <option value="JPY">JPY ¥</option>
    </select>
  );
};

export default CurrencySelector;
