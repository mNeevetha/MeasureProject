import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateMeasureForm from '../components/CreateMeasureForm';
import {createMeasure} from '../store/createMeasure/actions';

import '../assets/stylesheets/CreateMeasurePage.scss';

class CreateMeasurePage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      measureName : '',
      measureDescription : '',
    };
  }

  handleChange(fieldType, value) {
    this.setState({[fieldType]: value});
  }

  handleOnSubmit(event) {
    const { history, dispatch } = this.props;
    dispatch(createMeasure(this.state.measureName, this.state.measureDescription, history));
  }

  render() {

    return (
      <CreateMeasureForm
      measureName = {this.state.measureName}
      handleChange = {(fieldType, value) => this.handleChange(fieldType, value)}
      measureDescription = {this.state.measureDescription}
      onSubmit = { event => this.handleOnSubmit(event) }
      />
    );
  }
}

export default connect()(CreateMeasurePage);