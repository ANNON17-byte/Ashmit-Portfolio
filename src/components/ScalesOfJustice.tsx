import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function ScalesOfJustice() {
  const leftPanRef = useRef<HTMLDivElement>(null);
  const rightPanRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leftPanRef.current, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(rightPanRef.current, {
        y: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(scaleRef.current, {
        rotation: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: 'center 30px'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-20 bg-[#1976D2] border-y-8 border-[#F5E050]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-impact text-6xl text-[#F5E050] mb-16 crt-glow" style={{ WebkitTextStroke: '2px black' }}>
          THE SCALES OF JUSTICE
        </h2>

        <div className="flex justify-center mb-16">
          <div ref={scaleRef} className="relative w-72 h-48">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-[#F5E050]" />

            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
              <circle cx="150" cy="12" r="8" fill="#F5E050" stroke="black" strokeWidth="1" />
              <line x1="85" y1="60" x2="215" y2="60" stroke="#F5E050" strokeWidth="3" />
              <line x1="110" y1="60" x2="85" y2="140" stroke="#F5E050" strokeWidth="2" />
              <line x1="190" y1="60" x2="215" y2="140" stroke="#F5E050" strokeWidth="2" />
            </svg>

            <div
              ref={leftPanRef}
              className="absolute bottom-0 left-6 w-24 h-20 bg-white border-4 border-[#D32F2F]"
              style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.2)' }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-impact text-sm text-[#1976D2]">CLEAN</p>
                  <p className="text-impact text-xs text-[#1976D2]">CODE</p>
                </div>
              </div>
            </div>

            <div
              ref={rightPanRef}
              className="absolute bottom-0 right-6 w-24 h-20 bg-white border-4 border-[#D32F2F]"
              style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.2)' }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-impact text-sm text-[#1976D2]">FAST</p>
                  <p className="text-impact text-xs text-[#1976D2]">SHIP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-4 border-[#D32F2F] p-6 inline-block">
          <p className="font-times text-xl text-black font-bold italic">
            "Perfect balance. No exceptions.*"
          </p>
          <p className="font-times text-xs text-gray-600 mt-2">*Exceptions may apply</p>
        </div>
      </div>
    </div>
  );
}

export default ScalesOfJustice;
