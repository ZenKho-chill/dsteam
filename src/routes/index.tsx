import { createFileRoute } from "@tanstack/react-router";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Team,
  Stats,
  Footer,
} from "@/components/dsteam/Sections";

const title = "DSTEAM DEVELOPER — UI/UX script FiveM Việt Nam";
const description =
  "DSTEAM DEVELOPER: đội ngũ phát triển script FiveM tại Việt Nam. Resource tối ưu, bảo mật, dễ mở rộng cho server GTA V roleplay.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Team />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
