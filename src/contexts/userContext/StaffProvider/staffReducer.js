import * as types from './staffTypes';

export const staffReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_STAFF_DATA':
      return {
        ...state,
        ...action.payload,
      };

    case 'UPDATE_PROFILE_PICTURE':
      return {
        ...state,
        profile: {
          ...state.profile,
          banner: {
            ...state.profile.banner,
            profileImageSrc: action.payload,
          },
        },
      };

    case types.change_profile_info:

      return {
        ...state,
        profile: {
          ...state.profile, info: action.payload,
        },

      };

    case types.add_club_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          clubs: [...state.profile.clubs, action.payload],
        },
      };

    case types.remove_club_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          clubs: state.profile.clubs.filter((club) => club.id !== action.payload.id),
        },
      };

    case types.add_certificate_or_license_history:

      return {
        ...state,
        profile: {
          ...state.profile,
          certificatesOrLicenses: [...state.profile.certificatesOrLicenses, action.payload],
        },
      };

    case types.add_course_or_training_history:

      return {
        ...state,
        profile: {
          ...state.profile,
          coursesOrTrainings: [...state.profile.coursesOrTrainings, action.payload],
        },
      };

    case types.remove_certificate_or_license_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          certificatesOrLicenses: state.profile.certificatesOrLicenses.filter((certificateOrLicense) => certificateOrLicense.name !== action.payload.name),
        },
      };

    case types.remove_course_or_training_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          coursesOrTrainings: state.profile.coursesOrTrainings.filter((courseOrTraining) => courseOrTraining.id !== action.payload.id),
        },
      };

    case types.add_award_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          awards: [...state.profile.awards, action.payload],
        },
      };

    case types.remove_award_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          awards: state.profile.awards.filter((award) => award.id !== action.payload.id),
        },
      };

    case types.add_video: {
      const videoExists = state.profile.videos.some((video) => video.url === action.payload.url);

      if (!videoExists) {
        return {
          ...state,
          profile: {
            ...state.profile,
            videos: [...state.profile.videos, action.payload],
          },
        };
      }

      return state;
    }

    case types.remove_video:
      return {
        ...state,
        profile: {
          ...state.profile,
          videos: state.profile.videos.filter((video) => video.url !== action.payload.url),
        },
      };

    default:
      return state;
  }
};
