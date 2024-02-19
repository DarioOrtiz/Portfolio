import React from "react";

export default function Testimonials() {
  const testimonials = [
    { id: 1, text: "Testimonio 1" },
    { id: 2, text: "Testimonio 2" },
    { id: 3, text: "Testimonio 3" },
    // Otros testimonios...
  ];

  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Testimonios
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="lg:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  {testimonial.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
