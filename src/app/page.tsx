export default function Home() {
  return (
    <div className="min-h-screen gradient-bg py-12">
      <div className="section-container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl heading-primary mb-6">
            Welcome to{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              GrabX Tech
            </span>
          </h1>
          <p className="text-xl text-content mb-8">
            Advancing Laboratory Technology for Tomorrow's Innovations
          </p>
        </div>

        {/* Featured Products Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card p-8">
            <h3 className="text-xl heading-primary mb-4">Advanced Analytics</h3>
            <p className="text-content">
              State-of-the-art laboratory equipment for precise analysis
            </p>
          </div>
          <div className="card p-8">
            <h3 className="text-xl heading-primary mb-4">Research Tools</h3>
            <p className="text-content">
              Cutting-edge research instruments for breakthrough discoveries
            </p>
          </div>
          <div className="card p-8">
            <h3 className="text-xl heading-primary mb-4">Lab Solutions</h3>
            <p className="text-content">
              Comprehensive laboratory solutions for every need
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl heading-primary mb-12">
            Why Choose GrabX Tech
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl heading-primary mb-4">Innovation</h3>
              <p className="text-content">
                Leading-edge technology and continuous innovation
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl heading-primary mb-4">Quality</h3>
              <p className="text-content">
                Highest standards in laboratory equipment
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl heading-primary mb-4">Support</h3>
              <p className="text-content">
                24/7 technical support and maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
