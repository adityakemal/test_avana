import {createStore} from 'redux';
import dummy from './dummyJson'

const initialState = {
    dataActiveTab: '',
    dataActiveChildTab: '',
    toggleMenu : true,
    jsonNav : dummy
};

const reducer = (state = initialState, action) =>{
    
    if (action.type === "ACTIVE_TAB") {
        // console.log(action.data);
        return {
          ...state,
          dataActiveTab: action.data,
        };
    }

    if (action.type === "ACTIVE_CHILD_TAB") {
        // console.log(action.data);
        return {
          ...state,
          dataActiveChildTab: action.data,
        };
    }

    if (action.type === "TOGGLE_MENU") {
        console.log(action.data);
        return {
          ...state,
          toggleMenu: action.data,
        };
    }

    return state;

}


const store = createStore(reducer);

export default store;