import React, { FC, useEffect } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectArticles,
  selectError,
  selectLoading,
} from '../store/articles/selectors';
import { getArticlesThunk } from '../store/articles/actions';

export const Articles: FC = () => {
  // const [articles, setArticles] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const getFetchArticles = async () => {
    dispatch(getArticlesThunk());
  };

  useEffect(() => {
    getFetchArticles();
  }, []);

  return (
    <>
      <h2>Articles</h2>
      {error && <p>Ошибка запроса</p>}
      {loading && <CircularProgress />}
      <ul>
        {articles.map((article: any) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      <Button onClick={getFetchArticles}>Reload</Button>
    </>
  );
};
