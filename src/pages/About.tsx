import { Layout } from "@/components/layout/Layout";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to empower teams to do their best work. Every decision we make is guided by this purpose.",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description:
      "Our customers are at the heart of everything we do. Their success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We constantly push boundaries and challenge the status quo to deliver breakthrough solutions.",
  },
  {
    icon: Users,
    title: "Stronger Together",
    description:
      "We believe in the power of collaboration—both within our team and with our customers.",
  },
];

const team = [
  {
    name: "Alexandra Wright",
    role: "CEO & Co-founder",
    bio: "Former VP at Google, 15+ years in tech leadership.",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-founder",
    bio: "Ex-Stripe engineer, passionate about scalable systems.",
  },
  {
    name: "Sarah Johnson",
    role: "VP of Product",
    bio: "Previously led product at Notion and Figma.",
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    bio: "Built engineering teams at three successful startups.",
  },
];

const stats = [
  { value: "10K+", label: "Active Teams" },
  { value: "50M+", label: "Tasks Completed" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Countries" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-tight mx-auto text-center">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            We're building the future of work
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded in 2020, Nexus was born from a simple idea: work should be
            easier. Today, we help thousands of teams collaborate better and
            achieve more.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-tight mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                From frustration to innovation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nexus started when our founders, working at a fast-growing
                  startup, realized that the tools meant to help them were
                  actually slowing them down. Disconnected apps, endless
                  context-switching, and information silos were killing
                  productivity.
                </p>
                <p>
                  They set out to build something different: a unified platform
                  that brings teams together, automates the mundane, and lets
                  people focus on work that matters. Three years later, Nexus is
                  trusted by over 10,000 teams worldwide.
                </p>
                <p>
                  Today, we're a diverse team of 150+ people across 20
                  countries, united by our mission to make work feel less like
                  work.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-accent/10 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              What drives us every day
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision we make and every product
              we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-card border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Meet the team behind Nexus
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced leaders from the world's best companies, united by a
              shared vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-4xl font-bold text-accent">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
