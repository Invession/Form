import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Animated orbs */}
        <div className="orb orb-1 -top-[200px] -right-[200px]" style={{ animationDelay: "0s" }} />
        <div className="orb orb-2 top-1/2 -left-[150px]" style={{ animationDelay: "-7s" }} />
        <div className="orb orb-3 -bottom-[200px] right-1/4" style={{ animationDelay: "-14s" }} />
        
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow animate-pulse" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative container-wide mx-auto section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm shadow-soft border border-border mb-8 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              New: AI-powered workflows are here
            </span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Build better products,{" "}
            <span className="text-gradient">faster together</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            The all-in-one platform that helps teams collaborate, ship features,
            and deliver exceptional experiences to customers worldwide.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button variant="accent" size="xl" asChild className="animate-glow-pulse">
              <Link to="/contact">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-border/50 backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div
            className="mt-20 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by industry-leading teams
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((company) => (
                <div
                  key={company}
                  className="text-xl font-semibold text-muted-foreground"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
