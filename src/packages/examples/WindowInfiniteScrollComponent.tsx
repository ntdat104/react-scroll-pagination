import React from 'react';
import InfiniteScroll from '../ReactInfiniteScrollComponent';

interface Props {}

const WindowInfiniteScrollComponent: React.FC<Props> = (): JSX.Element => {
  const [data, setData] = React.useState<number[]>(new Array(100).fill(1));

  const next = React.useCallback(() => {
    setTimeout(() => {
      setData(data.concat(new Array(100).fill(1)));
    }, 2000);
  }, [data]);

  return (
    <>
      <InfiniteScroll
        hasMore={true}
        next={next}
        loader={<h1>Loading...</h1>}
        dataLength={data.length}
      >
        {data.map((_, i) => (
          <div
            key={i}
            style={{ height: 30, margin: 4, border: '1px solid hotpink' }}
          >
            #{i + 1} row
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default WindowInfiniteScrollComponent;
