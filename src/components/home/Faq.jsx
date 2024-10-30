import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <li className="bg-gray-800 my-3 shadow-lg text-white rounded-lg transition-all duration-300">
      <h2
        onClick={onClick}
        className="flex flex-row justify-between items-center font-semibold p-5 cursor-pointer hover:bg-gray-700 transition-colors duration-200 rounded-t-lg"
      >
        <span>{question}</span>
        <svg
          className={`fill-current text-lightBlue h-6 w-6 transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className={`border-l-4 border-lightBlue overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`} // Set a max height when open
      >
        <p className="p-5 text-gray-300">{answer}</p>
      </div>
    </li>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How many comments can I generate per day?",
      answer:
        "You can generate up to 10 comments for free each day. The limit resets daily.",
    },
    {
      question: "Is there a premium version available?",
      answer:
        "Not yet, but a premium subscription with more features is currently in development!",
    },
    {
      question: "How does tone selection work?",
      answer:
        "You can choose from a list of tones, and our AI will generate a comment that fits the post content and your selected tone.",
    },
    {
      question: "Can I use this extension on posts in different languages?",
      answer:
        "The extension understands posts in multiple languages but generates responses only in English.",
    },
    {
      question: "What happens if I reach the daily comment limit?",
      answer:
        "After reaching the limit of 10 comments, you’ll need to wait for the next day when it resets. If you urgently need more comments, email us, and we can upgrade your plan.",
    },
    {
      question: "Do I need a LinkedIn account to use this extension?",
      answer: "Yes, you need to be logged in to LinkedIn to use the extension.",
    },
    {
      question: "Is my data secure while using this extension?",
      answer:
        "Yes, your data is kept secure, and we prioritize your privacy and safety.",
    },
    {
      question: "What if I need a tone that’s not in the list?",
      answer:
        "If you need a specific tone urgently, email us, and we’ll upgrade your plan to accommodate your request right away!",
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open index
  };

  return (
    <main className="p-5 bg-neutral-900 min-h-fit pb-20">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 lg:w-10/12 xl:w-9/12">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl py-10 px-4">
            <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            <ul data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
              {faqData
                .slice(0, Math.ceil(faqData.length / 2))
                .map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleItemClick(index)}
                  />
                ))}
            </ul>
            <ul data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
              {faqData
                .slice(Math.ceil(faqData.length / 2))
                .map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index + Math.ceil(faqData.length / 2)} // Adjust index for the second column
                    onClick={() =>
                      handleItemClick(index + Math.ceil(faqData.length / 2))
                    }
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
