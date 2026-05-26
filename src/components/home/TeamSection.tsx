import { User } from "lucide-react";

const team = [
  {
    name: "Phillip McKnight",
    role: "Co-CEO",
    bio: "Built FormSpotter's competitive intelligence and B2B prospecting systems; leads commercial, governance, and go-to-market.",
  },
  {
    name: "Aidan McKnight",
    role: "Co-CEO",
    bio: "Leads technology and product; built FormSpotter to help his dad train safely.",
  },
  {
    name: "Isaac Austin",
    role: "Lead Architect",
    bio: "Previously at Microsoft Azure; leads system architecture.",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
