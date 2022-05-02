import { BlogsActions } from './types';
import { Reducer } from 'redux';
import {ERROR_BLOGS, GET_BLOGS, LOADING_BLOGS} from './actions';

export interface BlogsState {
  loading: boolean;
  error: boolean;
  blogs: any;
}

const initialStateBlogs: BlogsState = {
  loading: false,
  error: false,
  blogs: [],
};

export const blogsReducer: Reducer<BlogsState, BlogsActions> = (
  state = initialStateBlogs,
  action
) => {
  switch (action.type) {
    case LOADING_BLOGS: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case ERROR_BLOGS: {
      return {
        ...state,
        error: action.error,
      };
    }
    case GET_BLOGS: {
      return {
        ...state,
        blogs: action.blogs,
      };
    }
    default: {
      return state;
    }
  }
};
