import { useQuery } from '@connectrpc/connect-query';

import { getProject, listProjects } from './project.api';

export function useProject(projectId: string) {
  return useQuery(getProject, {
    id: projectId,
  });
}

export function useProjectList() {
  return useQuery(listProjects);
}
