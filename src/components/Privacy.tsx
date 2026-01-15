import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Keyboard, Mouse, Monitor, Camera, Mic } from "lucide-react";

export function Privacy() {
    const sensors = [
        { name: "Keyboard", status: "Velocity only", icon: Keyboard, enabled: true, risk: "Low" },
        { name: "Mouse", status: "Patterns only", icon: Mouse, enabled: true, risk: "Low" },
        { name: "Screen", status: "RAM only, deleted", icon: Monitor, enabled: false, risk: "Medium" },
        { name: "Webcam", status: "Posture only", icon: Camera, enabled: false, risk: "High" },
        { name: "Microphone", status: "Breath rate only", icon: Mic, enabled: false, risk: "High" },
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4ADE80]/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-[#4ADE80]/20 text-[#4ADE80] border-0 hover:bg-[#4ADE80]/30">
                        <Lock className="w-3 h-3 mr-1" />
                        Privacy First
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        We do not want your data.
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Every sensor is <strong className="text-foreground">opt-in</strong> and <strong className="text-foreground">individually toggleable</strong>.
                        All processing happens locally—no data leaves the machine.
                    </p>
                </div>

                {/* Privacy dashboard mockup */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="rounded-2xl bg-[#141415] border border-[#4ADE80]/30 overflow-hidden glow-green">
                        <div className="bg-[#1C1C1E] px-4 py-3 flex items-center gap-2 border-b border-[#2C2C2E]">
                            <Shield className="w-5 h-5 text-[#4ADE80]" />
                            <span className="font-medium">Privacy Dashboard</span>
                            <Badge className="ml-auto bg-[#4ADE80] text-black text-xs">AIRPLANE MODE</Badge>
                        </div>
                        <div className="p-6 space-y-3 font-mono text-sm">
                            {sensors.map((sensor, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="text-muted-foreground">{i < sensors.length - 1 ? "├─" : "└─"}</span>
                                    <sensor.icon className="w-4 h-4 text-muted-foreground" />
                                    <span className="flex-grow">{sensor.name}:</span>
                                    <span className={sensor.enabled ? "text-[#4ADE80]" : "text-muted-foreground"}>
                                        {sensor.enabled ? "✓" : "○"} {sensor.status}
                                    </span>
                                </div>
                            ))}
                            <div className="pt-3 border-t border-[#2C2C2E] mt-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-muted-foreground">├─</span>
                                    <span>Network:</span>
                                    <span className="ml-auto text-[#4ADE80] font-bold">0 bytes sent</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-muted-foreground">└─</span>
                                    <span>AI:</span>
                                    <span className="ml-auto text-[#4ADE80]">100% Local (Ollama)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Config snippet */}
                <div className="max-w-xl mx-auto mb-16 p-4 rounded-xl bg-[#0D0D0E] border border-[#2C2C2E]">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                        <div className="w-3 h-3 rounded-full bg-[#F97316]" />
                        <div className="w-3 h-3 rounded-full bg-[#4ADE80]" />
                        <span className="ml-2 text-xs text-muted-foreground">config.yaml</span>
                    </div>
                    <pre className="text-xs font-mono overflow-x-auto text-muted-foreground">
                        {`sensors:
  keyboard: true      # Low risk - velocity only
  mouse: true         # Low risk - patterns only
  screen: false       # Enable for intent checking
  webcam: false       # Enable for posture detection
  microphone: false   # Enable for breath analysis`}
                    </pre>
                </div>

                {/* Trust guarantees */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 rounded-2xl bg-[#141415] border border-[#2C2C2E]">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#818CF8]/20 flex items-center justify-center">
                            <Eye className="w-7 h-7 text-[#818CF8]" />
                        </div>
                        <h3 className="font-semibold mb-2">Fully Auditable</h3>
                        <p className="text-sm text-muted-foreground">
                            Every line of code is public. PRs adding telemetry are <strong>automatically rejected</strong>.
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-[#141415] border border-[#2C2C2E]">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#4ADE80]/20 flex items-center justify-center">
                            <Shield className="w-7 h-7 text-[#4ADE80]" />
                        </div>
                        <h3 className="font-semibold mb-2">Insights, Not Content</h3>
                        <p className="text-sm text-muted-foreground">
                            We log "High Stress" — <strong>never</strong> "User typed password123."
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-[#141415] border border-[#2C2C2E]">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#F97316]/20 flex items-center justify-center">
                            <Lock className="w-7 h-7 text-[#F97316]" />
                        </div>
                        <h3 className="font-semibold mb-2">RAM Only</h3>
                        <p className="text-sm text-muted-foreground">
                            Screenshots and audio are processed in memory and <strong>immediately deleted</strong>. Never saved to disk.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
