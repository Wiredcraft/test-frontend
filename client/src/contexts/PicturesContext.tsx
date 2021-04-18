import * as React from 'react';
import {
  useMemo,
  useState,
  useContext,
  createContext,
  useCallback,
  useRef,
} from 'react';

export type TPicture = {
  _id: string;
  index: number;
  name: string;
  src: string;
};

type TPictureQuery = {
  fetchData: (chunk: number, search?: string) => void;
  result: {
    isAll: boolean;
    allData: TPicture[];
    currentData: TPicture[];
    loadingFirst: boolean;
    loadingMore: boolean;
    error: Error | undefined;
  };
};

const PicturesContext = createContext<TPictureQuery | undefined>(undefined);

function usePicturesLazy(): TPictureQuery {
  const context = useContext(PicturesContext);

  if (!context)
    throw new Error('usePicturesLazy must be used within a PicturesProvider');

  return context;
}

/**
 * I use Apollo Client to manage state at work.
 * I took this project as a chance to experiment managing state with React's context api.
 * Replacing useState with useReducer can have better scalability.
 */

function PicturesProvider(props: any) {
  const [allData, setData] = useState<TPicture[]>([]);
  const [currentData, setCurrentData] = useState<TPicture[]>([]);
  const [loadingFirst, setLoadingFirst] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<undefined | Error>(undefined);
  const [called, setCalled] = useState<boolean>(false);
  const isAll = useRef(false);

  const fetchData = useCallback((chunk: number, search: string) => {
    // still on current route, and loaded all pictures, no need to keep fetching
    if (isAll.current && chunk !== 0) return;

    // switched to a new route, reset data
    if (chunk === 0) {
      setData([]);
      setCurrentData([]);
      setLoadingFirst(true);
    } else {
      setLoadingMore(true);
    }

    fetch(`http://localhost:3000/data?chunk=${chunk}&search=${search || ''}`)
      .then((res) =>
        res.json().then((res) => {
          setData((pics) => [...pics, ...res]);
          setCurrentData(res);
          setCalled(true);
          isAll.current = res.length === 0 ? true : false;
        })
      )
      .catch((err) => setError(err))
      .finally(() => {
        setLoadingFirst(false);
        setLoadingMore(false);
      });
  }, []);

  const value = useMemo<TPictureQuery>(
    () => ({
      fetchData,
      result: {
        isAll: isAll.current,
        loadingFirst,
        loadingMore,
        error,
        allData,
        currentData,
      },
    }),
    [allData, currentData, loadingFirst, loadingMore, error, called, isAll]
  );
  return <PicturesContext.Provider value={value} {...props} />;
}

export { PicturesProvider, usePicturesLazy };
