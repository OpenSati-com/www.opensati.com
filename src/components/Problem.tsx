export function Problem() {
    return (
        <section className="section-padding relative">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-[#F97316] font-medium mb-4 uppercase tracking-wider text-sm">The Problem</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        You don't need a blocker.
                        <br />
                        <span className="text-muted-foreground">You need a mirror.</span>
                    </h2>
                </div>

                {/* Problem illustration */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Before */}
                    <div className="relative p-8 rounded-2xl bg-[#141415] border border-[#2C2C2E]">
                        <div className="absolute -top-3 left-6">
                            <span className="px-3 py-1 text-xs font-medium bg-[#2C2C2E] text-muted-foreground rounded-full">
                                The Old Way
                            </span>
                        </div>
                        <div className="space-y-4 text-muted-foreground">
                            <div className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✕</span>
                                <p>Site blockers treat you like a child — blocking, locking, rigid timers.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✕</span>
                                <p>You hold your breath while typing emails. You don't notice until it's too late.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✕</span>
                                <p>Context-switch 50+ times per hour. Deep work becomes impossible.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✕</span>
                                <p>Send regrettable emails in moments of stress.</p>
                            </div>
                        </div>
                    </div>

                    {/* After */}
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#818CF8]/10 to-[#4ADE80]/10 border border-[#4ADE80]/30 glow-green">
                        <div className="absolute -top-3 left-6">
                            <span className="px-3 py-1 text-xs font-medium bg-[#4ADE80] text-black rounded-full">
                                The OpenSati Way
                            </span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-[#4ADE80] text-xl">✓</span>
                                <p>Detects typing velocity, breathing rhythm, and posture in real-time.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#4ADE80] text-xl">✓</span>
                                <p>Gentle interventions — grayscale fade, not screen locks.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#4ADE80] text-xl">✓</span>
                                <p>AI verifies you're on-task: "Is TikTok part of your Q3 report?"</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#4ADE80] text-xl">✓</span>
                                <p>Right Speech co-pilot catches aggressive emails before you send.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-16 text-center">
                    <p className="text-2xl md:text-3xl italic text-muted-foreground max-w-3xl mx-auto mb-4">
                        "I noticed you've switched tabs 45 times in 60 seconds. Let's take one breath."
                    </p>
                    <cite className="text-sm text-[#818CF8]">— OpenSati intervention example</cite>
                </blockquote>
            </div>
        </section>
    );
}
