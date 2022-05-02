import { Dispatch } from 'redux';
import { apiUrl2 } from '../../constants';

export const LOADING_BLOGS = 'BLOGS::LOADING_BLOGS';
export const ERROR_BLOGS = 'BLOGS::ERROR_BLOGS';
export const GET_BLOGS = 'BLOGS::GET_BLOGS';

export const getBlogs = (blogs: any) => ({
  type: GET_BLOGS,
  blogs,
});

export const fetchLoading = (loading: boolean) => ({
  type: LOADING_BLOGS,
  loading,
});

export const fetchError = (error: boolean) => ({
  type: ERROR_BLOGS,
  error,
});

export const getBlogsThunk = () => async (dispatch: Dispatch) => {
  dispatch(fetchLoading(true));
  dispatch(getBlogs([]));
  dispatch(fetchError(false));

  try {
    const res = await fetch(apiUrl2);

    if (!res.ok) {
      throw new Error('response not ok');
    }

    const blogs = await res.json();
    dispatch(getBlogs(blogs));
  } catch (err) {
    dispatch(fetchError(true));
  } finally {
    dispatch(fetchLoading(false));
  }
};
