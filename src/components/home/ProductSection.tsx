import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  "Pose estimation tracking 17+ body landmarks per frame",
  "Per-rep joint-angle measurement",
  "Automatic rep isolation",
  "Tempo and range-of-motion tracking",
  "Form grading against an exercise reference library",
  "Trainer web app for managing clients and movements",
  "Messaging path (Telegram bot) for individual athletes",
];

export function ProductSection() {
  return (
    <section id="product" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="orb orb-2 -bottom-[200px] right-0" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="container-wide mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Product
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Live today, scaling now
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FormSpotter's web app is live at{" "}
            <a
              href="https://app.formspotter.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              app.formspotter.ai
            </a>{" "}
            with movement creation and a form-evaluation pipeline. A Telegram bot is
            operational, and a trainer testing program is in preparation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-6">Capabilities</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button variant="accent" size="xl" asChild className="animate-glow-pulse">
            <a
              href="https://app.formspotter.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the demo
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
