import rootReducer from "./reducer";
import {createStore} from "redux"

const Store=createStore(rootReducer);

export default Store;