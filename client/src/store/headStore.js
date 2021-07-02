import { createStore } from 'redux';
import headReducer from '../reducers/headReducer';

const headStore = createStore(headReducer);

export default headStore;

