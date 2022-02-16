import React from 'react';
import InfiniteScroll from '../ReactInfiniteScrollComponent';

interface Props {}

const ScrollableTargetInfScroll: React.FC<Props> = (): JSX.Element => {
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
      <h1>demo: Infinite Scroll with scrollable target</h1>
      <hr />
      <div id="scrollableDiv" style={{ height: 300, overflow: 'auto' }}>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
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
    </div>
  );
};

export default ScrollableTargetInfScroll;
