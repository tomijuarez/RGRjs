import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

class ServerActions {

    receiveLinks = (payload) => {
        console.log("2. In ServerActions", payload);
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_LINKS,
            links: payload
        });       
    }
}

export default new ServerActions();