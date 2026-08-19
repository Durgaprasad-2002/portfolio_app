import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "prasaddurga2031@gmail.com",
      href: "mailto:prasaddurga2031@gmail.com",
      icon: "📧",
    },
    {
      label: "WhatsApp",
      value: "+91 9177943677",
      href: "https://wa.me/919177943677",
      icon: "💬",
    },
    {
      label: "LinkedIn",
      value: "durgaprasad31",
      href: "https://www.linkedin.com/in/durgaprasad31/",
      icon: "🔗",
    },
    {
      label: "GitHub",
      value: "Durgaprasad-2002",
      href: "https://github.com/Durgaprasad-2002",
      icon: "💻",
    },
  ];

  return (
    <section id="contact" className="py-20 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out via email or WhatsApp!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-darker rounded border border-gray-800 hover:border-accent transition-all"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="text-2xl mb-3">{contact.icon}</div>
              <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
              <div className="text-accent font-semibold">{contact.value}</div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-gray-800 text-center text-gray-500">
          <p>© 2024 Durga Prasad. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  );
}
