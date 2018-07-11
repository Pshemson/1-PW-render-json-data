import React from 'react';
import PropTypes from 'prop-types';

const Horoscope = ({ title, data }) => {

    const { currentDate, months } = data;
    const renderZodiacs =() => {
        if (!months.length) {
            return null;
        }
        return months.map(singleMonth => {
            return <h3 key={singleMonth.constellation}>
                {singleMonth.constellation}
            </h3>
        })
    };

    const renderActive =() => {
        if (!months.length) {
            return null;
        }
        const activeMonth = months.find(singleMonth => singleMonth.headline); //headline od razu wie ze ma wybierac true, mozna tez dodac === true
        return (

            <h2>{activeMonth.constellation}</h2>
        )
    };

    return (
        <div className="horoscopeContainer">
            <h4>{currentDate}</h4>
            <h2>{title}</h2>
            <div className="todayHoroscope">
                {renderActive()}

            </div>
            {renderZodiacs()}

        </div>
    );
};

Horoscope.defaultProps = {
    title: ''
};

Horoscope.propTypes = {
    title: PropTypes.string
};

export default Horoscope;
