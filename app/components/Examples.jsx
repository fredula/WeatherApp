var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Find a few example locations</p>
			<ol>
				<li>
					<Link to="/?location=Cape Town">Cape Town, South Africa</Link>
				</li>
				<li>
					<Link to="/?location=Johannesburg">Johannesburg, South Africa</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples;