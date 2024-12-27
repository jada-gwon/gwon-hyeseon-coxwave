import { useQuery } from '@connectrpc/connect-query';

import { projectApis } from '@/entities/project';

function useProjectList() {
  return useQuery(projectApis.listProjects);
}

export default useProjectList;
