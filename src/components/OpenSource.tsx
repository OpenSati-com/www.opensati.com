import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Star, GitFork, Users } from "lucide-react";

export function OpenSource() {
    return (
        <section className="section-padding">
            <div className="max-w-5xl mx-auto px-6">
                <div className="rounded-3xl bg-gradient-to-br from-[#141415] to-[#0D0D0E] border border-[#2C2C2E] p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#818CF8]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4ADE80]/5 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        {/* License badge */}
                        <Badge className="mb-6 bg-[#4ADE80]/20 text-[#4ADE80] border-0 text-sm">
                            <Github className="w-4 h-4 mr-2" />
                            GPLv3 Licensed
                        </Badge>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Open Source. Forever.
                        </h2>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            OpenSati is built in public. Every line of code is auditable.
                            If you distribute a modified version, you must open-source your changes —
                            protecting it from being closed-sourced by corporations.
                        </p>

                        {/* GitHub stats */}
                        <div className="flex items-center justify-center gap-8 mb-10">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span className="font-mono text-xl">2.4k</span>
                                <span className="text-sm">stars</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <GitFork className="w-5 h-5 text-[#818CF8]" />
                                <span className="font-mono text-xl">340</span>
                                <span className="text-sm">forks</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="w-5 h-5 text-[#4ADE80]" />
                                <span className="font-mono text-xl">89</span>
                                <span className="text-sm">contributors</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-14 px-8 rounded-xl bg-white text-black hover:bg-gray-100">
                                <Github className="mr-2 h-5 w-5" />
                                Star on GitHub
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 rounded-xl border-[#2C2C2E] hover:bg-[#1C1C1E]"
                            >
                                Read Contributing Guide
                            </Button>
                        </div>

                        {/* Security note */}
                        <p className="mt-8 text-sm text-muted-foreground">
                            <span className="text-[#EF4444]">Security:</span> Any PR adding network calls to external servers will be <strong>rejected</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
