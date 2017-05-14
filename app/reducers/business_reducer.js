import { RECEIVE_BUSINESSES } from "../actions/yelp_search_actions";
import merge from "lodash/merge";

const defaultState = {
  businesses: []
};

const BusinessReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
       case RECEIVE_BUSINESSES:
         return action.businesses;
       default:
         return state;
    }
};


export default BusinessReducer;
