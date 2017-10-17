import React, { Component } from 'react';
import { connect } from 'react-redux';

import Avatar from 'react-md/lib/Avatars';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import Paper from 'react-md/lib/Papers';

import '../assets/stylesheets/MeasureDetails.scss';

class AddComputationPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { measureName } = this.props;
        return (
           <div>
                <Paper className="create-measure__container md-block-centered" zDepth={0}>
                    AddComputationPage
                </Paper>
            </div>
        );
    }
}

export default connect()(AddComputationPage);