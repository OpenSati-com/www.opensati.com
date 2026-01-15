import { Button } from "@/components/ui/button";
import { Github, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 gradient-mesh opacity-50" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4ADE80]/10 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass text-sm animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span className="text-muted-foreground">Open Source · Local AI · Zero Data Collection</span>
                </div>

                {/* Main headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-200">
                    The Intelligent Mirror
                    <br />
                    <span className="text-gradient-accent">for Deep Work</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up animation-delay-400">
                    A local-AI copilot that reads your <strong className="text-foreground">digital body language</strong> to keep you in flow state.
                </p>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
                    Typing patterns. Breathing rhythm. Screen content. Posture.<br />
                    When something's off, it intervenes gently — before burnout happens.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
                    <Button size="lg" className="h-14 px-8 text-lg bg-[#818CF8] hover:bg-[#6366F1] text-white rounded-xl glow-purple">
                        <Download className="mr-2 h-5 w-5" />
                        Download — Pay What You Want
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-[#2C2C2E] hover:bg-[#1C1C1E]">
                        <Github className="mr-2 h-5 w-5" />
                        View on GitHub
                    </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-12 text-muted-foreground text-sm animate-fade-in-up animation-delay-600">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🔒</span>
                        <span>100% Local Processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl">📖</span>
                        <span>GPLv3 Licensed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🛡️</span>
                        <span>0 Bytes Sent to Cloud</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🐍</span>
                        <span>Python 3.10+</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
                </div>
            </div>
        </section>
    );
}
