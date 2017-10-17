import { CREATE_MEASURE__FAILURE, CREATE_MEASURE__REQUEST, CREATE_MEASURE__SUCCESS } from "./actions"

const initialState = {
    measureName: '',
    measureDescription: '',
    createMeasureRequest: false
};

export default function createMeasure(state = initialState, action) {
    switch (action.type) {
        case CREATE_MEASURE__FAILURE: return Object.assign({}, state, {
            createMeasureRequest: false
        });
        case CREATE_MEASURE__REQUEST: return Object.assign({}, state, {
            createMeasureRequest: true
        });
        case CREATE_MEASURE__SUCCESS: return Object.assign({}, state, {
            measureName: action.measureName,
            measureDescription: action.measureDescription,
            createMeasureRequest: false
        });
        default: return state;
    }
}