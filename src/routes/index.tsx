import { createFileRoute } from "@tanstack/react-router";
import InstagramLoader from "@/components/InitialLogoLoader";

function Home() {
  return (
    <div>
      <InstagramLoader/>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});
