import { useQuery } from '@connectrpc/connect-query';

import { projectApis } from '@/entities/project';

import { useProjectId } from '../model/useEventListFilter';

function useTimezone() {
  const projectId = useProjectId();
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
