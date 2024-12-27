import { createConnectTransport } from '@connectrpc/connect-web';

const finalTransport = createConnectTransport({
  baseUrl:
    'https://frontend-challenge-datetz-backend-725853975024.asia-northeast3.run.app',
});

export default finalTransport;
