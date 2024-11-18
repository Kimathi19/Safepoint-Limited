export default function Accordion(){
    return (
      <div className="accordion flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-8 underline underline-offset-8 font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="items w-[75%]">
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
            open
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>What services do you offer?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-600">
              Safe Point provides a range of construction services, including
              project contracting and safety gear production. We also tailor
              work apparel, ensuring quality and comfort for all workers. Our
              goal is to enhance safety and efficiency on job sites.
            </p>
          </details>
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>Where can I buy?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              You can purchase our safety gear directly through our website or
              at authorized retailers. We ensure that all products meet industry
              standards for safety and durability. For bulk orders, please
              contact our sales team.
            </p>
          </details>
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>Do you offer customization?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              Yes, we offer customization options for our safety gear and work
              apparel. You can choose colors, sizes , even add your company
              logo. This service is perfect for businesses looking to promote
              their brand while ensuring safety.
            </p>
          </details>
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>What is your warranty?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              We provide a one-year warranty on all our safety gear products.
              This warranty covers defects in materials and workmanship. If you
              encounter any issues, please reach out to our customer service
              team for assistance
            </p>
          </details>
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>How can I contact?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              You can contact us via our website's contact form or by phone. Our
              customer service team is available to assist you with any
              inquiries. We aim to respond to all messages within 24 hours.
            </p>
          </details>
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>What type of contracting services do you provide?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              We offer expert contracting services to support your construction
              projects, including safety planning, risk assessment, and onsite
              safety management. Our team collaborates with you to ensure a safe
              work environment from start to finish.
            </p>
          </details>
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>Can Safepoint handle large-scale projects?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              Yes, Safepoint is equipped to handle projects of all sizes.
              Whether you need safety solutions for a small team or a large
              construction project, we have the resources and expertise to
              support your needs.
            </p>
          </details>
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>How quickly can you deliver custom orders?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              Delivery time for custom orders depends on the quantity and
              customization required. Our team works efficiently to ensure
              timely delivery, and we'll provide an estimated timeline upon
              order confirmation.
            </p>
          </details>
        </div>
      </div>
    );
}