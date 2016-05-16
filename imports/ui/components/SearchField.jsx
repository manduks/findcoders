import React from 'react';

import Switch from './Switch.jsx';



export default class SearchField extends React.Component {
  onChangeSwitch(switchComponent) {}

  onSearch() {
    const values = {
      switchValue: this.refs.switch.state.value,
      fieldValue : this.refs.field.getValue(),
    };
    this.setState(values);
    this.props.onSearch(this, values);
  }

  render() {
    return (
      <div className='qc-search-field'>
        <div className="qc-field  search">
          <label>Search :</label>
          <input type="text" autoComplete="off" ref="field" placeholder="JS, JAVA, HTML ..." />
        </div>
        <section>
          <Switch ref="location" ref="switch" onChange={this.onChangeSwitch} defaultChecked={true}/>
          <button  className="btn-primary">Search</button>
        </section>
      </div>
    );
  }
}
SearchField.propTypes = {
  onSearch: React.PropTypes.func.isRequired
};
