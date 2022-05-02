import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBlogs,
  selectError,
  selectLoading,
} from '../store/blogs/selectors';
import { Button, CircularProgress } from '@mui/material';
import { getBlogsThunk } from '../store/blogs/actions';

export const Blogs: FC = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const getFetchBlogs = async () => {
    dispatch(getBlogsThunk());
  };

  useEffect(() => {
    getFetchBlogs();
  }, []);

  return (
    <>
      <h2>Blogs</h2>
      {error && <p>Ошибка запроса</p>}
      {loading && <CircularProgress />}
      <ul>
        {blogs.map((blog: any) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
      <Button onClick={getFetchBlogs}>Reload</Button>
    </>
  );
};
