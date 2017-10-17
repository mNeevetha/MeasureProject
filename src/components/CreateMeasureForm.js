import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Paper from 'react-md/lib/Papers';
import TextField from 'react-md/lib/TextFields';

import '../assets/stylesheets/CreateMeasurePage.scss';

const CreateMeasureForm = ({ measureName, handleChange, measureDescription, onSubmit }) => {

  return (
    <div>
      <Paper className="create-measure__container md-block-centered" zDepth={0}>
        <h4 className="create-measure__title">Create Measure</h4>
        <div className="create-measure__content">
          <div className="create-measure__header"><h5>Measure Details</h5></div>
          <form className="create-measure__form" onSubmit={onSubmit}>
            <div className="create-measure__name-container">
              <div className="create-measure__name-icon" />
              <TextField id="measureName" type="text" className="create-measure__name" placeholder="Enter Measure Name" onChange={value => handleChange('measureName', value)} value={measureName} />
            </div>
            <div className="create-measure__desc-container">
              <div className="create-measure__desc-icon" />
              <TextField id="measureDescription" type="text" className="create-measure__description" placeholder="Enter Description" onChange={value => handleChange('measureDescription', value)} value={measureDescription} />
            </div>
            <Button type="submit" className="create-measure__button" label="Create Measure" raised secondary />
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default CreateMeasureForm;