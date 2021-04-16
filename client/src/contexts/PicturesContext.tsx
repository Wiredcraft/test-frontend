import * as React from 'react';
import { useMemo, useState, useEffect, useContext, createContext, useCallback } from 'react';

export type TPicture = {
  _id: string,
  index: number,
  name: string,
  src: string
};

type TPictureQuery = {
  data: TPicture[]
  loading: boolean
  error: Error | undefined
}

type TPictureQueryMore = {
  fetchMore: (chunk: number) => void,
  result: TPictureQuery
}

type TPicturesContext = [TPictureQuery, TPictureQueryMore];

const PicturesContext = createContext<TPicturesContext | undefined>(undefined);

/**
 * I use Apollo Client to manage state at work.
 * This is my experiment to minic Apollo with React's context api. 
 * https://www.apollographql.com/docs/react/api/react/hooks/#usequery
 */
function usePictures() {
  const context = useContext(PicturesContext);

  if (!context) throw new Error('usePictures must be used within a PicturesProvider');

  const [pictures] = context;

  return pictures;
}

// https://www.apollographql.com/docs/react/api/react/hooks/#uselazyquery
function useMorePictures() {
  const context = useContext(PicturesContext);

  if (!context) throw new Error('usePictures must be used within a PicturesProvider');

  const [_, fetchMore] = context;

  return fetchMore;
}

/**
 * this is a native approach, just trying things out.
 * adding switch to useReducer might be more interesting, 
 */
function PicturesProvider(props: any) {
  const [pictures, setPictures] = useState<TPicture[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<undefined | Error>(undefined);

  const [morePictures, setMorePictures] = useState<TPicture[]>([]);
  const [moreLoading, setMoreLoading] = useState<boolean>(false);
  const [moreError, setMoreError] = useState<undefined | Error>(undefined);

  const fetchMore = useCallback((chunk: number) => getPics(setPictures, setMoreError, setMoreLoading, chunk, setMorePictures), []);

  const value = useMemo(() => [
    { data: pictures, loading, error }, { fetchMore, result: { loading: moreLoading, error: moreError, data: morePictures } }
  ], [pictures, loading, error, morePictures, moreLoading, moreError]);

  useEffect(() => {
    getPics(setPictures, setError, setLoading, 0);
  }, []);

  return <PicturesContext.Provider value={value} {...props} />;
}

function getPics(
  setPictures: React.Dispatch<React.SetStateAction<TPicture[]>>,
  setError: React.Dispatch<React.SetStateAction<Error>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  chunk: number,
  setMorePictures?: React.Dispatch<React.SetStateAction<TPicture[]>>,
) {
  setLoading(true);
  fetch(`http://localhost:3000/data?chunk=${chunk}`)
    .then(res => res.json()
      .then(res => {
        setPictures(pics => [...pics, ...res]);
        if (setMorePictures) setMorePictures(res);
      }))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
}

export { PicturesProvider, usePictures, useMorePictures };
