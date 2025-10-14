import { Button } from "./ui/button";
import { useNavigate } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "bg-black text-white"
      : "bg-transparent text-gray-700 hover:bg-gray-100";

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Nav Buttons */}
        <div className="flex gap-3">
          <Button
            className={`rounded-md px-5 py-2 text-sm font-medium transition-all duration-200 ${isActive(
              "/dashboard"
            )}`}
            onClick={() => navigate({ to: "/dashboard" })}
          >
            Dashboard
          </Button>

          <Button
            className={`rounded-md px-5 py-2 text-sm font-medium transition-all duration-200 ${isActive(
              "/settings"
            )}`}
            onClick={() => navigate({ to: "/settings" })}
          >
            Settings
          </Button>
        </div>
      </nav>
    </header>
  );
}
