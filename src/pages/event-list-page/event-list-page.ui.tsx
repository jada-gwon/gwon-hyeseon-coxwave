'use client';

import { useState } from 'react';

import { ProjectSelect } from '@/features/project-select';

const EventListPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <>
      <section aria-label="이벤트 필터링">
        <ProjectSelect
          selectedProject={selectedProject}
          onChangeProject={(projectId) => {
            console.log(projectId);
            setSelectedProject(projectId);
          }}
        />
      </section>
      <section aria-label="이벤트 목록"></section>
    </>
  );
};

export default EventListPage;
