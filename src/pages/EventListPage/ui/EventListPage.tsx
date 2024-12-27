'use client';

import { PeriodFilter } from '@/features/PeriodFilter';
import { ProjectSelect } from '@/features/ProjectSelect';
import { EventList, useEventListFilter } from '@/widgets/EventList';

const EventListPage: React.FC = () => {
  const { projectId, period, setPeriod, setProjectId } = useEventListFilter();

  return (
    <>
      <section aria-label="이벤트 필터링" className="flex py-6">
        <div>
          <ProjectSelect
            selectedProject={projectId}
            onChangeProject={setProjectId}
          />
        </div>
        <div className="ml-4">
          <PeriodFilter selectedOption={period} onChangeOption={setPeriod} />
        </div>
      </section>
      <section aria-label="이벤트 목록">
        <EventList />
      </section>
    </>
  );
};

export default EventListPage;
