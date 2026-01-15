import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, Github, MessageCircle, FileText } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Final CTA section */}
            <section className="section-padding gradient-hero">
                <div className="absolute inset-0 gradient-mesh opacity-30" />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to reclaim your focus?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Join thousands of knowledge workers who've found their mirror.
                    </p>

                    <Button size="lg" className="h-16 px-10 text-lg bg-[#818CF8] hover:bg-[#6366F1] text-white rounded-xl glow-purple">
                        <Download className="mr-2 h-6 w-6" />
                        Download OpenSati — Free
                    </Button>

                    <p className="mt-6 text-sm text-muted-foreground">
                        Available for macOS and Windows. Linux via source.
                    </p>
                </div>
            </section>

            {/* Footer links */}
            <div className="bg-[#0A0A0B] border-t border-[#2C2C2E]">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl">🧘</span>
                                <span className="text-xl font-bold">OpenSati</span>
                            </div>
                            <p className="text-muted-foreground max-w-sm">
                                The intelligent mirror for deep work. Built with mindfulness, powered by local AI.
                            </p>
                            <p className="mt-4 text-sm text-muted-foreground italic">
                                "The mind is a wonderful servant, but a terrible master."
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><a href="#" className="hover:text-foreground transition-colors">Download</a></li>
                                <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
                                <li><a href="#" className="hover:text-foreground transition-colors">Roadmap</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Community</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
                                        <Github className="w-4 h-4" /> GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
                                        <MessageCircle className="w-4 h-4" /> Discord
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
                                        <FileText className="w-4 h-4" /> Manifesto
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Separator className="bg-[#2C2C2E]" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
                        <p className="text-sm text-muted-foreground">
                            © 2026 OpenSati. Released under GPLv3.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                            <a href="#" className="hover:text-foreground transition-colors">Contributing</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
