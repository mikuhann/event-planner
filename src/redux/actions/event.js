import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT} from '../../constants/actions';

export const createEvent = (event) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_EVENT,
      payload: event,
    });
  } catch (e) {
    console.log(e.message)
  }
};

export const updateEvent = (event) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_EVENT,
      payload: event
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });
  } catch (e) {
    console.log(e.message);
  }
};
