import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, Moon, Coffee, Target, MessageSquare } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Zero-Data Privacy",
        subtitle: "We Don't Want Your Data",
        description: "Everything runs on your CPU/GPU via Ollama. Screenshots analyzed in RAM and deleted instantly. We log insights ('High Stress'), never content. Network bytes sent: 0.",
        color: "#4ADE80",
    },
    {
        icon: Target,
        title: "Intent-Reality Checker",
        subtitle: "AI Verifies You're On-Task",
        description: "Tell OpenSati: 'Writing Q3 report.' Open YouTube for a finance tutorial → Allowed. Open TikTok → 'Is this part of your Q3 report?' No blocking. Just a mirror.",
        color: "#818CF8",
    },
    {
        icon: Moon,
        title: "The Grayscale Nudge",
        subtitle: "Color Is Addictive",
        description: "When stress is detected, your screen slowly fades to black & white. The internet is addictive because it's colorful — we remove the dopamine trigger. Take one breath to restore.",
        color: "#F97316",
    },
    {
        icon: Coffee,
        title: "Meeting Decompression",
        subtitle: "Post-Call Recovery",
        description: "Detects when Zoom, Teams, or Meet closes and triggers a 60-second calm screen. Reset your cognitive load before checking email.",
        color: "#EC4899",
    },
    {
        icon: Brain,
        title: "Posture & Breath Awareness",
        subtitle: "Optional Webcam/Mic",
        description: "Enable webcam to detect Tech Neck — screen blurs until you sit up. Enable mic for breathing rate analysis. Direct body-to-digital feedback loop.",
        color: "#06B6D4",
    },
    {
        icon: MessageSquare,
        title: "Right Speech Co-Pilot",
        subtitle: "Prevent Regrettable Emails",
        description: "Detects aggressive typing patterns and offers NVC-style reframes. 'This is stupid' → 'I'm concerned about the timeline. What blockers came up?'",
        color: "#EAB308",
    },
];

export function Features() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full gradient-mesh opacity-30" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-[#818CF8] font-medium mb-4 uppercase tracking-wider text-sm">Features</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Multi-Modal Awareness
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Keyboard patterns. Audio analysis. Screen context. Optional webcam posture detection.
                        All processed locally, all under your control.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="feature-card bg-[#141415] border-[#2C2C2E] overflow-hidden group"
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-1.5"
                                style={{ backgroundColor: feature.color }}
                            />
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${feature.color}20` }}
                                    >
                                        <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                                        <CardDescription className="text-sm" style={{ color: feature.color }}>
                                            {feature.subtitle}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
