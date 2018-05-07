import AppDispatcher from '../AppDispatcher';
import {ActionTypes, Event} from '../Constants';
import {EventEmitter} from 'events';

class LinkStore extends EventEmitter {

    constructor(props) {
        super(props);

        this.links = [];

        AppDispatcher.register(action => {
            switch(action.actionType) {
                case ActionTypes.RECEIVE_LINKS:
                    console.log("3. In Store.", action);
                    this.links = action.links;
                    //Notify to the view.
                    this.emit(Event);
                    break;
                default:
                    //BLANK.
            }
        });
    }

    getAll = () => {
        return this.links;
    }
}

export default new LinkStore();