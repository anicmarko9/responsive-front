import React, { Profiler, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'typeface-roboto';

import Loading from '@Components/features/Loading';
import './styles/index.css';
import App from '@/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Profiler id="App" onRender={onRender}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </Profiler>
  </StrictMode>,
);

let initialRender = true;

function onRender(actualDuration, baseDuration, startTime, commitTime) {
  if (initialRender) {
    const memoizationFactor = actualDuration / baseDuration;
    const renderDuration = commitTime - startTime;
    const timeToCommit = commitTime - startTime;
    const renderData = [
      {
        Event: 'Render Start',
        Time: `${startTime} ms`,
        Duration: `${renderDuration} ms`,
      },
      {
        Event: 'Update Commit',
        Time: `${commitTime} ms`,
        Duration: `${timeToCommit} ms`,
      },
      {
        Event: 'Render Complete',
        Time: `${commitTime} ms`,
        Duration: `${actualDuration} ms`,
      },
    ];

    const memoizationData = {
      'Memoization Factor': memoizationFactor,
    };

    console.table(renderData, ['Event', 'Time', 'Duration']);
    console.table(memoizationData);

    initialRender = false;
  }
}
