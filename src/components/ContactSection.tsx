import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    vehicleOfInterest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      // reset after some time or keep success state
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0E0E0E] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Manrope'] mb-4">
            CONTACT SIGMA AUCTIONEER
          </h2>
          <p className="text-base text-[#aaa]">
            Have questions about a vehicle, registration, or auction logistics? Our automotive advisors are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white font-['Manrope']">Sigma Headquarters</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center text-[#FFC400] shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#888] block">Physical Address</span>
                    <span className="text-sm font-semibold text-white">742 Automotive Parkway, Motor City, MC 90210</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center text-[#FFC400] shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#888] block">Phone & WhatsApp</span>
                    <span className="text-sm font-semibold text-white">+1 (800) 555-SIGMA / +1 (800) 555-7446</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center text-[#FFC400] shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#888] block">Email Support</span>
                    <span className="text-sm font-semibold text-white">auctions@sigma-auctioneer.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center text-[#FFC400] shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#888] block">Business & Viewing Hours</span>
                    <span className="text-sm font-semibold text-white">Mon – Sat: 9:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="pt-4 border-t border-[#222]">
                <a
                  href="https://wa.me/18005557446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-[#FFC400]/20 text-[#FFC400] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Manrope']">Message Sent Successfully!</h3>
                  <p className="text-sm text-[#aaa] max-w-md mx-auto">
                    Thank you for reaching out to Sigma Auctioneer. One of our senior automotive advisors will respond to your inquiry within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', vehicleOfInterest: '', message: '' });
                    }}
                    className="mt-6 px-6 py-3 bg-[#FFC400] text-black font-bold text-sm rounded-xl hover:bg-[#e0ab00] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white font-['Manrope'] mb-2">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-2">Vehicle of Interest (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. 2020 BMW 320i"
                        value={formData.vehicleOfInterest}
                        onChange={(e) => setFormData({ ...formData, vehicleOfInterest: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we assist you with your vehicle search or auction bidding?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#FFC400] hover:bg-[#e0ab00] text-black font-extrabold rounded-xl text-base transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#FFC400]/20"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
