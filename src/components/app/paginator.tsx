import { useSearchParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export const Paginator = ({
  totalPages,
  page,
  onPageChange,
}: {
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <Pagination>
      <PaginationPrevious
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </PaginationPrevious>
      <PaginationContent>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          const isCurrent = pageNumber === page;

          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            Math.abs(pageNumber - page) <= 2
          ) {
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => onPageChange(pageNumber)}
                  isActive={isCurrent}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          }

          if (Math.abs(pageNumber - page) === 3) {
            return <PaginationEllipsis key={index} />;
          }

          return null;
        })}
      </PaginationContent>
      <PaginationNext
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </PaginationNext>
    </Pagination>
  );
};
