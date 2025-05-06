import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceSlider = ({ minPrice, maxPrice, selectedRange = [minPrice, maxPrice], setSelectedRange }) => {
    const handleChange = (value) => {
        setSelectedRange(value);
    };

    return (
        <div className="w-full text-sm md:text-lg lg:text-sm">
            <h2 className="font-semibold text-gray-800 mb-2">Filter by Price (Rs.)</h2>

            <div className="px-2">
                <Slider
                    range
                    min={minPrice}
                    max={maxPrice}
                    defaultValue={[minPrice, maxPrice]}
                    value={selectedRange}
                    onChange={handleChange}
                    step={1000}
                    marks={{
                        [minPrice]: `${minPrice / 1000}k`,
                        [20000]: '20k',
                        [40000]: '40k',
                        [60000]: '60k',
                        [80000]: '80k',
                        [maxPrice]: `${maxPrice / 1000}k`,
                    }}
                    trackStyle={[{ backgroundColor: '#008B89', height: 6 }]}
                    dotStyle={{ display: 'none' }}
                />
            </div>

            {selectedRange && (
                <p className="mt-8  text-gray-700">
                    Selected: Rs. {selectedRange[0]} – Rs. {selectedRange[1]}
                </p>
            )}
        </div>
    );
};

export default PriceSlider;
