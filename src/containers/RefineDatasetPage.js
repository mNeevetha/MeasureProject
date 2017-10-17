import React, { Component } from 'react';
import { connect } from 'react-redux';

import Avatar from 'react-md/lib/Avatars';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import Paper from 'react-md/lib/Papers';

import '../assets/stylesheets/MeasureDetails.scss';

class RefineDatasetPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name } = this.props;
        console.log(this.props)
        return (
           <div>
                <Paper className="create-measure__container md-block-centered" zDepth={0}>
                       
                </Paper>
            </div>
        );
    }
}

export default connect()(RefineDatasetPage);