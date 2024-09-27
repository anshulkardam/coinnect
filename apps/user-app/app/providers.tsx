"use client"
// /apps/user-app/app/providers.tsx
import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store/shared-store'; // Import your shared Redux store

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReduxProvider store={store}>
      {/* Add other providers here (e.g., ThemeProvider) */}
      {children}
    </ReduxProvider>
  );
};

export default Providers;
