'use client';

import { useState } from 'react';

import { EventList, useEventListFilter } from '@/features/EventList';
import { getFilterValue, PeriodFilter } from '@/features/PeriodFilter';
import { ProjectSelect } from '@/features/ProjectSelect';
import useTimezone from '@/pages/api/useTimezone';

const EventListPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedPeriodOption, setSelectedPeriodOption] = useState<
    string | null
  >(null);
  const { data: timezone } = useTimezone(selectedProject);
  const eventListFilter = useEventListFilter();
  const onChangePeriod = (option: string | null) => {
    setSelectedPeriodOption(option);
    eventListFilter.setPeriod(getFilterValue(option, timezone));
  };

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
            selectedOption={selectedPeriodOption}
            onChangeOption={onChangePeriod}
          />
        </div>
      </section>
      <section aria-label="이벤트 목록">
        <EventList projectId={selectedProject} timezone={timezone} />
      </section>
    </>
  );
};

export default EventListPage;
