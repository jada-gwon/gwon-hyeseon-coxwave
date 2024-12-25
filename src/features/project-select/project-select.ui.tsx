import { Select } from '@/shared/ui/select';

type ProjectSelectProps = {
  selectedProject: string | null;
  onChangeProject: (projectId: string) => void;
};

const ProjectSelect: React.FC<ProjectSelectProps> = ({
  selectedProject,
  onChangeProject,
}) => {
  return (
    <Select
      name="project"
      value={selectedProject}
      placeholder="프로젝트 선택"
      onChangeValue={onChangeProject}
    >
      <Select.Item value="1">Project 1</Select.Item>
      <Select.Item value="2">Project 2</Select.Item>
      <Select.Item value="3">Project 3</Select.Item>
    </Select>
  );
};

export default ProjectSelect;
