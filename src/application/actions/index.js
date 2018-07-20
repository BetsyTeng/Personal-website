// export default rootReducer =
import {createAction} from 'redux-actions';
import * as home from '../api/home';
import {asyncAjaxAction} from '../utils';
export const ChangeSearchSectionState = createAction("CHANGE_SEARCHSECTION_STATE");

export const HomeStartHandler = createAction('HOME_START_HANDLER');
export const HomeEndHandler = createAction('HOME_END_HANDLER');
export const HomeRequest = asyncAjaxAction(home.HomeHeader,HomeStartHandler,HomeEndHandler);
