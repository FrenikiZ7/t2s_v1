import * as types from './staffTypes';

export const changeProfilePicture = (dispatch, profilePicture) => {
  dispatch({ type: types.change_profile_picture, payload: [profilePicture] });
};

export const changeProfileInfo = (dispatch, profileInfo) => {
  dispatch({ type: types.change_profile_info, payload: profileInfo });
};

export const addClubHistory = (dispatch, clubData) => {
  dispatch({ type: types.add_club_history, payload: clubData });
};

export const removeClubHistory = (dispatch, clubData) => {
  dispatch({ type: types.remove_club_history, payload: clubData });
};

export const addCertificateOrLicenseHistory = (dispatch, certificateOrLicenseData) => {
  dispatch({ type: types.add_certificate_or_license_history, payload: certificateOrLicenseData });
};

export const removeCertificateOrLicenseHistory = (dispatch, certificateOrLicenseData) => {
  dispatch({ type: types.remove_certificate_or_license_history, payload: certificateOrLicenseData });
};

export const addCourseOrTrainingHistory = (dispatch, courseOrTrainingData) => {
  dispatch({ type: types.add_course_or_training_history, payload: courseOrTrainingData });
};

export const removeCourseOrTrainingHistory = (dispatch, courseOrTrainingData) => {
  dispatch({ type: types.remove_course_or_training_history, payload: courseOrTrainingData });
};

export const addAwardHistory = (dispatch, awardData) => {
  dispatch({ type: types.add_award_history, payload: awardData });
};

export const removeAwardHistory = (dispatch, awardData) => {
  dispatch({ type: types.remove_award_history, payload: awardData });
};

export const addVideo = (dispatch, videoData) => {
  dispatch({ type: types.add_video, payload: videoData });
};

export const removeVideo = (dispatch, videoData) => {
  dispatch({ type: types.remove_video, payload: videoData });
};
