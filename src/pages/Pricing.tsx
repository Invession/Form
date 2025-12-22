import { Check, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    price: "Free",
    period: "forever",
    features: [
      "Up to 5 team members",
      "Basic project management",
      "1GB storage",
      "Email support",
      "Basic integrations",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing teams that need more power",
    price: "$29",
    period: "per user/month",
    features: [
      "Unlimited team members",
      "Advanced project management",
      "100GB storage",
      "Priority support",
      "Advanced integrations",
      "Custom workflows",
      "Analytics dashboard",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    period: "contact sales",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security (SSO, SAML)",
      "Dedicated account manager",
      "Custom training",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! The Professional plan comes with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What happens when my trial ends?",
    answer:
      "You'll be notified before your trial ends. You can choose to upgrade to a paid plan or continue with the free Starter plan.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="orb orb-1 -top-[200px] left-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow" />
        </div>

        <div className="container-tight mx-auto text-center relative">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Simple, <span className="text-gradient">transparent</span> pricing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the plan that's right for your team. All plans include a
            14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background -mt-8 relative">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative p-8 rounded-3xl border transition-all duration-300",
                  plan.popular
                    ? "bg-accent/10 border-accent/50 shadow-accent scale-105"
                    : "bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium hover:border-accent/30"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-accent-gradient text-accent-foreground text-sm font-medium shadow-accent">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "accent" : "outline"}
                  size="lg"
                  className={cn("w-full", plan.popular && "animate-glow-pulse")}
                  asChild
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-tight mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="orb orb-2 bottom-0 right-1/4" style={{ animationDelay: "-12s" }} />
        </div>

        <div className="container-tight mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is here to help. Get in touch and we'll get back to you
            within 24 hours.
          </p>
          <Button variant="accent" size="xl" asChild className="animate-glow-pulse">
            <Link to="/contact">
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
