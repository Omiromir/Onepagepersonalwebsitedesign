import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function Contacts() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    topic: "",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const topics = [
    "Консультация по BIM",
    "Приглашение на выступление",
    "Сотрудничество",
    "Обучение",
    "Другое",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.contact.trim()) newErrors.contact = true;
    if (!formData.topic) newErrors.topic = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormState("error");
      return;
    }

    // Mock success
    setFormState("success");
    setErrors({});

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", contact: "", topic: "", message: "" });
      setFormState("idle");
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
    if (formState === "error") {
      setFormState("idle");
    }
  };

  return (
    <section
      id="contacts"
      className="py-16 md:py-20 lg:py-24 bg-accent/30"
      ref={ref as any}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-tight mb-3">
            Контакты
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left side - Contact methods */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.21, 0.45, 0.27, 0.9],
            }}
          >
            <p className="text-[16px] text-foreground/70 leading-relaxed mb-8">
              Свяжитесь со мной для консультаций, приглашений на выступления или
              обсуждения сотрудничества.
            </p>

            <div className="space-y-3">
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: [0.21, 0.45, 0.27, 0.9],
                }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-card transition-all duration-200 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-medium">WhatsApp</div>
                  <div className="text-[13px] text-foreground/60">
                    Быстрый ответ
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: [0.21, 0.45, 0.27, 0.9],
                }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-card transition-all duration-200 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0088cc]/10 text-[#0088cc]">
                  <Send className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-medium">Telegram</div>
                  <div className="text-[13px] text-foreground/60">
                    Предпочтительный канал
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:contact@example.com"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: [0.21, 0.45, 0.27, 0.9],
                }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-card transition-all duration-200 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-medium">Email</div>
                  <div className="text-[13px] text-foreground/60">
                    contact@example.com
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.21, 0.45, 0.27, 0.9],
            }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-[18px] font-semibold mb-6">
                Отправить сообщение
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[14px] font-medium mb-2 "
                  >
                    Имя <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`w-full h-11 px-4 rounded-xl bg-input-background border transition-all text-gray-400 ${
                      errors.name
                        ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                        : "border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20"
                    } outline-none`}
                    placeholder="Ваше имя"
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-destructive text-[13px]">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Обязательное поле</span>
                    </div>
                  )}
                </div>

                {/* Contact */}
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-[14px] font-medium mb-2"
                  >
                    Контакт <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact"
                    type="text"
                    value={formData.contact}
                    onChange={(e) => handleChange("contact", e.target.value)}
                    className={`w-full h-11 px-4 rounded-xl bg-input-background border transition-all text-gray-400 ${
                      errors.contact
                        ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                        : "border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20"
                    } outline-none`}
                    placeholder="Email или телефон"
                  />
                  {errors.contact && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-destructive text-[13px]">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Обязательное поле</span>
                    </div>
                  )}
                </div>

                {/* Topic */}
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-[14px] font-medium mb-2"
                  >
                    Тема <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => handleChange("topic", e.target.value)}
                    className={`w-full h-11 px-4 rounded-xl bg-input-background border transition-all text-gray-400 ${
                      errors.topic
                        ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                        : "border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20"
                    } outline-none appearance-none cursor-pointer`}
                  >
                    <option value="">Выберите тему</option>
                    {topics.map((topic, index) => (
                      <option key={index} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                  {errors.topic && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-destructive text-[13px]">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Выберите тему</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[14px] font-medium mb-2"
                  >
                    Сообщение <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-input-background border transition-all resize-none text-gray-400 ${
                      errors.message
                        ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                        : "border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20"
                    } outline-none`}
                    placeholder="Опишите ваш запрос..."
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-destructive text-[13px]">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Обязательное поле</span>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === "success"}
                  className={`w-full h-12 rounded-xl font-medium text-[15px] transition-all ${
                    formState === "success"
                      ? "bg-[#10b981] text-white"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {formState === "success" ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Сообщение отправлено
                    </span>
                  ) : (
                    "Отправить"
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
