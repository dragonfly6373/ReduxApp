import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter.js';
import {Type} from './actions';
import Dispatcher from './Dispatcher';

var tally = {
    count: 0
};

class TallyStore extends EventEmitter {
    getTally() {
        return Object.assign({}, tally);
    }

    addChangeListener(callback) {
        this.addListener('CHANGE', callback);
    }

    removeChangeListener(callback) {
        this.removeChangeListener('CHANGE', callback);
    }

    emitChange() {
        this.emit('CHANGE');
    }

}

const increment = () => {
    tally.count ++;
}

const decrement = () => {
    tally.count --;
}

const zero = () => {
    tally.count = 0;
}

const handleAction = (action) => {
    switch (action.type) {
        case Type.INCREMENT:
            increment();
            break;
        case Type.DECREMENT:
            decrement();
            break;
        case Type.ZERO:
            zero();
            break;
        default:
            break;
    }
    instance.emitChange();
}

Dispatcher.register(handleAction);

const instance = new TallyStore();
export default instance;
