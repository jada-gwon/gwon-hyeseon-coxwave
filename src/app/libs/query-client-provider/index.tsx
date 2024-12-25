'use client';

import { TransportProvider } from '@connectrpc/connect-query';
import { createConnectTransport } from '@connectrpc/connect-web';
import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from '@tanstack/react-query';

const finalTransport = createConnectTransport({
  baseUrl:
    'https://frontend-challenge-datetz-backend-725853975024.asia-northeast3.run.app',
});

const queryClient = new QueryClient();

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
