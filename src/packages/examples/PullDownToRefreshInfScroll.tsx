import React from 'react';
import InfiniteScroll from '../ReactInfiniteScrollComponent';

interface Props {}

const PullDownToRefreshInfScroll: React.FC<Props> = (): JSX.Element => {
  const [items, setItems] = React.useState<number[]>(
    Array.from({ length: 20 })
  );

  const fetchMoreData = React.useCallback(() => {
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1500);
  }, [items]);

  return (
    <div>
      <h1>demo: Pull down to refresh</h1>
      <hr />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        pullDownToRefresh
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
        refreshFunction={fetchMoreData}
      >
        {items.map((_, index) => (
          <div
            style={{
              height: 30,
              border: '1px solid green',
              margin: 6,
              padding: 8,
            }}
            key={index}
          >
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default PullDownToRefreshInfScroll;
