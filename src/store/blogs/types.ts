import {ERROR_BLOGS, GET_BLOGS, LOADING_BLOGS} from './actions';

export type BlogsActions = GetBlogs | FetchLoading | FetchError;

export interface GetBlogs {
  type: typeof GET_BLOGS;
  blogs: any;
}

export interface FetchLoading {
  type: typeof LOADING_BLOGS;
  loading: boolean;
}

export interface FetchError {
  type: typeof ERROR_BLOGS;
  error: boolean;
}
