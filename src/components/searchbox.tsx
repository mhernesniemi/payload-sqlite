"use client";

import { InstantSearch, useSearchBox, useHits } from "react-instantsearch";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import createClient from "@searchkit/instantsearch-client";
import { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface SearchHit {
  slug: string;
  productName: string;
  productPreview: string;
  priceWithTax: number;
  collectionSlugs: string[];
}

interface SearchRequest {
  params?: {
    query?: string;
  };
}

const searchClient = {
  ...createClient({
    url: "/api/search",
  }),
  search(requests: SearchRequest[]) {
    const shouldSearch = requests.some(
      (request) => request.params?.query && request.params.query.length > 0,
    );

    if (!shouldSearch) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return createClient({ url: "/api/search" }).search(requests);
  },
};

function SearchComponent({ inSidePanel = false }) {
  const { refine } = useSearchBox();
  const { items } = useHits();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const t = useTranslations("common");
  const inputRef = useRef<HTMLInputElement>(null);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#search-container")) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
        refine("");
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [refine]);

  // Autofocus input when in side panel
  useEffect(() => {
    if (inSidePanel && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inSidePanel]);

  const searchInput = (
    <div className="relative">
      <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-slate-800 text-left focus:outline-none">
        <ComboboxInput
          ref={inputRef}
          className="w-full border-none bg-slate-800 py-3 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:ring-0"
          placeholder={t("searchPlaceholder")}
          autoComplete="off"
          value={query}
          onChange={(event) => {
            const value = event.target.value;
            setQuery(value);
            refine(value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
      {isOpen && query.trim().length > 0 && (
        <ComboboxOptions
          static
          className="absolute z-50 mt-1 max-h-96 w-full overflow-auto rounded-md bg-slate-800 py-1 shadow-xl shadow-slate-900/50 ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {items.length === 0 ? (
            <div className="px-4 py-2 text-sm text-gray-400">{t("noResults")}</div>
          ) : (
            items.map((hit, index) => (
              <ComboboxOption
                key={`${hit.slug}-${index}`}
                value={hit}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                    active ? "bg-slate-700 text-white" : "text-gray-200"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  {hit.productPreview ? (
                    <Image
                      src={`${"VENDURE_ROOT_URL"}/assets/${hit.productPreview}`}
                      alt={hit.productName}
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-800">
                      <PhotoIcon className="h-6 w-6 text-slate-600" />
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium">{hit.productName}</div>
                    <div className="text-sm text-gray-400">{hit.priceWithTax}</div>
                  </div>
                </div>
              </ComboboxOption>
            ))
          )}
        </ComboboxOptions>
      )}
    </div>
  );

  return (
    <div id="search-container" className="relative mx-auto w-full max-w-lg">
      <Combobox
        onChange={(hit: SearchHit | null) => {
          if (hit) {
            router.push(`/en/products/${hit.slug}`);
          }
        }}
        onClose={() => {
          setIsOpen(false);
          setQuery("");
          refine("");
        }}
      >
        {searchInput}
      </Combobox>
    </div>
  );
}

export default function SearchBox() {
  return (
    <div className="hidden w-full md:block">
      <InstantSearch
        searchClient={searchClient}
        indexName="vendure-variants"
        future={{
          preserveSharedStateOnUnmount: true,
        }}
      >
        <SearchComponent />
      </InstantSearch>
    </div>
  );
}
