import React from 'react';
import PropTypes from 'prop-types';

const Horoscope = ({ title, data }) => {

    const { currentDate, months } = data;
    const renderZodiacs =() => {
        if (!months.length) {
            return null;
        }
        return months.map(singleMonth => {
            return <div>
                <li>
                    <h3 key={singleMonth.constellation}>
                        {singleMonth.constellation}
                    </h3>
                    <p>{singleMonth.dateRange}</p>
                    <div>
                        <p>{singleMonth.description}</p>
                    </div>
                    <div className="horoscopeimageList">
                        <img src={singleMonth.image}></img>
                    </div>

                </li>
            </div>

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
                <p>{activeMonth.dateRange}</p>
                <div className="descriptionContainer">

                    <div className="horoscopeImage">
                        <img src={activeMonth.image}></img>
                    </div>
                    <div className="paragraphContainer">
                        <p>{activeMonth.description}</p>
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
            <ul className="horoscopeList">
            {renderZodiacs()}
            </ul>
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
