import { useCurrency } from "../context/CurrencyContext";

const symbols = {
  USD: "$",
  EUR: "€",
  INR: "₹",
  GBP: "£",
  JPY: "¥",
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
