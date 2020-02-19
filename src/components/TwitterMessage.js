import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      charLimit: props.maxChars
    };
  }

  handleCharacterLimit = (event) => {
    let inputMessage = event.target.value
    let remainder = this.props.maxChars - inputMessage.length
    this.setState({
      message: inputMessage,
      charLimit: remainder
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxLength="280" name="message" id="message" value={this.state.message} onChange={event => this.handleCharacterLimit(event)}/>
        <div>{this.state.charLimit} characters remaining</div>
      </div>
    );
  }
}

export default TwitterMessage;
