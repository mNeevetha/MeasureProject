import React, { Component } from 'react';
import { connect } from 'react-redux';

import Avatar from 'react-md/lib/Avatars';
import Checkbox from 'react-md/lib/SelectionControls/Checkbox';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import Paper from 'react-md/lib/Papers';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TablePagination from 'react-md/lib/DataTables/TablePagination';
import TextField from 'react-md/lib/TextFields';

import '../assets/stylesheets/SelectDatasetPage.scss';

const DataSetValues = [
    { dataSetValue: 'DataSet 1', lastExecutedOn: 'Jan 2014' },
    { dataSetValue: 'DataSet 2', lastExecutedOn: 'Jun 2015' },
    { dataSetValue: 'DataSet 3', lastExecutedOn: 'May 2008' },
    { dataSetValue: 'DataSet 4', lastExecutedOn: 'Jul 2017' },
    { dataSetValue: 'DataSet 5', lastExecutedOn: 'Mar 2014' },
    { dataSetValue: 'DataSet 6', lastExecutedOn: 'Dec 2011' },
    { dataSetValue: 'DataSet 7', lastExecutedOn: 'Jan 2017' },
    { dataSetValue: 'DataSet 8', lastExecutedOn: 'Sep 2016' },
    { dataSetValue: 'DataSet 9', lastExecutedOn: 'Nov 2014' },
    { dataSetValue: 'DataSet 10', lastExecutedOn: 'Apr 2014' },
]

class SelectDatasetPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadMore: 10,
            loadMoreClick: 0
        }
    }

    renderDataset() {
        return (DataSetValues.map((data, index) => {
            return <TableRow className="select-dataset__row" key={index}>
                <TableColumn className="dataset-checkbox"></TableColumn>
                <TableColumn className="dataset-value"> {data.dataSetValue} </TableColumn>
                <TableColumn className="dataset-executed">Last Executed On - <span className="executed-data">{data.lastExecutedOn}</span></TableColumn>
            </TableRow>
        }));
    }

    render() {
        const { measureName } = this.props;
        return (
            <div>
                <DataTable className="select-dataset__table">

                    <TableBody>
                        {this.renderDataset()}
                    </TableBody>
                </DataTable>
            </div>
        );
    }
}

export default connect()(SelectDatasetPage);