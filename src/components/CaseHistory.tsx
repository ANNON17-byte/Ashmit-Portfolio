import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Star, Zap } from 'lucide-react';

const projects = [
  {
    
    title: 'K-72 Agency Website Clone',
    description: 'The Plaintiff Fights Fraud, The Defendant Pays in Full',
    period: '2025',
    verdict: 'GUILTY OF CLONING THE WEBSITE FULLY WITHOUT BEING FLAWLESS',
    github:'https://github.com/ANNON17-byte/K72-Agency-Website-Clone',
    highlights: [
      'Prosecuted responsive React frontend with extreme prejudice',
      'GSAP animations smoother than legal precedent',
    ]
    
  },
  {
  title: 'SLI ALARM — WAKE UP USING YOUR BRAIN',
  description: 'A smart, cute alarm app that forces you to solve math problems to turn off the alarm — no brain, no snooze.',
  period: '2025',
  verdict: 'DISMISSED IN FAVOR OF PRODUCTIVITY',
  github: 'https://github.com/ANNON17-byte/math-alarm', 
  highlights: [
    'Math-based alarm dismissal that guarantees you are awake',
    'Multiple difficulty levels: Easy, Medium, Hard',
    'Custom ringtone upload with default fallback alarm sound',
    'Cute pink, cozy, mobile-first UI design',
    'Native Android alarm scheduling with background & lock screen support',
    'No snooze allowed without solving the math challenge'
  ],

  },
  {
  
    title: 'ASHMIT v. OBSCURITY',
    description: 'A Legal Precedent for Excellence in Personal Branding',
    period: '2025',
    verdict: 'EXTRAORDINARY RESULTS ACHIEVED',
    github: 'https://github.com/ANNON17-byte',
    highlights: [
      'Custom portfolio manifesto crafted with surgical precision',
      'GSAP animations smoother than legal precedent',
      'SEO optimized for maximum courtroom impact',
      'Edge function contact system—justice served instantly'
    ]
  }
];

function CaseHistory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          rotation: index % 2 === 0 ? 720 : -720,
          x: index % 2 === 0 ? -1000 : 1000,
          opacity: 0,
          scale: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-[#F5E050] border-y-8 border-[#D32F2F]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <Code className="w-16 h-16 text-[#D32F2F]" strokeWidth={3} />
            <h2 className="text-impact text-7xl text-[#D32F2F]" style={{ WebkitTextStroke: '2px black' }}>
              CASE FILES
            </h2>
            <Code className="w-16 h-16 text-[#D32F2F]" strokeWidth={3} />
          </div>
          <div className="bg-[#1976D2] text-white inline-block px-8 py-4 border-8 border-black transform -rotate-2">
            <p className="font-times text-2xl font-bold">LANDMARK DIGITAL LITIGATION & SETTLEMENTS</p>
          </div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => { if (el) cardsRef.current[index] = el; }}
              className="bg-white border-8 border-[#D32F2F] p-8 shadow-2xl transform hover:scale-105 transition-transform"
              style={{ transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
            >
              <div className="mb-4">
                <p className="font-times text-sm font-bold text-[#1976D2] uppercase tracking-wider">
                  {project.caseNumber}
                </p>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Star className="w-12 h-12 text-[#F5E050] flex-shrink-0 stroke-[#D32F2F]" strokeWidth={3} />
                <div className="flex-1">
                  <h3 className="text-impact text-4xl text-[#D32F2F] mb-2">
                    {project.title}
                  </h3>
                  <p className="font-times text-lg font-bold text-black italic mb-2">
                    {project.description}
                  </p>
                  <p className="font-times text-sm text-[#1976D2] font-semibold">
                    Filed: {project.period}
                  </p>
                </div>
              </div>

              <div className="bg-[#D32F2F] text-white px-6 py-3 mb-6 border-4 border-black">
                <p className="font-times text-xl font-bold text-center">
                  VERDICT: {project.verdict}
                </p>
              </div>

              <div className="bg-[#D32F2F] text-white px-6 py-3 mb-6 border-4 border-black">
                <a className="font-times text-xl font-bold text-center" href='https://github.com/ANNON17-byte'>
                  GITHUB: {project.github}
                </a>
              </div>

              <div className="bg-[#F5E050] border-4 border-black p-6">
                <p className="font-times font-bold text-lg mb-4 text-black flex items-center gap-2">
                  <Zap className="w-6 h-6" /> COURT FINDINGS:
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="font-times text-base text-black flex items-start gap-2">
                      <span className="text-[#1976D2] font-bold text-xl">►</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#D32F2F] text-white inline-block px-12 py-6 border-8 border-black transform rotate-2 animate-pulse">
            <p className="text-impact text-4xl">ALWAYS LEARNING & BUILDING*</p>
            <p className="font-times text-xs mt-2">*Portfolio projects showcase skills and growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseHistory;
