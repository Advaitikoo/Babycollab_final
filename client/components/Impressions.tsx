export default function Impressions() {
  return (
    <section className="w-full bg-neutral-100 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-times text-5xl lg:text-6xl font-bold italic text-black mb-6">
              Impressions
            </h2>
            <p className="font-roboto text-lg font-light text-black leading-relaxed max-w-md">
              Turning experiences into insights
            </p>
          </div>

          {/* Right Colored Blocks */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Brown Block - Background */}
            <div 
              className="absolute w-full max-w-[400px] h-64 lg:h-80 bg-brand-brown"
              style={{ left: '0%', top: '0%' }}
            ></div>
            
            {/* Gold Block - Middle */}
            <div 
              className="absolute w-72 lg:w-80 h-72 lg:h-96 bg-brand-gold"
              style={{ right: '0%', top: '20%' }}
            ></div>
            
            {/* Orange Block - Front */}
            <div 
              className="absolute w-64 lg:w-72 h-56 lg:h-72 bg-brand-orange"
              style={{ left: '25%', bottom: '10%' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
