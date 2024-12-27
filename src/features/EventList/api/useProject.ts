import { useQuery } from '@connectrpc/connect-query';

import { projectApis } from '@/entities/project';

function useProject(projectId: string) {
  return useQuery(projectApis.getProject, {
    id: projectId,
  });
}

export default useProject;
