import { User, Linkedin } from "lucide-react";

const team = [
  {
    name: "Phillip McKnight",
    role: "Co-CEO",
    bio: "Built FormSpotter's competitive intelligence and B2B prospecting systems; leads commercial, governance, and go-to-market.",
    linkedin: "https://www.linkedin.com/in/phil-mck/",
  },
  {
    name: "Aidan McKnight",
    role: "Co-CEO",
    bio: "Machine learning specialist across computer vision, NLP, and reinforcement learning. Builds and trains the pose-estimation models that power FormSpotter. Started it to help his dad train safely.",
    linkedin: "https://www.linkedin.com/in/aidan-a-mcknight/",
  },
  {
    name: "Isaac Austin",
    role: "Lead Architect",
    bio: "Cloud engineering at Microsoft Azure and independent app development. Leads FormSpotter's multi-platform app and system architecture.",
    linkedin: "https://www.linkedin.com/in/aisaacn/",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="container-wide mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            The team behind FormSpotter
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft text-center"
            >
              <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent/30 mx-auto mb-6 flex items-center justify-center">
                <User className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-accent font-medium mt-1 mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="inline-flex items-center gap-2 mt-5 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
