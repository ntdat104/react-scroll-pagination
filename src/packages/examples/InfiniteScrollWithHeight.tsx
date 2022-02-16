import React from 'react';
import InfiniteScroll from '../ReactInfiniteScrollComponent';

interface Props {}

const InfiniteScrollWithHeight: React.FC<Props> = (): JSX.Element => {
  const [items, setItems] = React.useState<number[]>(
    Array.from({ length: 20 })
  );
  const [hasMore, setHasMore] = React.useState<boolean>(true);

  const fetchMoreData = React.useCallback(() => {
    if (items.length >= 500) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 500);
  }, [items]);

  return (
    <div>
      <h1>demo: Infinite Scroll with fixed height</h1>
      <hr />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={400}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollThreshold={0.8}
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

export default InfiniteScrollWithHeight;
