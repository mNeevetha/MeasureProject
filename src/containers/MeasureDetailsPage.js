import React, { Component } from 'react';
import { connect } from 'react-redux';

import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons/Button';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import Paper from 'react-md/lib/Papers';

import SelectDatasetPage from './SelectDatasetPage';
import RefineDatasetPage from './RefineDatasetPage';
import AddComputationPage from './AddComputationPage';
import OutputAttributePage from './OutputAttributePage';
import SummaryPage from './SummaryPage';


import '../assets/stylesheets/MeasureDetails.scss';

const name = "Refine Dataset page"
class MeasureDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeButtonIndex: 1,
        }
    }

    handleTabChange(activeButtonIndex, e) {
        e.preventDefault();
        this.setState({activeButtonIndex})

    }

    renderMeasureData() {
    const { activeButtonIndex } = this.state;

    switch (activeButtonIndex) {
      case 1:
        return (
          <SelectDatasetPage />
        );
      case 2:
        return (
          <RefineDatasetPage {...name}/>
        );
      case 3:
        return <AddComputationPage />;
      case 4:
        return <OutputAttributePage />;
    case 5:
        return <SummaryPage />;
      default:
        return null;
    }
  }

    render() {
        const { measureName, measureDescription } = this.props;
        const { activeButtonIndex } = this.state;

        return (
            <div>
                <Paper className="measure-details__container md-block-centered" zDepth={0}>
                    <h4 className="measure-details__title">Enter details for  {measureName}</h4>
                    <div className="measure-details__content">
                        <div className="measure-detail__header">
                            <div
                                className="select-dataset"
                                id={activeButtonIndex === 1 ? 'buttonClicked' : ''}
                                onClick={e => this.handleTabChange(1, e)}
                            >
                                <Avatar>1</Avatar><span>Select Dataset</span>
                            </div>
                            <div
                                className="refine-dataset"
                                id={activeButtonIndex === 2 ? 'buttonClicked' : ''}
                                onClick={e => this.handleTabChange(2, e)}
                            >
                                <Avatar>2</Avatar>  <span>Refine Dataset</span>
                            </div>
                            <div
                                className="add-computations"
                                id={activeButtonIndex === 3 ? 'buttonClicked' : ''}
                                onClick={e => this.handleTabChange(3, e)}
                            >
                                <Avatar>3</Avatar><span>Add Computations</span>
                            </div>
                            <div
                                className="output-attr"
                                id={activeButtonIndex === 4 ? 'buttonClicked' : ''}
                                onClick={e => this.handleTabChange(4, e)}
                            >
                                <Avatar>4</Avatar><span>Output Attributes</span>
                            </div>
                            <div
                                className="summary"
                                id={activeButtonIndex === 5 ? 'buttonClicked' : ''}
                                onClick={e => this.handleTabChange(5, e)}
                            >
                                <Avatar>5</Avatar><span>Summary</span>
                            </div>
                        </div>
                        <div className="measure-details__heading">
                        Existing Datasets
                        </div>
                        {this.renderMeasureData()}
                    </div>
                    <Button className="measure-detail__cancel" label="Cancel" raised secondary />
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        measureName: state.createMeasure.measureName,
        measureDescription: state.createMeasure.measureDescription,
    }
};

export default connect(mapStateToProps)(MeasureDetailsPage);