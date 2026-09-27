import './styles/globals.css';

import { ConfigProvider, Spin } from 'antd';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { router } from './providers/routes';
import { store } from './providers/store/ui/store';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <Suspense fallback={<Spin size="large" className="spin_fallback" />}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
