"use client";

import { LanguageSwitcher } from "@/registry/buttons/language-switcher";

export function LanguageSwitcherWrapper() {
  return (
    <LanguageSwitcher
      languages={[
        { label: "English", value: "en" },
        { label: "عربي", value: "ar" },
      ]}
      onLanguageChange={() => {
        console.log("language changed");
      }}
    />
  );
} 