export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Install & Run",
            description: "Download the installer or clone from GitHub. OpenSati runs silently in your menu bar.",
            code: "opensati",
        },
        {
            number: "02",
            title: "Baseline Learning",
            description: "First 30 minutes: OpenSati learns your normal typing speed, mouse patterns, and breathing rhythm.",
            code: "# Establishing baseline...",
        },
        {
            number: "03",
            title: "Passive Monitoring",
            description: "Detects stress signals: typing >130% baseline, tab switching >40/min, shallow breathing, posture collapse.",
            code: "stress_threshold: 50  # keystrokes/10s",
        },
        {
            number: "04",
            title: "Gentle Intervention",
            description: "Screen fades to grayscale over 5 seconds. Take one breath to restore color. No blocking, just awareness.",
            code: "intervention_style: \"grayscale\"",
        },
    ];

    return (
        <section className="section-padding bg-[#0D0D0E]">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-[#4ADE80] font-medium mb-4 uppercase tracking-wider text-sm">How It Works</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Simple. Passive. Effective.
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        No manual tracking. No rigid timers. Just an intelligent mirror.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-[#141415] border border-[#2C2C2E] hover:border-[#3A3A3C] transition-colors"
                        >
                            <div className="flex-shrink-0">
                                <span className="text-4xl font-bold text-gradient-accent">{step.number}</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground mb-4">{step.description}</p>
                                <code className="code-block inline-block text-[#4ADE80]">
                                    {step.code}
                                </code>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Full config example */}
                <div className="mt-16 p-6 rounded-2xl bg-[#0A0A0B] border border-[#2C2C2E]">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                        <div className="w-3 h-3 rounded-full bg-[#F97316]" />
                        <div className="w-3 h-3 rounded-full bg-[#4ADE80]" />
                        <span className="ml-2 text-sm text-muted-foreground">config.yaml</span>
                    </div>
                    <pre className="text-sm font-mono overflow-x-auto">
                        <code className="text-muted-foreground">
                            {`# OpenSati Configuration
detection:
  stress_threshold: 50      # Keystrokes per 10s
  tab_switch_limit: 40      # Per minute

intervention:
  style: "grayscale"        # grayscale, blur, notification
  recovery_method: "breath" # breath, timeout, manual

ai:
  model: "llama3"
  vision_model: "llava"     # For intent-reality checker`}
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
}
