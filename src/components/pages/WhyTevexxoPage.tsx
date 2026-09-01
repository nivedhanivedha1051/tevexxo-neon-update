import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { Logo } from "@/components/Logo";
import { SiteChrome } from "@/components/SiteNav";
import { features } from "@/lib/tevexxo-data";

const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const sectionMotion = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.12 },
  transition: { staggerChildren: 0.08 },
};

export function WhyTevexxoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteChrome />
      <header className="hero-grid relative overflow-hidden pb-16 pt-44">
        <div className="container relative z-10 flex items-center gap-4">
          <Logo className="h-12 w-12" />
          <div>
            <p className="eyebrow">WHY CHOOSE TEVEXXO?</p>
            <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Learn with a <span className="text-orange-500">real advantage.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              Practical learning, expert guidance and the confidence to build what comes next.
            </p>
          </div>
        </div>
      </header>
      <main className="section-space">
        <div className="container">
          <motion.div {...sectionMotion} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  variants={reveal}
                  whileHover={{ y: -3 }}
                  key={feature.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-foreground">{feature.title}</h2>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
          <div className="mt-10 text-center">
            <AppLink href="/contact" className="orange-button">
              Talk to an advisor <ArrowRight size={16} />
            </AppLink>
          </div>
        </div>
      </main>
    </div>
  );
}