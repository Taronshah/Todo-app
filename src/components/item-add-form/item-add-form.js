import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: ''
  }

  onLabelChange = (e) => {//e - event
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: ''
    })
  }

  render() {
    return(
      <form className='item-add-form d-flex flex-nowrap'
            onSubmit={this.onSubmit}>
        <input type='text'
               className='form-control'
               onChange={this.onLabelChange}
               placeholder='New task'
               value={this.state.label}/>
        <button className='btn btn-outline-success'
                /*onClick={() => this.props.onAdded('TEXT')}*/ >
          Add to list
        </button>
      </form>
    )
  }

}
