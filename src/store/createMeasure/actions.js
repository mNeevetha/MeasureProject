export const CREATE_MEASURE__FAILURE = "CREATE_MEASURE__FAILURE"
export const CREATE_MEASURE__REQUEST = "CREATE_MEASURE__REQUEST"
export const CREATE_MEASURE__SUCCESS = "CREATE_MEASURE__SUCCESS"

export function createMeasure(measureName, measureDescription, history) {
    return async dispatch => {
        dispatch(createMeasureRequest);
        try {
            dispatch(createMeasureSuccess(measureName, measureDescription));
            history.push('/measure-details');
        }
        catch (error) {
            dispatch(createMeasureFailure);
        }
    };
}

export function createMeasureFailure() {
    return { type: CREATE_MEASURE__FAILURE };
}

export function createMeasureRequest() {
    return { type: CREATE_MEASURE__REQUEST };
}

export function createMeasureSuccess(measureName, measureDescription) {
    return { type: CREATE_MEASURE__SUCCESS, measureName, measureDescription };
}