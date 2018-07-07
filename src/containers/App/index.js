import "../../theme/styles.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Horoscope from "../../components/Horoscope"
import DataHoroscope from "../../mockups/horoscope.js";

document.addEventListener('DOMContentLoaded', () => {
	class App extends React.Component {
		render() {
			return (
				<div>
					<h1>My components:</h1>
					<Horoscope title = "tytuł z App" data = {DataHoroscope}/>
				</div>
		);
		}
	}

	ReactDOM.render(
	<App />,
		document.querySelector('#app'),
	);
});
