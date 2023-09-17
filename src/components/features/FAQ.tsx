import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// FAQ Component: Represents a collapsible Frequently Asked Questions (FAQ) item.
const FAQ = ({ question }: { question: string }): JSX.Element => {
  // State to track whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    // FAQ container element
    <details
      className={`FAQcontainer duration-600 cursor-pointer space-y-4 transition-all ease-in-out hover:bg-gray-200 ${isOpen ? 'open' : ''
        }`}
      onClick={toggleDropdown}
    >
      <summary className="flex justify-between">
        <span className="w-[85%]">{question}</span>
        {isOpen ? (
          <IoIosArrowUp className="FAQarrow self-center" />
        ) : (
          <IoIosArrowDown className="FAQarrow self-center" />
        )}
      </summary>
      {/* Content section that shows when the dropdown is open */}
      {isOpen && (
        <p className='w-full text-sm xl:text-base animate-appearFAQ'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          quam pariatur animi eveniet, quis dolores error magnam repellat omnis
          velit et totam enim, soluta quod, doloribus non exercitationem.
          Libero, voluptatem. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Dignissimos quam pariatur animi eveniet, quis
          dolores error magnam repellat omnis velit et totam enim, soluta quod,
          doloribus non exercitationem. Libero, voluptatem. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Dignissimos quam pariatur animi
          eveniet, quis dolores error magnam repellat omnis velit et totam enim,
          soluta quod, doloribus non exercitationem. Libero, voluptatem.
        </p>
      )}
    </details>
  );
};

export default FAQ;
