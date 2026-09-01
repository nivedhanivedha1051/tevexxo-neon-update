import { createFileRoute } from "@tanstack/react-router";
import { WhyTevexxoPage } from "@/components/pages/WhyTevexxoPage";

export const Route = createFileRoute("/why-tevexxo")({
  component: WhyTevexxoPage,
  head: () => ({
    meta: [
      { title: "Why Choose Tevexxo — Learn with a real advantage" },
      {
        name: "description",
        content:
          "Discover the mentor-led, industry-aligned learning experience that gives Tevexxo learners a real advantage.",
      },
      { property: "og:title", content: "Why Choose Tevexxo — Learn with a real advantage" },
      {
        property: "og:description",
        content:
          "Discover the mentor-led, industry-aligned learning experience that gives Tevexxo learners a real advantage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});