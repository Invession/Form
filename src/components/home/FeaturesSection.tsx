import { Zap, Shield, Users, BarChart3, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed. Our platform is optimized for performance, so you can focus on what matters most.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with SOC 2 compliance, end-to-end encryption, and advanced access controls.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Real-time collaboration tools that keep everyone aligned and moving in the same direction.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Deep insights into your workflow with custom dashboards and automated reporting.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Infrastructure that scales with you, from startup to enterprise, anywhere in the world.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Smart automation and AI assistance that learns your patterns and accelerates your work.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help teams work smarter, move faster,
            and achieve more together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card-gradient border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
