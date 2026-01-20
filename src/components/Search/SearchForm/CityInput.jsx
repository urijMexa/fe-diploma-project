import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities, clearAutocomplete } from '../../../redux/slices/searchSlice';
import styles from './SearchForm.module.scss';

const CityInput = ({ placeholder, onSelect, initialValue, icon }) => {
    const [value, setValue] = useState(initialValue ? initialValue.name : '');
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.search.autocomplete);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (value && value.length > 0 && showDropdown) {
                dispatch(fetchCities(value));
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [value, dispatch, showDropdown]);

    const handleChange = (e) => {
        setValue(e.target.value);
        setShowDropdown(true);
    };

    const handleSelect = (city) => {
        setValue(city.name);
        onSelect(city);
        setShowDropdown(false);
        dispatch(clearAutocomplete());
    };

    const handleBlur = () => {
        setTimeout(() => setShowDropdown(false), 200);
    };

    return (
        <div className={styles.inputBox}>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onFocus={() => setShowDropdown(true)}
                onBlur={handleBlur}
            />
            {icon && <i className={`fa-solid ${icon}`}></i>}

            {showDropdown && items.length > 0 && (
                <ul className={styles.dropdown}>
                    {items.map(city => (
                        <li key={city._id} onClick={() => handleSelect(city)}>
                            {city.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CityInput;
