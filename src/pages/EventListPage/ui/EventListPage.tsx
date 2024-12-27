'use client';

import { useState } from 'react';

import { EventList } from '@/features/EventList';
import { PeriodFilter } from '@/features/PeriodFilter';
import { ProjectSelect } from '@/features/ProjectSelect';

const EventListPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <>
      <section aria-label="이벤트 필터링" className="flex py-6">
        <div>
          <ProjectSelect
            selectedProject={selectedProject}
            onChangeProject={setSelectedProject}
          />
        </div>
        <div className="ml-4">
          <PeriodFilter
            onChangePeriod={(period) => {
              console.log(period);
            }}
          />
        </div>
      </section>
      <section aria-label="이벤트 목록">
        <EventList projectId={selectedProject} />
      </section>
    </>
  );
};

export default EventListPage;
