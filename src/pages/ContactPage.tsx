import { MessageCircle, Send, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    const whatsappUrl = `https://wa.me/8801629933030?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 animate-fadeIn">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
          {t("contact.title")}
        </h1>
        <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
          {t("contact.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="glass-card p-8 rounded-[2rem] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[50px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

          <h2 className="text-2xl font-black text-white mb-8">{t("contact.formTitle")}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">{t("contact.name")}</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.namePlaceholder")}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">{t("contact.email")}</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">{t("contact.subject")}</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contact.subjectPlaceholder")}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">{t("contact.message")}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-40 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder={t("contact.messagePlaceholder")}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl py-6 font-bold text-lg bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-500"
            >
              <Send className="w-5 h-5 mr-3" />
              {t("contact.send")}
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="glass-card p-8 rounded-[2rem] border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-white mb-2">{t("contact.whatsapp")}</h3>
                <p className="text-gray-400 mb-6 font-medium">{t("contact.whatsappDesc")}</p>
                <Button
                  asChild
                  className="w-full rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold h-12"
                >
                  <a href="https://wa.me/8801629933030" target="_blank" rel="noopener noreferrer">
                    {t("contact.openWhatsapp")}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-white/10 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-1">{t("contact.email")}</h3>
                <p className="text-gray-400 text-sm mb-1">{t("contact.emailDesc")}</p>
                <p className="text-primary font-bold">support@randomcheatselling.com</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-white/10 hover:border-secondary/50 transition-all duration-300 group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-1">{t("contact.supportHours")}</h3>
                <p className="text-gray-400 text-sm mb-1">{t("contact.supportHoursDesc")}</p>
                <p className="text-secondary font-bold">{t("contact.available247")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
