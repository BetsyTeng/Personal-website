// export default rootReducer =
import {createAction} from 'redux-actions';
import * as home from '../api/home';
import * as about from '../api/about';

import {asyncAjaxAction} from '../utils';
export const ChangeSearchSectionState = createAction("CHANGE_SEARCHSECTION_STATE");

export const HomeStartHandler = createAction('HOME_START_HANDLER');
export const HomeEndHandler = createAction('HOME_END_HANDLER');
export const HomeRequest = asyncAjaxAction(home.HomeHeader,HomeStartHandler,HomeEndHandler);


export const AboutStartHandler = createAction('ABOUT_START_HANDLER');
export const AboutEndHandler = createAction('ABOUT_END_HANDLER');
export const AboutRequest = asyncAjaxAction(about.AboutHeader,AboutStartHandler,AboutEndHandler);
