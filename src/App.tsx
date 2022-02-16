import React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import InfiniteScrollWithHeight from './packages/examples/InfiniteScrollWithHeight';
import PullDownToRefreshInfScroll from './packages/examples/PullDownToRefreshInfScroll';
import ScrollableTargetInfScroll from './packages/examples/ScrollableTargetInfScroll';
import ScrolleableTop from './packages/examples/ScrolleableTop';
import WindowInfiniteScrollComponent from './packages/examples/WindowInfiniteScrollComponent';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <nav>
        <p>
          <Link to="infinite-scroll-with-height">InfiniteScrollWithHeight</Link>
        </p>
        <p>
          <Link to="scrollable-target-inf-scroll">
            scrollable-target-inf-scroll
          </Link>
        </p>
        <p>
          <Link to="pull-down-to-refresh-inf-scroll">
            pull-down-to-refresh-inf-scroll
          </Link>
        </p>
        <p>
          <Link to="scrolleable-top">scrolleable-top</Link>
        </p>
        <p>
          <Link to="window-infinite-scroll-component">
            window-infinite-scroll-component
          </Link>
        </p>
      </nav>
      <Routes>
        <Route
          path="/infinite-scroll-with-height"
          element={<InfiniteScrollWithHeight />}
        />
        <Route
          path="/scrollable-target-inf-scroll"
          element={<ScrollableTargetInfScroll />}
        />
        <Route path="/scrolleable-top" element={<ScrolleableTop />} />
        <Route
          path="/window-infinite-scroll-component"
          element={<WindowInfiniteScrollComponent />}
        />
        <Route
          path="/pull-down-to-refresh-inf-scroll"
          element={<PullDownToRefreshInfScroll />}
        />
        <Route
          path="*"
          element={<Navigate to="/infinite-scroll-with-height" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
