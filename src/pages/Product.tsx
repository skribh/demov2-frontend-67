import React from 'react';

const Product: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="py-12">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product</h1>
            <p className="text-xl text-gray-600">Our ambient AI transcription platform for healthcare</p>
          </header>

          <main className="space-y-12">
            <section className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Product information and features have been moved to the investor section for better organization.
                Please visit the <a href="/investors" className="text-blue-600 hover:text-blue-800 underline">Investors page</a> to view detailed product information.
              </p>
            </section>
          </main>

          <footer className="mt-16 py-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500">© 2024 Skribh. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Product;