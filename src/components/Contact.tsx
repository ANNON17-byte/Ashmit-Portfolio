import { useState, useRef } from 'react';
import { Mail, Phone, CheckCircle, XCircle } from 'lucide-react';
import gsap from 'gsap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    case: '',
    message: '',
  });

  const [status, setStatus] =
    useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [errorMessage, setErrorMessage] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(
        import.meta.env.VITE_CONTACT_API,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // ✅ REQUIRED for Supabase Edge Functions
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            case: formData.case,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStatus('success');
      setFormData({ name: '', email: '', case: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'An error occurred'
      );
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleButtonHover = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: [1, 1.1, 0.95, 1.05, 1],
        rotation: [0, -5, 5, -3, 0],
        backgroundColor: [
          '#F5E050',
          '#fff44f',
          '#F5E050',
          '#ffff00',
          '#F5E050',
        ],
        duration: 0.5,
        ease: 'power1.inOut',
      });
    }
  };

  return (
    <div
      id="contact"
      className="py-20 bg-gradient-to-b from-[#1976D2] to-[#0D47A1] border-t-8 border-[#F5E050]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-impact text-7xl text-[#F5E050] mb-6 crt-glow animate-pulse"
            style={{ WebkitTextStroke: '2px black' }}
          >
            SUE ME (OR HIRE ME)
          </h2>
          <div className="bg-[#D32F2F] text-white inline-block px-12 py-6 border-8 border-[#F5E050] transform rotate-2">
            <p className="font-times text-3xl font-bold italic">
              "In legal trouble? (Or just need React work?)"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* CONTACT INFO */}
          <div className="bg-white border-8 border-[#D32F2F] p-8 transform -rotate-1 shadow-2xl">
            <h3 className="text-impact text-4xl text-[#1976D2] mb-8 text-center">
              LEGAL CONTACT INFO
            </h3>

            <div className="space-y-6">
              <div className="bg-[#F5E050] border-4 border-black p-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8 text-[#D32F2F]" strokeWidth={3} />
                  <div>
                    <p className="font-times font-bold text-lg">HOTLINE:</p>
                    <p className="text-impact text-2xl text-[#1976D2]">
                      +91 9918510327
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5E050] border-4 border-black p-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-8 h-8 text-[#D32F2F]" strokeWidth={3} />
                  <div>
                    <p className="font-times font-bold text-lg">EMAIL:</p>
                    <p className="font-times text-lg text-[#1976D2] break-all">
                      info.ashmit@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#D32F2F] text-white p-6 border-4 border-black text-center animate-pulse">
              <p className="text-impact text-2xl">OPEN 24/7/365!</p>
              <p className="font-times text-sm mt-2">
                *Actual response time: business hours
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white border-8 border-[#D32F2F] p-8 transform rotate-1 shadow-2xl">
            <h3 className="text-impact text-4xl text-[#1976D2] mb-8 text-center">
              FILE A CLAIM
            </h3>

            {status === 'success' ? (
              <div className="bg-[#F5E050] border-4 border-black p-8 text-center">
                <CheckCircle
                  className="w-16 h-16 text-[#1976D2] mx-auto mb-4"
                  strokeWidth={3}
                />
                <p className="text-impact text-3xl text-[#D32F2F] mb-4">
                  CLAIM FILED!
                </p>
                <p className="font-times text-lg text-black">
                  Your case has been received! An associate will contact you
                  within 24–48 hours.
                </p>
              </div>
            ) : status === 'error' ? (
              <div className="bg-[#D32F2F] border-4 border-black p-8 text-center">
                <XCircle
                  className="w-16 h-16 text-white mx-auto mb-4"
                  strokeWidth={3}
                />
                <p className="text-impact text-3xl text-white mb-4">
                  OBJECTION OVERRULED!
                </p>
                <p className="font-times text-lg text-white mb-4">
                  {errorMessage}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-white text-[#D32F2F] font-times font-bold px-6 py-2 border-2 border-white hover:bg-gray-100"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-times font-bold text-lg block mb-2">
                    FULL NAME:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border-4 border-black p-3 font-times text-lg"
                  />
                </div>

                <div>
                  <label className="font-times font-bold text-lg block mb-2">
                    EMAIL ADDRESS:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-4 border-black p-3 font-times text-lg"
                  />
                </div>

                <div>
                  <label className="font-times font-bold text-lg block mb-2">
                    TYPE OF CASE:
                  </label>
                  <select
                    required
                    value={formData.case}
                    onChange={(e) =>
                      setFormData({ ...formData, case: e.target.value })
                    }
                    className="w-full border-4 border-black p-3 font-times text-lg"
                  >
                    <option value="">Select Case Type...</option>
                    <option value="bug">Bug Prosecution</option>
                    <option value="feature">Feature Implementation</option>
                    <option value="refactor">Code Refactoring Defense</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="emergency">CODE EMERGENCY</option>
                  </select>
                </div>

                <div>
                  <label className="font-times font-bold text-lg block mb-2">
                    CASE DETAILS:
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full border-4 border-black p-3 font-times text-lg resize-none"
                  />
                </div>

                <button
                  ref={buttonRef}
                  type="submit"
                  disabled={status === 'loading'}
                  onMouseEnter={handleButtonHover}
                  className="w-full bg-[#F5E050] text-black text-impact text-3xl py-6 border-8 border-[#D32F2F] shadow-2xl hover:bg-[#fff44f] transition-colors disabled:opacity-50"
                >
                  {status === 'loading'
                    ? 'FILING CLAIM...'
                    : 'SETTLEMENT OFFER (SEND MAIL)'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
