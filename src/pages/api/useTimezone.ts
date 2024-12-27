import { useQuery } from '@connectrpc/connect-query';

import { projectApis } from '@/entities/project';

function useTimezone(projectId: string | null) {
  return useQuery(
    projectApis.getProject,
    {
      id: projectId ?? '',
    },
    {
      select: (data) => data.project?.timeZone?.id,
      enabled: projectId != null,
    },
  );
}

export default useTimezone;
