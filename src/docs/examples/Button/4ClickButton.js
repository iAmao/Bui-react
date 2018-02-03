import React from 'react';
import Button from 'bui-react/Button';

/**
 * Primary/Default Button component
 */
export default class ClickButton extends React.Component {
  state = { count: 0 };

  render() {
    let { count } = this.state;

    return (
      <div>
        <Button
          rounded={10}
          onClick={() => this.setState({ count: ++count })}
        >
          Click Me!
        </Button>
        <br />
        <span>Count: <b>{this.state.count}</b></span>
      </div>
    );
  }
}
