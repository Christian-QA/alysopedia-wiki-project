var React = require('react');
var CodeMirror = require('react-codemirror');
require('codemirror/lib/codemirror.css');

var CodeMirror = React.createClass({
	getInitialState: function() {
		return {
			code: "// Code",
		};
	},
	updateCode: function(newCode) {
		this.setState({
			code: newCode,
		});
	},
	render: function() {
		var options = {
			lineNumbers: true,
		};
		return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
	}
});

React.render(<CodeMirror />, document.getElementById('codemirror-body'));