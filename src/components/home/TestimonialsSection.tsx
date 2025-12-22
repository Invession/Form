import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nexus has completely transformed how our team collaborates. We've cut our project delivery time in half.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
    rating: 5,
  },
  {
    quote:
      "The best platform we've used. The AI features alone have saved us countless hours every week.",
    author: "Marcus Johnson",
    role: "Product Manager",
    company: "InnovateLab",
    rating: 5,
  },
  {
    quote:
      "Finally, a tool that actually understands how modern teams work. Couldn't imagine going back.",
    author: "Emily Rodriguez",
    role: "Design Director",
    company: "CreativeHQ",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="orb orb-3 -bottom-[200px] left-1/4" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="container-wide mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Loved by teams worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of teams who have already transformed their workflow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft hover:shadow-medium hover:border-accent/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                  <span className="text-lg font-semibold text-accent">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
