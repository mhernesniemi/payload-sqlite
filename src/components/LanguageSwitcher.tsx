"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, MenuButton, Transition, MenuItems, MenuItem } from "@headlessui/react";
import { LanguageIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className="inline-flex items-center justify-center gap-2 p-2"
        aria-label={t("switchLanguage")}
      >
        <LanguageIcon className="h-5 w-5" aria-hidden="true" />
        <span className="text-sm font-medium">{locale.toUpperCase()}</span>
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-stone-700 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <MenuItem>
              <button
                onClick={() => handleLocaleChange("fi")}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm data-[focus]:bg-stone-800"
              >
                <div className="w-4">{locale === "fi" && <CheckIcon className="h-4 w-4" />}</div>
                <span>Suomi</span>
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => handleLocaleChange("en")}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm data-[focus]:bg-stone-800"
              >
                <div className="w-4">{locale === "en" && <CheckIcon className="h-4 w-4" />}</div>
                <span>English</span>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
