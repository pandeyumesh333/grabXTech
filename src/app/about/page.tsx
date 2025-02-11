import React from "react";

export default function About() {
  return (
    <div className="min-h-screen gradient-bg py-12">
      <div className="section-container">
        <h1 className="text-3xl heading-primary mb-12">About GrabX Tech</h1>

        <div className="space-y-12">
          {/* Mission Section */}
          <div className="card p-8">
            <h2 className="text-2xl heading-primary mb-6">Our Mission</h2>
            <p className="text-content leading-relaxed">
              At GRABX TECH, our mission is to provide cutting-edge lab
              manufacturing and equipment solutions that empower scientific
              advancements. We envision a future where our innovative products
              contribute to the growth and success of industries, fostering a
              culture of collaboration and discovery.
            </p>
          </div>

          {/* History Section */}
          <div className="card p-8">
            <h2 className="text-2xl heading-primary mb-6">Our Journey</h2>
            <p className="text-content leading-relaxed">
              GRABX TECH was born out of a shared vision to revolutionize the
              lab equipment landscape. Founded recently, our journey is guided
              by a steadfast commitment to quality, innovation, and customer
              satisfaction.
            </p>
          </div>

          {/* Values Section */}
          <div className="card p-8">
            <h2 className="text-2xl heading-primary mb-6">Our Commitment</h2>
            <p className="text-content leading-relaxed mb-6">
              Our commitment extends to a high degree of customization,
              tailoring solutions to the unique needs of different industries.
              From eco-friendly refrigerants to recyclable materials, our
              sustainability initiatives reflect a pledge to environmental
              responsibility.
            </p>
            <p className="text-content leading-relaxed">
              As we pioneer into uncharted territories, our goal is not just to
              provide lab solutions but to shape a future where efficiency,
              customization, and sustainability converge seamlessly.
            </p>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <p className="text-xl text-indigo-400 font-semibold italic">
              Welcome to GRABX TECH - Unleashing Possibilities, Defining
              Excellence!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
