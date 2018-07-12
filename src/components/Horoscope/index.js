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

    const renderactiveMonth =() => {
        if (!months.length) {
            return null;
        }
        const activeMonth = months.find(singleMonth => singleMonth.headline); //headline od razu wie ze ma wybierac true, mozna tez dodac === true
        return (
            <div>

                <h5>{activeMonth.constellation}</h5>
                <div className="descriptionContainer">
                    <p>{activeMonth.description}</p>
                    <div className="horoscopeImage">
                        <img src={activeMonth.image}></img>
                    </div>
                </div>


            </div>

        )
    };
/*
    const renderactiveImage =() => {
        if (!months.length) {
            return null;
        }
        const activeImage = months.find(singleMonth => singleMonth.image);
        return (

            <h2>{activeImage.constellation}</h2>
        )
    };
*/
    return (
        <div className="horoscopeContainer">
            <h4>{currentDate}</h4>
            <h2>{title}</h2>

            <div className="todayHoroscope">
                {renderactiveMonth()}
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
