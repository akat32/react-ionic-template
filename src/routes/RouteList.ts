import { lazy } from 'react';

function componentLoader(lazyComponent: any, attemptsLeft = 2) {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch((error: Error) => {
        setTimeout(() => {
          if (attemptsLeft === 1) {
            reject(error);
            return;
          }
          componentLoader(lazyComponent, attemptsLeft - 1).then(resolve, reject);
        }, 1000);
      });
  });
}

const MainPage = lazy(() => componentLoader(() => import('pages/Main')));

export default {
  
};
