import React from 'react';


export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultChecked,
    };
  }

  onChange() {
    this.setState({'value': !this.state.value});
    if (this.props.onChange) {
      this.props.onChange(this, this.state.value);
    }
  }

  render() {
    const { ...other } = this.props;
    return (
      <div className="onoffswitch">
        <input
          type="checkbox"
          name="onoffswitch"
          className="onoffswitch-checkbox"
          id="myonoffswitch"
          ref="checkbox"
          {...other}
          onChange={this.onChange.bind(this)}
        />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
              <span className="onoffswitch-inner"></span>
              <span className="onoffswitch-switch"></span>
          </label>
      </div>
    );
  }
}
