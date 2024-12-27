'use client';

import { TransportProvider } from '@connectrpc/connect-query';
import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';

import queryClient from '../config/queryClient';
import finalTransport from '../config/rpc';

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransportProvider transport={finalTransport}>
      <TanstackQueryClientProvider client={queryClient}>
        {children}
      </TanstackQueryClientProvider>
    </TransportProvider>
  );
};

export default QueryClientProvider;
