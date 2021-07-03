import { createStore } from 'redux';
import bodyReducer from '../reducers/bodyReducer';

const bodyStore = createStore(bodyReducer);

export default bodyStore;
