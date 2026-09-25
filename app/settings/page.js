import SettingsForm from "@/components/SettingsForm";

export const metadata = {
  title: "Settings",
  description: "Demo preferences for the NovaPlay frontend.",
};

export default function SettingsPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Settings
      </h1>
      <p className="mt-1.5 text-sm text-muted">
        Demo preferences stored on this device only.
      </p>

      <div className="mt-8">
        <SettingsForm />
      </div>
    </div>
  );
}
