'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.topic;
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData () {
    this.topic = this.props.value;
    fetch(`https://en.wikipedia.org/w/api.php${topic}`).then((response) => {
        response.json().then((data) => {
          // console.log(data);
          this.setState({

          })
        })
      })
  }

  render() {
    return (
      <div>
        <div>
          <h2 value="Elephants">Info about: {this.props.value}</h2>
          <ul>

          </ul>
        </div>
        <div>
          <h2 value="Leopards">Info about: {this.props.value}</h2>
          <ul>

          </ul>
        </div>
        <div>
          <h2 value="Cobras">Info about: {this.props.value}</h2>
          <ul>

          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
