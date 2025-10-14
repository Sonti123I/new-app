import { createFileRoute } from "@tanstack/react-router";
import DashBoard from "@/components/dashboard/Dashboard";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/_layout/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow p-6">
        <DashBoard />
      </main>
    </div>
  );
}
