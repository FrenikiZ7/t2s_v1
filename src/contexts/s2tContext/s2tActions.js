import * as types from './s2tTypes';

export const showData = (dispatch) => {
  dispatch({ type: types.show_data, payload: [] });
};

export const addImage = (dispatch, imageData) => {
  dispatch({ type: types.add_image, payload: imageData });
};

export const removeImage = (dispatch, imageData) => {
  dispatch({ type: types.remove_image, payload: imageData });
};

export const addVideoUrl = (dispatch, videoData) => {
  dispatch({ type: types.add_video_url, payload: videoData });
};

export const addVideoFile = (dispatch, videoData) => {
  dispatch({ type: types.add_video_file, payload: videoData });
};

export const removeVideo = (dispatch, videoData) => {
  dispatch({ type: types.remove_video, payload: videoData });
};

export const addProposal = (dispatch, proposalData) => {
  dispatch({ type: types.add_proposal, payload: proposalData });
};

export const editProposal = (dispatch, proposalData) => {
  dispatch({ type: types.edit_proposal, payload: proposalData });
};

export const removeProposal = (dispatch, proposalData) => {
  dispatch({ type: types.remove_proposal, payload: proposalData });
};

export const addEvent = (dispatch, eventData) => {
  dispatch({ type: types.add_event, payload: eventData });
};

export const removeEvent = (dispatch, eventData) => {
  dispatch({ type: types.remove_event, payload: eventData });
};

export const reportMedia = (dispatch, mediaData) => {
  dispatch({ type: types.report_media, payload: mediaData });
};

// filters
export const filterPlayers = (dispatch, filterData) => {
  dispatch({ type: types.filter_players, payload: filterData });
};

export const filterEvents = (dispatch, filterData) => {
  dispatch({ type: types.filter_events, payload: filterData });
};

export const searchEvents = (dispatch, searchData) => {
  dispatch({ type: types.search_events, payload: searchData });
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
