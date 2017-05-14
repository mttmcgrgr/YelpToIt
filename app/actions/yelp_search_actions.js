import * as YelpAPI from '../util/yelp_search_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

 export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const requestPosts = (term) => dispatch => (
  YelpAPI.getBusinessResults(term).then(businesses => dispatch(receiveBusinesses(businesses)))
);
