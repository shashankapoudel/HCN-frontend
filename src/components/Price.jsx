import { useCurrency } from "../context/CurrencyContext";

const symbols = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  INR: "₹",
  JPY: "¥",
  CNY: "¥",
  AUD: "A$",
  CAD: "C$",
  CHF: "CHF",
  HKD: "HK$",
  SGD: "S$",
  AED: "د.إ",
  NPR: "रू",
};

const Price = ({ amount }) => {
  const { currency, convertPrice } = useCurrency();

  return (
    <span className="font-bold text-[#bb2821]">
      {symbols[currency]} {convertPrice(amount)}
    </span>
  );
};

export default Price;
