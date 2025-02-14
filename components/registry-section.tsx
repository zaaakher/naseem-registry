import { OpenInV0Button } from "@/components/open-in-v0-button";

interface RegistrySectionProps {
  title: string;
  registryName: string;
  children: React.ReactNode;
}

export function RegistrySection({
  title,
  registryName,
  children,
}: RegistrySectionProps) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">
          {title}
        </h2>
        <OpenInV0Button name={registryName} className="w-fit" />
      </div>
      <div className="flex items-center justify-center min-h-[500px] relative">
        {children}
      </div>
    </div>
  );
} 