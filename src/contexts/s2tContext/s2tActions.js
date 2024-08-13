import * as types from './s2tTypes';

export const showData = (dispatch) => {
  dispatch({ type: types.show_data, payload: [] });
};

export const addProposal = (dispatch, proposalData) => {
  dispatch({ type: types.add_proposal, payload: proposalData });
};

export const addEvent = (dispatch, eventData) => {
  dispatch({ type: types.add_event, payload: eventData });
};

export const reportMedia = (dispatch, mediaData) => {
  dispatch({ type: types.report_media, payload: mediaData });
};

// filters
export const filterPlayers = (dispatch, filterData) => {
  dispatch({ type: types.filter_players, payload: filterData });
};

export const searchPlayers = (dispatch, searchData) => {
  dispatch({ type: types.search_players, payload: searchData });
};

export const filterPlayerProposals = (dispatch, filterData) => {
  dispatch({ type: types.filter_player_proposals, payload: filterData });
};

export const searchPlayerProposals = (dispatch, filterData) => {
  dispatch({ type: types.search_player_proposals, payload: filterData });
};
