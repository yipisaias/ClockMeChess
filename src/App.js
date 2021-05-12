import React, { lazy, Suspense, useEffect } from 'react';
import { Plugins, Capacitor } from '@capacitor/core';
import FullPageSpinner from './components/FullPageSpinner';

const Routes = lazy(() => import('./Routes'));

function App() {
  useEffect(() => {
    if (Capacitor.isNative) {
      Plugins.App.addListener('backButton', () => {
        if (window.location.pathname === '/') {
          // eslint-disable-next-line no-alert
          const ans = window.confirm('Tem certeza que deseja sair?');
          if (ans) {
            Plugins.App.exitApp();
          }
        }
      });
    }
  }, []);

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Routes />
    </Suspense>
  );
}

export default App;
