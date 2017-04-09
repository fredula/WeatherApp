var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>
				This is a simple weather app built with React.
				It uses the  <a href="http://openweathermap.org/" target="_blank">openweather API</a>.
			</p>
			<p>
				You can have a look ate some examples on the <Link to="/examples">examples page.</Link>
				Alternatively, you can search for the weather in your town or city using the search in the navigation bar or on the <Link to="/">get weather page.</Link>
			</p>
		</div>
	)
}

module.exports = About;