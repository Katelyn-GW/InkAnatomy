import { createBrowserRouter, Outlet } from 'react-router';
import { IPhoneFrame } from './components/IPhoneFrame';
import { TattooProvider } from './context/TattooContext';
import { LibraryProvider } from './context/LibraryContext';
import SplashPage from './pages/SplashPage';
import LibraryPage from './pages/LibraryPage';
import LibrarySelectedPage from './pages/LibrarySelectedPage';
import PreviewPage from './pages/PreviewPage';
import EditorPage from './pages/EditorPage';
import AddTattooPage from './pages/AddTattooPage';

function Layout({ children }: { children: React.ReactNode }) {
  return <IPhoneFrame>{children}</IPhoneFrame>;
}

function RootLayout() {
  return (
    <LibraryProvider>
      <TattooProvider>
        <Outlet />
      </TattooProvider>
    </LibraryProvider>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Layout><SplashPage /></Layout>,
      },
      {
        path: '/library',
        element: <Layout><LibraryPage /></Layout>,
      },
      {
        path: '/library-selected',
        element: <Layout><LibrarySelectedPage /></Layout>,
      },
      {
        path: '/preview',
        element: <Layout><PreviewPage /></Layout>,
      },
      {
        path: '/editor',
        element: <Layout><EditorPage /></Layout>,
      },
      {
        path: '/add-tattoo',
        element: <Layout><AddTattooPage /></Layout>,
      },
    ],
  },
]);