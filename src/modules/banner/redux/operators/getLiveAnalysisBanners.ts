// redux
import { Dispatch } from '@reduxjs/toolkit';
// actions
import { successfulGetCoursesBanner } from '../actions';
// services
import { bannerService } from '../../service';

// ----------------------------------------------------------------------

export default function getLiveAnalysisBanners(successfulCallback: any, errorCallback?: any) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await bannerService.getLiveAnalysisBanners();
      successfulCallback();
      dispatch(successfulGetCoursesBanner(response.data.data));
      //
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      errorCallback != null && errorCallback(err.message);
    }
  };
}
