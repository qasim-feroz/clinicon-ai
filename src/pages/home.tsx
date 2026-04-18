import { motion } from "framer-motion";
import { ChatMockup } from "@/components/chat-mockup";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Clock,
  CalendarCheck,
  Users,
  MessageSquare,
  CheckCircle2,
  TrendingUp,
  Stethoscope,
  Scissors,
  Sparkles,
  Smile,
  TrendingDown
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-24 md:pb-0">
      <FloatingWhatsApp />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-primary tracking-tight">Clinicon AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#use-cases" className="hover:text-primary transition-colors">Use Cases</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/923244910858?text=Hi%2C%20I%20want%20a%20demo%20of%20your%20AI%20receptionist%20for%20my%20clinic.%20Can%20you%20show%20me%20how%20it%20handles%20patient%20appointments%3F" className="hidden sm:block text-sm font-medium text-primary hover:underline">
              Watch Demo
            </a>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
              <a
                href="https://wa.me/923244910858?text=Hi%2C%20I%20want%20you%20to%20setup%20AI%20Receptionist%20for%20my%20business.%20Can%20you%20tell%20me%20how%20it%20works%3F"
                target="_blank"
                rel="noreferrer noopener"
              >
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-14 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider">AI Receptionist is Online</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Never Miss a <span className="text-primary">Patient</span> Inquiry
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Turn your WhatsApp into an AI receptionist that instantly replies, books appointments, and handles patient queries — 24/7 without hiring staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-base h-14 px-8 shadow-lg">
                <a
                  href="https://wa.me/923244910858?text=Hi%2C%20I%20want%20a%20demo%20of%20your%20AI%20receptionist%20for%20my%20clinic.%20Can%20you%20show%20me%20how%20it%20handles%20patient%20appointments%3F"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Get Your AI Receptionist
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 border-gray-200">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-400">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div> */}
              <p>Built for modern clinics & service businesses</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <ChatMockup />
          </motion.div>
        </div>
      </section>

      {/* Social Proof (Logos Placeholder) */}
      {/* <section className="py-10 border-y border-border/50 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Powering patient service for top clinics & salons
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale"> */}
            {/* Placeholders for logos */}
            {/* {['Acme Clinic', 'Glow Salon', 'Elite Dental', 'Prime Physio', 'Urban Spa'].map((name) => (
              <div key={name} className="text-xl font-bold text-gray-400">{name}</div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Problem Section */}
      <section className="py-14 md:py-24 bg-gray-50 px-6 pt-0">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You're Losing Paitents Every Day
          </h2>
          <p className="text-lg text-gray-600">
            While your staff is busy or your clinic is closed, potential patients are messaging you. When you don't reply instantly, they go to competitors.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
          {[
            { icon: Clock, title: "Slow Replies", desc: "Patients wait hours for a simple answer." },
            { icon: MessageSquare, title: "Missed Messages", desc: "Inquiries slip through the cracks during busy hours." },
            { icon: Users, title: "Overloaded Staff", desc: "Your team spends hours answering repetitive questions." },
            { icon: TrendingDown, title: "Lost Revenue", desc: "No 24/7 availability means missing after-hours bookings." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[85%] sm:min-w-[60%] md:min-w-0 shrink-0 snap-start"
            >
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-14 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Your AI Receptionist
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A digital front desk that never sleeps, takes no breaks, and handles every patient with perfect professionalism.
              </p>

              <div className="space-y-6">
                {[
                  { icon: CheckCircle2, title: "Replies Instantly", desc: "Zero wait time. Patients get answers the second they message." },
                  { icon: CalendarCheck, title: "Books Appointments", desc: "Connects to your calendar and schedules bookings automatically." },
                  { icon: Bot, title: "Handles FAQs", desc: "Answers questions about pricing, location, and services perfectly." },
                  { icon: TrendingUp, title: "Captures Leads", desc: "Collects names and numbers even while you sleep." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <feature.icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 transform rotate-3 rounded-3xl" />
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                <h3 className="font-bold text-xl mb-6">How it works</h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  {[
                    { step: "1", title: "We set it up", desc: "We train the AI on your specific business details." },
                    { step: "2", title: "Patients message", desc: "They reach out on WhatsApp like normal." },
                    { step: "3", title: "AI handles it", desc: "Instant replies, bookings, and happy patients." }
                  ].map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                        {step.step}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-14 md:py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Clinics That Depend on Appointments
            </h2>
            <p className="text-lg text-gray-600">
              Whether you're handling patient inquiries or booking consultations, Clinicon AI ensures you never lose a lead again.
            </p>
          </div>

          {/* Cards */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
            {[
              { 
                icon: Stethoscope, 
                title: "Clinics & Healthcare", 
                desc: "Reply instantly to patient inquiries, book appointments, and reduce missed calls — 24/7." 
              },
              { 
                icon: Smile, 
                title: "Dental Clinics", 
                desc: "Handle appointment requests, answer the questions, and keep your schedule fully booked." 
              },
              { 
                icon: Sparkles, 
                title: "Aesthetic Clinics", 
                desc: "Convert inquiries into consultations instantly by answering pricing, treatments, and availability." 
              },
              { 
                icon: Scissors, 
                title: "Salons & Spas", 
                desc: "Automate client replies, share services, and fill your calendar with confirmed bookings." 
              }
            ].map((useCase, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all cursor-default min-w-[85%] sm:min-w-[60%] md:min-w-0 shrink-0 snap-start"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Conversion CTA */}
          <div className="text-center mt-10 md:mt-14">
            <p className="text-gray-800 text-lg font-medium mb-4">
              Want more patients without hiring extra staff?
            </p>

            <a
              href="https://wa.me/923244910858?text=Hi%2C%20I%20want%20a%20demo%20of%20your%20AI%20receptionist%20for%20my%20clinic.%20Can%20you%20show%20me%20how%20it%20handles%20patient%20appointments%3F"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center bg-primary text-white px-7 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
            >
              Get Demo on WhatsApp
            </a>

            <p className="text-sm text-gray-500 mt-3">
              • We Will Setup For You
            </p>
          </div>

        </div>
      </section>

      {/* Before vs After */}
      <section className="py-14 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 md:mb-16">The Clinicon Difference</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-2xl font-semibold text-sm">Before</div>
              <h3 className="text-2xl font-bold text-red-900 mb-6">Without AI</h3>
              <ul className="space-y-4">
                {[
                  "Missed leads during off-hours",
                  "Slow response times lose patients",
                  "Staff overwhelmed by repetitive questions",
                  "Manual appointment booking errors"
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-red-800">
                    <span className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center shrink-0 mt-0.5 text-red-600 font-bold text-sm">X</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary border border-primary-border rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl text-white">
              <div className="absolute top-0 right-0 bg-white text-primary px-4 py-1 rounded-bl-2xl font-semibold text-sm">With Clinicon</div>
              <h3 className="text-2xl font-bold text-white mb-6">With AI Receptionist</h3>
              <ul className="space-y-4">
                {[
                  "Instant replies, 24/7/365",
                  "Capture every single lead immediately",
                  "Automated, error-free calendar bookings",
                  "Automated follow-ups for appointments"
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-primary-foreground">
                    <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5 text-white font-bold text-sm">✓</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 md:py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">Invest in a receptionist that never clocks out.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
              <p className="text-gray-500 mt-2">For independent professionals.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-gray-900">PKR 20,000</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["24/7 instant replies to every patient", "Never miss inquiries — even after clinic hours", "We set everything up for you"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5 border-t border-dashed border-gray-200">
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-semibold uppercase tracking-wide text-gray-600">*</span>{" "}
                  One-time onboarding fee applies: PKR. 15,000
                </p>
              </div>
              <Button asChild variant="outline" className="w-full h-12 text-base font-semibold">
                <a
                  href="https://wa.me/923244910858?text=Hi%2C%20I%20want%20you%20to%20setup%20Basic%20plan%20for%20my%20business.%20Can%20you%20tell%20me%20how%20it%20works%3F"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Get Basic Plan
                </a>
              </Button>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 border border-gray-800 shadow-2xl flex flex-col relative overflow-hidden h-full">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary to-[#53bdeb]" />
              <div className="absolute top-6 right-6 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              
              <h3 className="text-2xl font-bold text-white">Pro</h3>
              <p className="text-gray-400 mt-2">For growing clinics and salons.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-white">PKR 35,000</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Smart appointment booking flow", "Auto follow-ups that bring back lost patients", "Personalized replies tailored to your clinic", "No setup charges (Free onboarding)"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-secondary" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5 border-t border-dashed border-gray-500">
                <p className="text-xs text-gray-300 leading-relaxed">
                  <span className="font-semibold uppercase tracking-wide text-gray-200">*</span>{" "}
                  Costs less than hiring a receptionist — works 24/7
                </p>
              </div>
              <Button asChild className="w-full h-12 text-base font-semibold bg-secondary hover:bg-secondary/90 text-white">
                <a
                  href="https://wa.me/923244910858?text=Hi%2C%20I%20want%20you%20to%20setup%20Pro%20plan%20for%20my%20business.%20Can%20you%20tell%20me%20how%20it%20works%3F"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Get Pro Plan
                </a>
              </Button>
            </div>
          </div>
          
          {/* <p className="text-center text-gray-500 mt-8 text-sm">Setup complete in under 24 hours. No technical skills required.</p> */}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-24 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Start Capturing Every Patient Today
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto">
            Stop losing business to slow replies. Set up your AI Receptionist and let it handle the front desk while you focus on your craft.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-white text-lg shadow-lg font-bold">
              <a
                href="https://wa.me/923244910858?text=Hi%2C%20I%20want%20a%20demo%20of%20your%20AI%20receptionist%20for%20my%20clinic.%20Can%20you%20show%20me%20how%20it%20handles%20patient%20appointments%3F"
                target="_blank"
                rel="noreferrer noopener"
              >
                Get Started on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-white/30 text-white hover:bg-white/10">
              Talk to Sales
            </Button>
          </div>
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
            {["Setup in 24 Hours", "No Technical Skills Needed", "Built for Clinics & Salons"].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 md:hidden">
        <Button asChild className="h-12 w-full bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold shadow-xl">
          <a
            href="https://wa.me/923244910858?text=Hi%2C%20I%20want%20a%20demo%20of%20your%20AI%20receptionist%20for%20my%20clinic.%20Can%20you%20show%20me%20how%20it%20handles%20patient%20appointments%3F"
            target="_blank"
            rel="noreferrer noopener"
          >
            Get Demo on WhatsApp
          </a>
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">Clinicon AI</span>
            </div>
            <p className="text-sm max-w-sm">The 24/7 AI Receptionist for modern service businesses. Never miss a patient again.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Use Cases</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Clinicon AI. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Powered by WhatsApp</span>
            <div className="w-2 h-2 rounded-full bg-secondary" />
          </div>
        </div>
      </footer>
    </div>
  );
}

// Dummy trending down icon component since it wasn't imported from lucide-react directly above
function trendingDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}
