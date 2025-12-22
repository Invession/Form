import { useState, useEffect } from "react";
import { Check, Bell, BarChart3, Users, Zap } from "lucide-react";

const demoScreens = [
  {
    title: "Dashboard",
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Welcome back!</span>
          <Bell className="w-4 h-4 text-accent" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
            <BarChart3 className="w-4 h-4 text-accent mb-1" />
            <p className="text-[10px] text-muted-foreground">Revenue</p>
            <p className="text-sm font-semibold text-foreground">$48.2k</p>
          </div>
          <div className="p-2 rounded-lg bg-card border border-border/50">
            <Users className="w-4 h-4 text-accent mb-1" />
            <p className="text-[10px] text-muted-foreground">Users</p>
            <p className="text-sm font-semibold text-foreground">2,847</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-accent/20 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-accent-gradient rounded-full animate-pulse" />
          </div>
          <div className="h-2 w-full bg-accent/20 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-accent-gradient rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Tasks",
    content: (
      <div className="space-y-2">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-foreground">Today's Tasks</span>
          <span className="text-[10px] text-accent">3/5 done</span>
        </div>
        {["Design review", "Team standup", "Ship feature"].map((task, i) => (
          <div key={task} className="flex items-center gap-2 p-2 rounded-lg bg-card border border-border/50">
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${i < 2 ? "border-accent bg-accent" : "border-muted-foreground"}`}>
              {i < 2 && <Check className="w-2.5 h-2.5 text-accent-foreground" />}
            </div>
            <span className={`text-xs ${i < 2 ? "line-through text-muted-foreground" : "text-foreground"}`}>{task}</span>
          </div>
        ))}
        {["Update docs", "Code review"].map((task) => (
          <div key={task} className="flex items-center gap-2 p-2 rounded-lg bg-card/50 border border-border/30">
            <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/50" />
            <span className="text-xs text-muted-foreground">{task}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Analytics",
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-foreground">Weekly Overview</span>
          <Zap className="w-4 h-4 text-accent" />
        </div>
        <div className="flex items-end justify-between h-20 gap-1">
          {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div 
                className="w-full bg-accent-gradient rounded-t-sm transition-all duration-500"
                style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
              />
              <span className="text-[8px] text-muted-foreground">
                {["M", "T", "W", "T", "F", "S", "S"][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-[10px] text-muted-foreground">Growth</p>
          <p className="text-sm font-semibold text-accent">+24.5%</p>
        </div>
      </div>
    ),
  },
];

export function PhoneMockup() {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % demoScreens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Phone glow */}
      <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75" />
      
      {/* Phone frame */}
      <div className="relative w-[280px] h-[560px] bg-gradient-to-b from-muted/80 to-muted/40 rounded-[3rem] p-2 shadow-medium border border-border/50 backdrop-blur-sm">
        {/* Inner bezel */}
        <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-10 flex items-center justify-center">
            <div className="w-12 h-1.5 bg-muted rounded-full" />
          </div>

          {/* Status bar */}
          <div className="absolute top-2 left-6 right-6 flex items-center justify-between text-[10px] text-muted-foreground z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-muted-foreground rounded-sm">
                <div className="w-3/4 h-full bg-accent rounded-sm" />
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div className="absolute inset-0 pt-10 px-4 pb-8">
            {/* App header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-accent-gradient flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xs">N</span>
              </div>
              <span className="text-xs font-semibold text-foreground">
                {demoScreens[currentScreen].title}
              </span>
            </div>

            {/* Dynamic content */}
            <div className="animate-fade-in" key={currentScreen}>
              {demoScreens[currentScreen].content}
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-card/80 backdrop-blur-sm border-t border-border/50 flex items-center justify-around px-6">
            {[
              { active: currentScreen === 0 },
              { active: currentScreen === 1 },
              { active: currentScreen === 2 },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrentScreen(i)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  item.active ? "bg-accent/20" : "bg-transparent"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${item.active ? "bg-accent" : "bg-muted-foreground/50"}`} />
              </button>
            ))}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-accent-gradient text-accent-foreground text-xs font-medium shadow-accent animate-float">
        Live Demo
      </div>
      <div className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg bg-card border border-border/50 text-xs text-foreground shadow-soft animate-float" style={{ animationDelay: "-3s" }}>
        <span className="text-accent">✓</span> Real-time sync
      </div>
    </div>
  );
}
