'use client';

import { useState } from 'react';

import { EventTable } from '@/features/event-table';
import { PeriodFilter } from '@/features/period-filter';
import { ProjectSelect } from '@/features/project-select';

const EventListPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  return (
    <>
      <section aria-label="이벤트 필터링" className="flex justify-between py-6">
        <div>
          <ProjectSelect
            selectedProject={selectedProject}
            onChangeProject={setSelectedProject}
          />
        </div>
        <div>
          <PeriodFilter
            selectedPeriod={selectedPeriod}
            onChangePeriod={setSelectedPeriod}
          />
        </div>
      </section>
      <section aria-label="이벤트 목록">
        <EventTable
          selectedProjectId={selectedProject}
          // selectedPeriod={selectedPeriod}
        />
      </section>
    </>
  );
};

export default EventListPage;
