import { Camera, AlertTriangle, Users } from "lucide-react";

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="orb orb-1 top-0 -left-[200px]" style={{ animationDelay: "-5s" }} />
      </div>

      <div className="container-wide mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            What FormSpotter Does
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            AI form analysis from any phone video
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FormSpotter analyzes exercise form from ordinary phone videos. No hardware,
            no wearables, any phone camera. We extract pose data, measure joint angles
            per rep, isolate reps, and generate a form report with specific corrections
            and a form grade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">The problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              200 million Americans exercise regularly and almost none get feedback on
              their form. Trainers see clients about 3 hours a week; the other 165
              hours no one is watching. Bad form drives 25–65% of gym injuries and
              most go uncorrected because there is no feedback loop between sessions.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Camera className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">How it works</h3>
            <p className="text-muted-foreground leading-relaxed">
              Upload a phone video. Our pipeline runs pose estimation across 17+ body
              landmarks, isolates each rep, measures joint angles, tempo, and range of
              motion, then grades the set against an exercise reference library and
              returns specific, rep-by-rep corrections.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Who it's for</h3>
            <p className="text-muted-foreground leading-relaxed">
              Primarily personal trainers, strength coaches, and gyms who create
              movements, review client form, track progress, and scale coaching
              quality. Individual athletes can also submit videos through messaging
              apps like Telegram and receive form analysis back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
