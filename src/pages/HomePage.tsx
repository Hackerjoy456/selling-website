import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, MessageCircle, ShoppingBasket, Headphones, Lock, RefreshCw, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TiltCard } from "@/components/TiltCard";
import { BorderBeam } from "@/components/BorderBeam";
import { GlitchText } from "@/components/GlitchText";

export function HomePage() {
    const { t } = useLanguage();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { value: 14, label: "Active Products", suffix: "+", icon: ShoppingBasket, isStatic: false },
        { value: 24, label: "Customer Support", suffix: "/7", icon: Headphones, isStatic: true },
        { value: 100, label: "Secure Payments", suffix: "%", icon: Shield, isStatic: false },
        { value: Infinity, label: "Regular Updates", suffix: "", icon: RefreshCw, isStatic: true },
    ];

    const features = [
        {
            icon: Shield,
            title: "Trusted & Secure",
            description: "All products are verified and safe. Your security and privacy are our top priorities with encrypted transactions.",
            color: "text-primary",
            bgColor: "bg-primary/10"
        },
        {
            icon: Zap,
            title: "Instant Delivery",
            description: "Get your product immediately after purchase. No waiting, no delays - instant access to premium features.",
            color: "text-secondary",
            bgColor: "bg-secondary/10"
        },
        {
            icon: Star,
            title: "Premium Quality",
            description: "Top-tier products with regular updates, premium support, and cutting-edge features for the best gaming experience.",
            color: "text-accent",
            bgColor: "bg-accent/10"
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Round-the-clock assistance",
            color: "text-blue-400",
            bgColor: "bg-blue-400/10"
        },
        {
            icon: Lock,
            title: "Secure Payments",
            description: "Encrypted transactions",
            color: "text-purple-400",
            bgColor: "bg-purple-400/10"
        },
        {
            icon: RefreshCw,
            title: "Regular Updates",
            description: "Products updated regularly",
            color: "text-orange-400",
            bgColor: "bg-orange-400/10"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Animations */}
                {/* Background Animations */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-[500px] h-[500px] bg-primary/40 rounded-full blur-[120px] animate-breathing-glow" />
                </div>

                <div className="container relative z-10 text-center">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm animate-fade-in animate-float">
                        <span className="text-sm font-bold text-primary uppercase tracking-widest">{t("home.subtitle")}</span>
                    </div>

                    <h1 className="text-responsive-xl font-heading font-black mb-6 leading-tight tracking-tight drop-shadow-2xl">
                        <span className="text-white block drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <GlitchText text="RANDOM CHEAT" />
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary text-neon-blue animate-gradient-x bg-[length:200%_auto]">
                            SELLING
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-8 font-bold max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        {t("home.tagline")}
                    </p>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        {t("home.description")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
                        <Link to="/products">
                            <button className="btn-primary flex items-center gap-3 group">
                                <ShoppingBasket className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                                <span className="relative z-10">{t("home.explore")}</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <a
                            href="https://wa.me/8801629933030"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group">
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-400 group-hover:text-white" />
                                <span>{t("home.contact")}</span>
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Animated Beam Divider */}
            <div className="relative h-px w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-beam w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full blur-sm" />
            </div>

            {/* Stats Section */}
            <section className="py-24 relative overflow-hidden" ref={ref}>
                <div className="container relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <TiltCard key={index} className="h-full">
                                <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden border border-white/5 h-full">
                                    <BorderBeam size={250} duration={12} delay={index * 2} />
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="mb-4 p-4 rounded-full bg-white/5 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                        <stat.icon className="w-8 h-8" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-center justify-center tracking-tight">
                                        {stat.value === Infinity ? (
                                            <span className="text-shadow-glow text-primary text-5xl">∞</span>
                                        ) : stat.isStatic ? (
                                            <span>{stat.value}</span>
                                        ) : (
                                            inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : "0"
                                        )}
                                        <span className="text-primary/80 ml-1 text-3xl">{stat.suffix}</span>
                                    </div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animated Beam Divider */}
            <div className="relative h-px w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-beam w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full blur-sm" />
            </div>


            {/* Why Choose Us Section */}
            <section className="py-32 relative">
                <div className="container">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
                            <span className="text-white">{t("home.whyChoose")} </span>
                            <span className="text-primary">?</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <TiltCard key={index} className="h-full" sensitivity={25}>
                                <div
                                    className={`glass-card p-10 rounded-[2rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-white/10 h-full`}
                                >
                                    <BorderBeam size={300} duration={12} delay={index * 2} />
                                    <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-125 duration-700 ${feature.color}`}>
                                        <feature.icon className="w-32 h-32" />
                                    </div>
                                    <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animated Beam Divider */}
            <div className="relative h-px w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-beam w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full blur-sm" />
            </div>


            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="glass-card rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/10 group">

                        {/* Dramatic Lighting Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-accent blur-[100px] animate-pulse-slow" />
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 text-white tracking-tight drop-shadow-2xl">
                                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Level Up?</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
                                Browse our premium products and find the perfect solution for your gaming needs today.
                            </p>
                            <Link to="/products">
                                <button className="relative px-12 py-5 bg-white text-black text-xl font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] overflow-hidden group/btn">
                                    <span className="relative z-10 flex items-center gap-3">
                                        Explore Products <ArrowRight className="w-6 h-6" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-white to-secondary opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
