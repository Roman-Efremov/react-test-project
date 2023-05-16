import { React, useMemo } from 'react';
import './CityList.css';

function CityList({ list, name, onChange }) {
    const sortSities = (list) => {
        const cities = [];

        list.sort((a, b) => {
            if (a.city < b.city) {
                return -1;
            }
            if (a.city > b.city) {
                return 1;
            }
            return 0;
        });
        const max = list.reduce((a, b) => {
            return (parseInt(a.population) > parseInt(b.population)) ? a : b;
        });

        cities.push(<option>{max.city}</option>);
        list.forEach(element => {
            if (element.population > 5000 && element != max) {
                cities.push(<option>{element.city}</option>);
            }
        });

        return cities;
    };

    const cities = useMemo(() => sortSities(list), [list]);

    return (
        <div className='city-list'>
            <select
                className='city-list__city'
                name={name}
                onClick={onChange}>
                {cities}
            </select>
        </div>
    );
}

export { CityList };