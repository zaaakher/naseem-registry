import * as React from "react";
import { HelloWorld } from "@/registry/hello-world/hello-world";
import { ExampleForm } from "@/registry/example-form/example-form";
import PokemonPage from "@/registry/complex-component/page";
import { ThemeSwitcher } from "@/registry/buttons/theme-switcher";
import { RegistrySection } from "@/components/registry-section";
import { LanguageSwitcher } from "@/registry/buttons/language-switcher";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distribution code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <RegistrySection
          title="A simple hello world component"
          registryName="hello-world"
        >
          <HelloWorld />
        </RegistrySection>

        <RegistrySection title="Theme Switcher" registryName="theme-switcher">
          <ThemeSwitcher />
        </RegistrySection>
        <RegistrySection
          title="Language Switcher"
          registryName="language-switcher"
        >
          <LanguageSwitcher
            languages={[
              { label: "English", value: "en" },
              { label: "عربي", value: "ar" },
            ]}
            // onLanguageChange={() => {
            //   console.log("language changed");
            // }}
          />
        </RegistrySection>

        <RegistrySection
          title="A contact form with Zod validation."
          registryName="example-form"
        >
          <ExampleForm />
        </RegistrySection>

        <RegistrySection
          title="A complex component showing hooks, libs and components."
          registryName="complex-component"
        >
          <PokemonPage />
        </RegistrySection>
      </main>
    </div>
  );
}
