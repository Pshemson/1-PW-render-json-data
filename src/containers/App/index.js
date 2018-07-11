import "../../theme/styles.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Horoscope from "../../components/Horoscope"
import DataHoroscope from "../../mockups/horoscope.js";

document.addEventListener('DOMContentLoaded', () => {
	class App extends React.Component {
		render() {
			return (
				<div className="container">
					<div className="titleContainer">
					<h1>HOROSCOPE</h1>
					</div>
					<Horoscope title = "That's Your Horoscope For Today YEAH YEAH YEAH YEAH!" data = {DataHoroscope}/>

				</div>
		);
		}
	}

	ReactDOM.render(
	<App />,
		document.querySelector('#app'),
	);
});
