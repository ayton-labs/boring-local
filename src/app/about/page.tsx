export const metadata = {
  title: 'About Us',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Your Brand</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl mb-6">
          We are your trusted local [service] experts, serving [city] and surrounding areas for over [X] years.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          To provide fast, reliable, and professional [service] solutions to our community. 
          We understand that [service] emergencies can happen at any time, which is why we're 
          available 24/7 to help you when you need us most.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Licensed and insured professionals</li>
          <li>Same-day service available</li>
          <li>Transparent, upfront pricing</li>
          <li>100% satisfaction guarantee</li>
          <li>Local family-owned business</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Service Areas</h2>
        <p>
          We proudly serve [City] and the surrounding communities including [Area 1], 
          [Area 2], and [Area 3]. If you're unsure whether we service your area, 
          give us a call and we'll let you know!
        </p>
      </div>
    </div>
  );
}