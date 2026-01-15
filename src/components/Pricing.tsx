import { Button } from "@/components/ui/button";
import { Check, X, Download, Terminal } from "lucide-react";

export function Pricing() {
    return (
        <section className="section-padding bg-[#0D0D0E]">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-[#F97316] font-medium mb-4 uppercase tracking-wider text-sm">Pricing</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        "Pay What You Want" Model
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Like the best open source projects — Blender, Godot, Krita — we believe in sustainable development through community support.
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Developer Way */}
                    <div className="rounded-2xl bg-[#141415] border border-[#2C2C2E] p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#2C2C2E] flex items-center justify-center">
                                <Terminal className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">The Developer Way</h3>
                                <p className="text-muted-foreground">Free Forever</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-[#4ADE80]" />
                                <span>Full Source Code Access</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-[#EF4444]/50" />
                                <span>Manual Python Setup</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-[#EF4444]/50" />
                                <span>No Tech Support</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-[#EF4444]/50" />
                                <span>You Manage AI/Models</span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            className="w-full h-12 rounded-xl border-[#2C2C2E] hover:bg-[#1C1C1E]"
                        >
                            View on GitHub
                        </Button>
                    </div>

                    {/* Human Way */}
                    <div className="rounded-2xl bg-gradient-to-br from-[#818CF8]/10 to-[#4ADE80]/10 border border-[#818CF8]/30 p-8 relative glow-purple">
                        <div className="absolute -top-3 right-6">
                            <span className="px-3 py-1 text-xs font-medium bg-[#818CF8] text-white rounded-full">
                                Recommended
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#818CF8]/20 flex items-center justify-center">
                                <Download className="w-6 h-6 text-[#818CF8]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">The Human Way</h3>
                                <p className="text-[#818CF8]">Pay What You Want ($0–$50)</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-[#4ADE80]" />
                                <span className="font-medium">One-Click Installer (.exe / .dmg)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-[#4ADE80]" />
                                <span className="font-medium">Auto-Updates</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-[#4ADE80]" />
                                <span className="font-medium">Priority Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-[#4ADE80]" />
                                <span className="font-medium">Pre-configured Local AI</span>
                            </div>
                        </div>

                        <Button
                            className="w-full h-12 rounded-xl bg-[#818CF8] hover:bg-[#6366F1] text-white"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Get the Installer
                        </Button>
                    </div>
                </div>

                {/* Footnote */}
                <p className="text-center text-muted-foreground mt-10">
                    Your contribution helps keep the code open, auditable, and free from corporate influence.
                </p>
            </div>
        </section>
    );
}
