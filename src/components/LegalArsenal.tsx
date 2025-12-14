import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Shield, Rocket, Code2, Database, Palette } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'JAVASCRIPT/TYPESCRIPT',
    subtitle: 'THE CONSTITUTION',
    power: '99%',
    description: 'Interpreted more code than the Supreme Court interprets laws'
  },
  {
    icon: Rocket,
    title: 'REACT & FRONTEND',
    subtitle: 'AGGRESSIVE DEFENSE',
    power: '98%',
    description: 'Reusable components more reliable than precedent law'
  },
  {
    icon: Database,
    title: 'NODE.JS & DATABASES',
    subtitle: 'BACKEND PROSECUTION',
    power: '95%',
    description: 'APIs tighter than attorney-client privilege'
  },
  {
    icon: Palette,
    title: 'UI/UX DESIGN',
    subtitle: 'VISUAL ADVOCACY',
    power: '97%',
    description: 'Designs so good they should be illegal'
  },
  {
    icon: Shield,
    title: 'SECURITY & AUTH',
    subtitle: 'PROTECTION SERVICES',
    power: '94%',
    description: 'Defending your data like it\'s under oath'
  },
  {
    icon: Zap,
    title: 'PERFORMANCE',
    subtitle: 'SPEEDY TRIAL',
    power: '96%',
    description: 'Load times faster than a lawyer chasing an ambulance'
  }
];

function LegalArsenal() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          rotation: 1080,
          scale: 0,
          x: Math.random() > 0.5 ? 1000 : -1000,
          y: Math.random() * 500 - 250,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1,
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotation: '+=10',
      duration: 0.05,
      yoyo: true,
      repeat: 9,
      ease: 'power1.inOut'
    });
  };

  return (
    <div id="arsenal" className="py-20 bg-gradient-to-b from-[#D32F2F] to-[#B71C1C] border-y-8 border-[#F5E050]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-impact text-7xl text-[#F5E050] mb-6 crt-glow" style={{ WebkitTextStroke: '2px black' }}>
            LEGAL ARSENAL
          </h2>
          <div className="bg-white border-8 border-[#F5E050] inline-block px-12 py-6 transform rotate-2">
            <p className="font-times text-3xl text-[#D32F2F] font-bold italic">
              "I fight for your pixels!"
            </p>
          </div>
          <div className="mt-6 bg-[#1976D2] border-8 border-black inline-block px-8 py-4 transform -rotate-1">
            <p className="text-impact text-2xl text-white">
              SPEEDY JUSTICE FOR YOUR LOAD TIMES!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                ref={el => { if (el) cardsRef.current[index] = el; }}
                onMouseEnter={handleCardHover}
                className="bg-[#F5E050] border-8 border-black p-6 shadow-2xl cursor-pointer transform hover:scale-105 transition-transform"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#1976D2] border-4 border-black p-4 rounded-full">
                    <Icon className="w-12 h-12 text-[#F5E050]" strokeWidth={3} />
                  </div>
                </div>

                <h3 className="text-impact text-2xl text-center text-[#D32F2F] mb-2">
                  {skill.title}
                </h3>

                <div className="bg-[#D32F2F] text-white text-center py-2 border-4 border-black mb-4">
                  <p className="font-times font-bold">{skill.subtitle}</p>
                </div>

                <div className="bg-white border-4 border-black p-4 mb-4">
                  <p className="font-times text-sm text-black text-center">
                    {skill.description}
                  </p>
                </div>

                <div className="bg-black p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-times text-white font-bold">EXPERTISE:</span>
                    <span className="text-impact text-2xl text-[#F5E050]">{skill.power}</span>
                  </div>
                  <div className="w-full bg-[#1976D2] h-4 border-2 border-white">
                    <div
                      className="bg-[#F5E050] h-full animate-pulse"
                      style={{ width: skill.power }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white border-8 border-[#F5E050] inline-block px-12 py-8 transform -rotate-2 shadow-2xl">
            <p className="text-impact text-4xl text-[#1976D2] mb-4">
              CALL NOW FOR A FREE CONSULTATION!
            </p>
            <p className="font-times text-xl text-black">
              Don't let bad code ruin your business!
            </p>
            <p className="font-times text-lg text-[#D32F2F] font-bold mt-2">
              Hotline: +91 9918510327 | Email: info.ashmit@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalArsenal;
