import Image from 'next/image';

import { IconChevronLeft, IconChevronRight } from '@/shared/ui';

import { getPageLabel } from './simple-paginator.lib';

type SimplePaginatorProps = {
  currentPage: number;
  totalSize: number;
  pageSize: number;
  isFetching: boolean;
  onChangePage: (page: number) => void;
};

const SimplePaginator: React.FC<SimplePaginatorProps> = ({
  currentPage,
  totalSize,
  pageSize,
  isFetching,
  onChangePage,
}) => {
  const totalPage = Math.ceil(totalSize / pageSize) - 1;
  const hasPrevPage = currentPage > 0;
  const hasNextPage = currentPage < totalPage;

  const prev = () => {
    const nextPage = currentPage - 1;
    if (nextPage < 0) {
      return;
    }
    onChangePage(nextPage);
  };

  const next = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPage) {
      return;
    }
    onChangePage(nextPage);
  };

  return (
    <div className="inline-flex items-center">
      <span className="min-w-28 text-center font-medium text-gray-700">
        {isFetching ? (
          <Image
            src="/3-dots-fade.svg"
            width={16}
            height={16}
            alt="로딩 중"
            className="inline-block"
          />
        ) : (
          getPageLabel(currentPage, totalSize, pageSize)
        )}
      </span>
      <div className="ml-2 flex gap-5">
        <button
          onClick={prev}
          aria-label="이전 페이지 보기"
          disabled={!hasPrevPage}
          className="text-gray-500 hover:text-gray-700 disabled:text-gray-200"
        >
          <IconChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          onClick={next}
          aria-label="다음 페이지 보기"
          disabled={!hasNextPage}
          className="text-gray-500 hover:text-gray-700 disabled:text-gray-200"
        >
          <IconChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default SimplePaginator;
