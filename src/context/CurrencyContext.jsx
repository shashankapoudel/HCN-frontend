import { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [rates, setRates] = useState({ USD: 1 });

  // 🔥 Fetch live exchange rates
  const fetchRates = async () => {
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await res.json();

      setRates(data.rates);
    } catch (err) {
      console.log("Rate fetch error:", err);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  // 🔥 Convert price
  const convertPrice = (priceInUSD) => {
    if (!rates[currency]) return priceInUSD;

    return (priceInUSD * rates[currency]).toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        rates,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
