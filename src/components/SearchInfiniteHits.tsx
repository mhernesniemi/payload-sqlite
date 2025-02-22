import React from "react";
import { useInfiniteHits, UseInfiniteHitsProps } from "react-instantsearch";
import SearchHit from "./SearchHit";
import Button from "./Button";

interface Hit {
  id: string;
  title: string;
  slug: string;
}

export default function SearchInfiniteHits(props: UseInfiniteHitsProps<Hit>) {
  const { items, showMore, isLastPage } = useInfiniteHits(props);

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        {items.map((hit, index) => (
          <div key={index}>
            <SearchHit hit={hit} />
          </div>
        ))}
      </div>

      {!isLastPage && (
        <div className="flex justify-center">
          <Button onClick={showMore} style="secondary" size="sm">
            Näytä lisää tuloksia
          </Button>
        </div>
      )}
    </div>
  );
}
