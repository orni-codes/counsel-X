import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How do I access the resources?",
    answer: "To access our resources, simply navigate to the Resources section on our website and chose the category that interests you. From there, you can download or view the available resources."
  },
  {
    question: "Can I request specific resources?",
    answer: "Certainly! If there are specific resources you would like to see on our website, please let us know through the contact form. We appreciate your input in helping us improve our offerings."
  },
  {
    question: "Are the resources free?",
    answer: "Yes, all our resources are free to access and use. We believe in providing comprehensive career development support to individuals without any cost barriers."
  },
  {
    question: "Is my information secure?",
    answer: "Yes, we take data security seriously. We have implemented measures to safeguard your information and ensure it is protected from unauthorized access or use."
  },
  {
    question: "How often are resources updated?",
    answer: "We strive to regularly update our resources to ensure they remain relevant and up-to-date with the latest industry trends and best practices. You can expect new additions and updates on a monthly basis."
  },
  {
    question: "How can I unsubscribe?",
    answer: "If you no longer wish to receive updates or emails from us, you can unsubscribe by clicking the \"Unsubscribe\" link at the bottom of our email or by contacting us through the website."
  },
  {
    question: "Can I share the resources?",
    answer: "Absolutely. We encourage you to share our resources with anyone who can benefit from them. Feel free to share the download links or direct them to our website."
  },
  {
    question: "Can I contribute as a guest writer?",
    answer: "We welcome guest contributions. If you have valuable insights or experiences to share, please reach out to us with your ideas and we'll be happy to discuss further."
  },
  {
    question: "How can I provide feedback?",
    answer: "We value your feedback. If you have any suggestions, comments, or questions regarding our resources please reach out to us through the contact form on our Website."
  },
  {
    question: "How can I advertise with you?",
    answer: "If you're interested in advertising opportunities, please contact our marketing team through the website. We offer various adverting options to suit your needs."
  }
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='pb-4'>
      <button 
        className='flex justify-between items-center w-full text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-gray-800 text-xl font-medium pr-4'>{question}</span>
        {isOpen ? <ChevronUp className='w-4 h-4 text-gray-800 shrink-0' /> : <ChevronDown className='w-4 h-4 text-gray-800 shrink-0' />}
      </button>
      {isOpen && (
        <p className='mt-4 text-sm text-gray-500 pr-4 sm:pr-8 leading-relaxed'>
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5, 10);

  return (
    <div id='faq' className='px-4 sm:px-12 lg:px-24 py-20 bg-soft/50'>
      <div className='max-w-4xl mx-auto text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-black mb-6'>
          FAQs
        </h1>
        <p className='text-gray-500 text-sm sm:text-base mx-auto max-w-2xl'>
          Find answers to frequently asked questions about our resources, how to use them, and access related queries.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-x-12 gap-y-10 max-w-6xl mx-auto'>
        <div className='flex flex-col gap-10 flex-1'>
          {leftFaqs.map((faq, index) => (
            <FaqItem key={`left-${index}`} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className='flex flex-col gap-10 flex-1'>
          {rightFaqs.map((faq, index) => (
            <FaqItem key={`right-${index}`} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      <div className='mt-24 text-center'>
        <h2 className='text-2xl sm:text-3xl font-extrabold text-black mb-4'>
          Still have questions?
        </h2>
        <p className='text-gray-500 text-sm sm:text-base mb-8'>
          Feel free to reach out to us for any further inquiries.
        </p>
        <a href="#contact">
        <button className='bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors'>
          Contact
        </button>
        </a>
      </div>
    </div>
  )
}

export default FAQ
