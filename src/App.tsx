import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import CaseHistory from './components/CaseHistory';
import LegalArsenal from './components/LegalArsenal';
import ScalesOfJustice from './components/ScalesOfJustice';
import Contact from './components/Contact';
import './styles/vhs-effect.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const tvScreenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.set(tvScreenRef.current, { opacity: 0 })
        .set(contentRef.current, { opacity: 0 })
        .to(tvScreenRef.current, {
          opacity: 1,
          duration: 0.1,
          ease: 'power1.in'
        })
        .to(tvScreenRef.current, {
          scaleY: 0.05,
          scaleX: 1,
          duration: 0.3,
          ease: 'power2.in'
        })
        .to(tvScreenRef.current, {
          scaleY: 1,
          duration: 0.4,
          ease: 'power2.out'
        })
        .to(tvScreenRef.current, { opacity: 0, duration: 0.2 })
        .to(contentRef.current, {
          opacity: 1,
          duration: 0.1,
          ease: 'power1.in'
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={tvScreenRef}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(0,0,0,0.9) 100%)',
          mixBlendMode: 'screen'
        }}
      />

      <div ref={contentRef} className="relative">
        <div className="vhs-overlay" />
        <div className="scanlines" />

        <div className="min-h-screen office-carpet">
          <Hero />
          <ScalesOfJustice />
          <CaseHistory />
          <LegalArsenal />
          <Contact />

          <footer className="bg-black text-[#F5E050] py-6 text-center border-t-8 border-[#D32F2F]">
            <p className="font-times text-sm">
              © 2025 ASHMIT YADAV LEGAL CODING SERVICES LLC. ALL WRONGS RESERVED.
            </p>
            <p className="font-times text-xs mt-2 opacity-75">
              *Past performance is not indicative of future bugs. Results may vary by browser.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
