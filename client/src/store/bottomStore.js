import { createStore } from 'redux';
import bottomReducer from '../reducers/bottomReducer';

const bottomStore = createStore(bottomReducer);

export default bottomStore;
