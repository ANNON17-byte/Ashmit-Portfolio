import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Scale } from 'lucide-react';

function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        scale: 0,
        rotation: -15,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
        delay: 1.5
      });

      gsap.from(sublineRef.current, {
        x: -1000,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 2
      });

      gsap.from(ctaRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        ease: 'bounce.out',
        delay: 2.5
      });
    });

    return () => ctx.revert();
  }, []);

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      rotation: '+=5',
      duration: 0.1,
      yoyo: true,
      repeat: 5,
      ease: 'power1.inOut'
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b-8 border-[#D32F2F]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1976D2] via-[#1565C0] to-[#0D47A1] opacity-95" />

      <div className="absolute top-8 right-8 animate-pulse">
        <div className="bg-[#D32F2F] text-white px-6 py-3 rotate-12 text-impact text-2xl border-4 border-white shadow-2xl">
          CALL NOW!
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <div className="mb-8 flex justify-center">
          <Scale className="w-24 h-24 text-[#F5E050] animate-bounce" strokeWidth={3} />
        </div>

        <h1
          ref={headlineRef}
          className="text-impact text-7xl md:text-9xl text-[#F5E050] mb-6 crt-glow transform -rotate-2"
          style={{
            textShadow: '6px 6px 0 #D32F2F, 12px 12px 0 rgba(0,0,0,0.5)',
            WebkitTextStroke: '3px black'
          }}
        >
          BETTER CALL ASHMIT!
        </h1>

        <div className="bg-white border-8 border-[#F5E050] p-8 mb-8 transform rotate-1 shadow-2xl">
          <p
            ref={sublineRef}
            className="font-times text-2xl md:text-3xl text-black font-bold italic"
          >
            "Did you know your website has rights? The W3C says you do, and so do I!"
          </p>
        </div>

        <div ref={ctaRef} className="space-y-4">
          <p className="font-times text-xl md:text-2xl text-white bg-[#D32F2F] inline-block px-8 py-4 border-4 border-[#F5E050] font-bold">
            I believe that until proven buggy, every line of code is INNOCENT!
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button
              onMouseEnter={handleButtonHover}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F5E050] text-black text-impact text-3xl px-12 py-6 border-8 border-[#D32F2F] shadow-2xl hover:bg-[#fff44f] transition-colors cursor-pointer"
            >
              SUE ME NOW!
            </button>

            <button
              onMouseEnter={handleButtonHover}
              onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D32F2F] text-white text-impact text-3xl px-12 py-6 border-8 border-[#F5E050] shadow-2xl hover:bg-[#e63939] transition-colors cursor-pointer"
            >
              SEE THE EVIDENCE!
            </button>
          </div>
        </div>

        <div className="mt-12 font-times text-white text-lg">
          <p className="animate-pulse">Available 24/7 for Code Emergencies</p>
          <p className="text-sm mt-2 opacity-75">*Response times may vary during Netflix binges</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
