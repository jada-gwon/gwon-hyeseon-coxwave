import { useQuery } from '@connectrpc/connect-query';

import { projectApis } from '@/entities/project';
import { Select } from '@/shared/ui/select';

type ProjectSelectProps = {
  selectedProject: string | null;
  onChangeProject: (projectId: string) => void;
};

const ProjectSelect: React.FC<ProjectSelectProps> = ({
  selectedProject,
  onChangeProject,
}) => {
  const { data } = useQuery(projectApis.listProjects);
  return (
    <Select
      name="project"
      value={selectedProject}
      placeholder="프로젝트 선택"
      onChangeValue={onChangeProject}
    >
      {data?.projects.map(({ id, displayName }) => (
        <Select.Item key={id} value={id}>
          {displayName}
        </Select.Item>
      ))}
    </Select>
  );
};

export default ProjectSelect;
