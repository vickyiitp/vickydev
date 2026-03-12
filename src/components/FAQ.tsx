import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What type of projects do you build?',
    answer: 'I specialize in building AI automation systems, scalable startup MVP platforms, custom AI tools, and complex API integrations. My focus is on creating intelligent, high-performance web applications.',
  },
  {
    question: 'Do you build AI automation systems?',
    answer: 'Yes, I design and implement custom workflow automation, AI-powered operations, and business automation tools to streamline processes and reduce manual tasks.',
  },
  {
    question: 'Can you integrate APIs?',
    answer: 'Absolutely. I have extensive experience integrating payment systems, messaging APIs, AI APIs, and various third-party services to build robust ecosystems.',
  },
  {
    question: 'Which technologies do you use?',
    answer: 'My core stack includes Python, JavaScript, Node.js, Flask, React, MongoDB, and various Cloud databases. I also utilize a wide range of AI APIs and automation engines.',
  },
  {
    question: 'Do you work with startups?',
    answer: 'Yes, I frequently collaborate with startups to build MVP platforms, dashboard systems, and scalable architectures that support rapid growth and innovation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4 font-heading tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl mx-auto">Common inquiries about my services, technologies, and workflow.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl bg-bg-charcoal/40 border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-text-white font-heading">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-accent-light transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-silver/70 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
