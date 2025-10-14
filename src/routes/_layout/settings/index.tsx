import { createFileRoute } from "@tanstack/react-router";
import Settings from "@/components/settings/Settings";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/_layout/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow p-6">
        <Settings />
      </main>
    </div>
  );
}
