
import Navbar from "./Navbar";
import { ArrowRight, ArrowUpRight, CheckCircle2, Dumbbell, ChevronDown, Users, Star,   Check, TrendingUp, CalendarCheck, Play,  ClipboardCheck, CreditCard, BarChart3,  Mail, Phone, MapPin, Send, Camera,} from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <section  id="home"  className="relative overflow-hidden bg-[#10110f] text-white">
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-lime-400/5 blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-24">

            {/* Left side */}
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
                <span className="text-xs font-semibold tracking-wide text-lime-300 sm:text-sm">
                  SMARTER GYM MANAGEMENT STARTS HERE
                </span>
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                Build a Stronger<br />Gym. Manage It<br />
                <span className="text-lime-400">Smarter.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                Everything your fitness business needs in one place.
                Manage members, track memberships, monitor payments,
                and grow your gym without the daily hassle.
              </p>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#membership" className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition duration-300 hover:bg-lime-300"> Explore Membership
                  <ArrowRight  size={19} className="transition-transform group-hover:translate-x-1"/></a>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition duration-300 hover:border-lime-400 hover:text-lime-400"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <Play size={13} fill="currentColor" />
                  </span>
                  Explore Features
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-7">
                {[
                  "Easy Member Tracking",
                  "Smart Payments",
                  "All-in-One Dashboard",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-lime-400"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a1b18]">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=85"
                  alt="Modern gym with professional workout equipment"
                  className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10110f] via-black/10 to-black/10" />

                {/* Image caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-gray-300">
                        YOUR FITNESS BUSINESS
                      </p>
                      <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                        Powered by GYMFLOW
                      </h2>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-400 text-black">
                      <Dumbbell size={25} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating members card */}
              <div className="absolute -left-3 top-8 w-48 rounded-2xl border border-white/10 bg-[#1b1c19]/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-8 sm:w-56 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                    <Users size={21} />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-lime-400">
                    <TrendingUp size={13} />
                    Live stats
                  </span>
                </div>

                <p className="mt-4 text-xs text-gray-400">
                  Member Management
                </p>
                <p className="mt-1 text-xl font-extrabold sm:text-2xl">
                  All in One Place
                </p>
                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Organize your members with ease.
                </p>
              </div>

              {/* Floating schedule card */}
              <div className="absolute -right-2 top-1/2 w-44 rounded-2xl border border-white/10 bg-[#1b1c19]/95 p-4 shadow-2xl backdrop-blur-xl sm:-right-7 sm:w-52 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                    <CalendarCheck size={21} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Stay Organized</p>
                    <p className="text-sm font-bold">Smart Scheduling</p>
                  </div>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-lime-400" />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Manage your gym efficiently
                </p>
              </div>

              {/* Bottom badge */}
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-white/10 bg-[#1b1c19] px-5 py-3 shadow-xl sm:left-auto sm:right-8 sm:translate-x-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black">
                  <ArrowUpRight size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold">One Smart Platform</p>
                  <p className="text-xs text-gray-400">
                    Built for modern gyms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom border */}
          <div className="h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />
        </section>

        
{/* FEATURES SECTION */}
<section
  id="features"
  className="relative overflow-hidden border-t border-white/5 bg-[#141511] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28"
>
  <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-lime-400/5 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        Powerful Features
      </span>

      <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Everything Your Gym Needs,
        <span className="block mt-2 text-lime-400">
          All in One Place.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
        Simplify your daily operations with powerful tools designed
        to help you manage members, track attendance, organize
        memberships, and grow your fitness business.
      </p>
    </div>

    {/* Feature cards */}
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      {[
        {
          number: "01",
          icon: Users,
          title: "Member Management",
          description:
            "Keep all member profiles, contact information, membership details, and activity organized in one place.",
        },
        {
          number: "02",
          icon: ClipboardCheck,
          title: "Attendance Tracking",
          description:
            "Record member check-ins and monitor attendance to understand gym activity and member engagement.",
        },
        {
          number: "03",
          icon: CalendarCheck,
          title: "Membership Plans",
          description:
            "Create flexible membership packages, manage subscriptions, and keep track of membership expiry dates.",
        },
        {
          number: "04",
          icon: CreditCard,
          title: "Payment Management",
          description:
            "Organize membership fees, review payment records, and keep your gym's financial information accessible.",
        },
        {
          number: "05",
          icon: Dumbbell,
          title: "Workout Scheduling",
          description:
            "Organize workout sessions and help trainers and members stay on top of their fitness schedules.",
        },
        {
          number: "06",
          icon: BarChart3,
          title: "Reports & Analytics",
          description:
            "Understand membership growth, attendance patterns, and payment activity with clear management reports.",
        },
      ].map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.number}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a1b17] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-[#1e201a] sm:p-7"
          >
            {/* Number */}
            <span className="absolute right-6 top-6 text-sm font-bold tracking-widest text-gray-600 transition-colors group-hover:text-lime-400/60">
              {feature.number}
            </span>

            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/15 bg-lime-400/10 text-lime-400 transition-all duration-300 group-hover:bg-lime-400 group-hover:text-black">
              <Icon size={26} strokeWidth={1.8} />
            </div>

            {/* Text */}
            <h3 className="mt-7 text-xl font-bold tracking-tight">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              {feature.description}
            </p>

            {/* Bottom accent */}
            <div className="mt-6 h-px w-12 bg-lime-400/40 transition-all duration-300 group-hover:w-full" />
          </div>
        );
      })}
    </div>

    {/* Bottom CTA */}
    <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-lime-400/15 bg-lime-400/5 p-6 sm:flex-row sm:p-8">
      <div>
        <h3 className="text-xl font-bold sm:text-2xl">
          Ready to manage your gym smarter?
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">
          Discover a simpler way to handle your daily gym operations.
        </p>
      </div>

      <a
        href="#membership"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-lime-300"
      >
        Explore More
        <ArrowRight size={17} />
      </a>
    </div>
  </div>
</section>



{/* MEMBERSHIP SECTION */}
<section
  id="membership"
  className="relative overflow-hidden border-t border-white/5 bg-[#10110f] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28"
>
  <div className="pointer-events-none absolute left-1/2 top-40 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-400/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl">
    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        Membership Plans
      </span>

      <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Find Your Perfect
        <span className="mt-2 block text-lime-400">
          Fitness Plan.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
        Whether you are just getting started or ready to take
        your training to the next level, choose a plan that
        fits your fitness goals.
      </p>
    </div>

    {/* Pricing cards */}
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      {[
        {
          name: "Basic",
          subtitle: "A great place to start",
          price: "999",
          featured: false,
          features: [
            "Gym access",
            "Basic workout equipment",
            "Standard locker access",
            "Monthly membership",
          ],
        },
        {
          name: "Pro",
          subtitle: "For your next level",
          price: "1,999",
          featured: true,
          features: [
            "Full gym access",
            "Personal workout guidance",
            "Locker access",
            "Group workout sessions",
            "Priority member support",
          ],
        },
        {
          name: "Elite",
          subtitle: "The premium experience",
          price: "3,499",
          featured: false,
          features: [
            "All Pro benefits",
            "Personal training sessions",
            "Customized workout plan",
            "Nutrition guidance",
            "Premium member support",
          ],
        },
      ].map((plan) => (
        <div
          key={plan.name}
          className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
            plan.featured
              ? "border-lime-400 bg-[#1a1d15] shadow-[0_0_45px_rgba(163,230,53,0.08)]"
              : "border-white/10 bg-[#171814] hover:border-white/20"
          }`}
        >
          {plan.featured && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-lime-400 px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-black">
              Most Popular
            </div>
          )}

          {/* Plan details */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-extrabold">
              {plan.name}
            </h3>

            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                plan.featured
                  ? "bg-lime-400 text-black"
                  : "bg-white/5 text-lime-400"
              }`}
            >
              <Dumbbell size={22} />
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-400">
            {plan.subtitle}
          </p>

          {/* Price */}
          <div className="mt-7 flex items-baseline gap-2">
            <span className="text-lg font-bold text-lime-400">
              ৳
            </span>
            <span className="text-4xl font-black tracking-tight sm:text-5xl">
              {plan.price}
            </span>
            <span className="text-sm text-gray-500">
              / month
            </span>
          </div>

          <div className="my-7 h-px bg-white/10" />

          <p className="mb-5 text-sm font-bold">
            What's included
          </p>

          {/* Features list */}
          <ul className="flex-1 space-y-4">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm leading-6 text-gray-300"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/10 text-lime-400">
                  <Check size={13} strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/register"
            className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-bold transition ${
              plan.featured
                ? "bg-lime-400 text-black hover:bg-lime-300"
                : "border border-white/15 text-white hover:border-lime-400 hover:text-lime-400"
            }`}
          >
            Choose {plan.name}
            <ArrowRight size={17} />
          </a>
        </div>
      ))}
    </div>

    {/* Bottom note */}
    <p className="mt-8 text-center text-xs leading-6 text-gray-500">
      Prices shown are sample prices for the landing page.
      Actual plans and benefits may vary by gym.
    </p>
  </div>
</section>



{/* ABOUT SECTION */}
<section
  id="about"
  className="relative overflow-hidden border-t border-white/5 bg-[#141511] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28"
>
  <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

    {/* Left: Image */}
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
          alt="Modern gym with professional fitness equipment"
          loading="lazy"
          className="h-[360px] w-full object-cover sm:h-[460px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10110f]/80 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            Our Mission
          </p>
          <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight sm:text-3xl">
            Making Gym Management Simple and Smart.
          </h3>
        </div>
      </div>

      {/* Floating card */}
      <div className="absolute -bottom-5 -right-2 rounded-2xl border border-lime-400/20 bg-[#1b1c19] p-4 shadow-xl sm:-right-5 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
            <Dumbbell size={24} />
          </div>
          <div>
            <p className="font-bold">GYMFLOW</p>
            <p className="mt-1 text-xs text-gray-400">
              Your Gym, Organized.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Content */}
    <div className="pt-5 lg:pt-0">
      <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        About GYMFLOW
      </span>

      <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Less Paperwork.
        <span className="mt-2 block text-lime-400">
          More Progress.
        </span>
      </h2>

      <p className="mt-6 text-base leading-8 text-gray-400">
        Managing a gym involves much more than workouts. From
        member records and attendance to membership plans and
        payments, everyday tasks can become complicated.
      </p>

      <p className="mt-4 text-base leading-8 text-gray-400">
        GYMFLOW brings these essential activities together in one
        organized platform, helping gym owners spend less time
        on administration and more time improving their business.
      </p>

      {/* Benefits */}
      <div className="mt-8 space-y-5">
        {[
          {
            title: "Everything in One Place",
            description:
              "Keep essential gym information organized and accessible.",
          },
          {
            title: "Simple Daily Management",
            description:
              "Make member records, attendance, and payments easier to manage.",
          },
          {
            title: "Built for Growth",
            description:
              "Create a more organized experience for owners, staff, and members.",
          },
        ].map((benefit) => (
          <div key={benefit.title} className="flex items-start gap-4">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400/10 text-lime-400">
              <Check size={16} strokeWidth={3} />
            </div>

            <div>
              <h3 className="font-bold text-white">
                {benefit.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="group mt-9 inline-flex items-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition hover:bg-lime-300"
      >
        Get in Touch
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  </div>
</section>


{/* Testimonials Section */}

<section
  id="testimonials"
  className="relative overflow-hidden border-t border-white/5 bg-[#10110f] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28"
>
  <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-lime-400/5 blur-[110px]" />

  <div className="relative mx-auto max-w-7xl">
    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        Testimonials
      </span>

      <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
        What Our
        <span className="mt-2 block text-lime-400">
          Members Say.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
        A better gym experience starts with better management.
        Explore these sample reviews showing the kind of experience
        GYMFLOW aims to support.
      </p>
    </div>

    {/* Review cards */}
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      {[
        {
          name: "Alex Morgan",
          role: "Gym Member",
          initials: "AM",
          quote:
            "Having everything organized makes the gym experience feel much smoother. Managing membership details is easier and more convenient.",
        },
        {
          name: "Sarah Williams",
          role: "Fitness Enthusiast",
          initials: "SW",
          quote:
            "A simple and organized system can make a real difference. I like the idea of keeping important gym information in one place.",
        },
        {
          name: "Daniel Carter",
          role: "Gym Owner",
          initials: "DC",
          quote:
            "Managing attendance, memberships, and payments from one platform is exactly the kind of solution a modern gym needs.",
        },
      ].map((review, index) => (
        <article
          key={review.name}
          className={`group rounded-3xl border bg-[#171814] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 sm:p-8 ${
            index === 1
              ? "border-lime-400/25"
              : "border-white/10"
          }`}
        >
          {/* Quote icon */}
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-3xl font-black text-lime-400">
              “
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Sample Review
            </span>
          </div>

          {/* Stars: decorative demo rating */}
          <div
            className="mt-6 flex gap-1 text-lime-400"
            aria-label="Illustrative five-star rating"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={17}
                fill="currentColor"
                strokeWidth={1.5}
              />
            ))}
          </div>

          {/* Review */}
          <p className="mt-5 min-h-32 text-sm leading-7 text-gray-300 sm:text-base">
            “{review.quote}”
          </p>

          <div className="my-6 h-px bg-white/10" />

          {/* Reviewer */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lime-400/20 bg-lime-400/10 font-bold text-lime-400">
              {review.initials}
            </div>

            <div>
              <h3 className="font-bold text-white">
                {review.name}
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                {review.role}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* Bottom message */}
    <div className="mt-12 rounded-2xl border border-white/10 bg-[#171814] px-6 py-7 text-center sm:px-10">
      <h3 className="text-xl font-bold sm:text-2xl">
        Your gym deserves a smarter system.
      </h3>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400">
        Bring your daily gym operations together and create
        a more organized experience for everyone.
      </p>

      <a
        href="#contact"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-lime-300"
      >
        Let's Talk
        <ArrowRight size={17} />
      </a>
    </div>
  </div>
</section>


{/* FAQ Section */}
<section id="faq" className="bg-[#141511] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
  <div className="mx-auto max-w-4xl">

    {/* Section Heading */}
    <div className="mb-12 text-center">
      <span className="mb-4 inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
        Got Questions?
      </span>

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        Frequently Asked <span className="text-lime-400">Questions</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
        Everything you need to know about GYMFLOW and how it can help
        you manage your gym more efficiently.
      </p>
    </div>

    {/* FAQ Questions */}
    <div className="space-y-4">
      {[
        {
          question: "What is GYMFLOW?",
          answer:
            "GYMFLOW is a gym management system concept designed to help gym owners organize members, track attendance, manage memberships, and monitor gym activities from one place.",
        },
        {
          question: "Can I manage all my gym members?",
          answer:
            "The planned member management features will help gym staff organize member information, check membership status, and manage member records efficiently.",
        },
        {
          question: "Does GYMFLOW support membership plans?",
          answer:
            "GYMFLOW's demo interface includes Basic, Pro, and Elite membership plans. Actual plan registration and payment processing will require backend integration.",
        },
        {
          question: "Can I track attendance and payments?",
          answer:
            "Attendance tracking and payment management are planned features. Their real data tracking and processing will work after the backend and database are connected.",
        },
        {
          question: "Is GYMFLOW available on mobile devices?",
          answer:
            "The interface is being designed to work across desktop, tablet, and mobile screen sizes, so users can browse the website on different devices.",
        },
      ].map((faq, index) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-white/10 bg-[#10110f] transition-all duration-300 hover:border-lime-400/40"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
            <span className="flex items-start gap-4 text-sm font-semibold leading-6 text-white sm:text-base">
              <span className="mt-0.5 text-sm font-bold text-lime-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              {faq.question}
            </span>

            <ChevronDown
              size={20}
              className="shrink-0 text-lime-400 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div className="px-5 pb-6 sm:px-6">
            <div className="mb-4 h-px bg-white/10" />
            <p className="pl-8 text-sm leading-7 text-gray-400">
              {faq.answer}
            </p>
          </div>
        </details>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-12 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6 text-center sm:p-8">
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        Still have questions?
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        Get in touch with us and learn more about GYMFLOW.
      </p>

      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
      >
        Contact Us
        <ArrowRight size={18} />
      </a>
    </div>

  </div>
</section>


{/* Contact Section */}
<section
  id="contact"
  className="bg-[#10110f] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-14 text-center">
      <span className="mb-4 inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
        Get In Touch
      </span>

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        Let's Talk About Your{" "}
        <span className="text-lime-400">Gym</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
        Have questions about GYMFLOW? Send us a message and
        let's explore how smarter gym management can help.
      </p>
    </div>

    {/* Contact Content */}
    <div className="grid gap-8 lg:grid-cols-5">

      {/* Contact Information */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#181914] p-7 sm:p-9 lg:col-span-2">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white">
            Contact Information
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Have a project in mind or want to learn more?
            We would love to hear from you.
          </p>

          <div className="mt-10 space-y-7">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                <Mail size={22} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Email Us
                </p>
                <p className="mt-2 break-all text-sm text-gray-400">
                  info@gymflow.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                <Phone size={22} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Call Us
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  +880 1XXX-XXXXXX
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Our Location
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Bangladesh
                </p>
              </div>
            </div>

          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs leading-6 text-gray-500">
              GYMFLOW — Helping gyms focus on what matters most:
              their members and their progress.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-3xl border border-white/10 bg-[#181914] p-7 sm:p-9 lg:col-span-3">
        <h3 className="text-2xl font-bold text-white">
          Send Us a Message
        </h3>

        <p className="mt-3 text-sm text-gray-400">
          Fill out the form below and tell us how we can help.
        </p>

        <form
          className="mt-8 space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            alert("This demo form is not connected to a backend yet.");
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-white/10 bg-[#10110f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-white/10 bg-[#10110f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Subject
            </label>

            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="What is your message about?"
              required
              className="w-full rounded-xl border border-white/10 bg-[#10110f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell us a little about your question..."
              required
              className="w-full resize-y rounded-xl border border-white/10 bg-[#10110f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-4 text-sm font-bold text-black transition hover:bg-lime-300 sm:w-auto"
          >
            Send Message
            <Send size={17} />
          </button>

          <p className="text-xs leading-5 text-gray-500">
            Demo only: messages are not sent or stored yet.
          </p>
        </form>
      </div>

    </div>
  </div>
</section>


{/* Footer Section */}
<footer className="border-t border-white/10 bg-[#10110f] px-5 pt-16 sm:px-8 lg:px-16">

  <div className="mx-auto max-w-7xl">

    {/* Footer Main Content */}
    <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <a href="#home" className="inline-flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400 text-black">
            <Dumbbell size={25} strokeWidth={2.5} />
          </div>

          <span className="text-2xl font-black tracking-tight text-white">
            GYM<span className="text-lime-400">FLOW</span>
          </span>
        </a>

        <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
          Smarter gym management starts here. Organize your gym,
          manage memberships, and focus on progress.
        </p>

        {/* Social Media */}
        
{/* Social Links */}
<div className="mt-6 flex items-center gap-3">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
  >
    <Users size={18} />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
  >
    <Camera size={18} />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="YouTube"
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
  >
    <Play size={18} />
  </a>
</div>

      </div>

      {/* Quick Links */}
      <div>
        <h3 className="mb-6 text-base font-bold text-white">
          Quick Links
        </h3>

        <ul className="space-y-4 text-sm text-gray-400">
          <li>
            <a href="#home" className="transition hover:text-lime-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="transition hover:text-lime-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#features" className="transition hover:text-lime-400">
              Features
            </a>
          </li>
          <li>
            <a href="#membership" className="transition hover:text-lime-400">
              Membership Plans
            </a>
          </li>
          <li>
            <a href="#testimonials" className="transition hover:text-lime-400">
              Testimonials
            </a>
          </li>
        </ul>
      </div>

      {/* Our Features */}
      <div>
        <h3 className="mb-6 text-base font-bold text-white">
          Our Features
        </h3>

        <ul className="space-y-4 text-sm text-gray-400">
          <li>
            <a href="#features" className="transition hover:text-lime-400">
              Member Management
            </a>
          </li>
          <li>
            <a href="#features" className="transition hover:text-lime-400">
              Attendance Tracking
            </a>
          </li>
          <li>
            <a href="#features" className="transition hover:text-lime-400">
              Membership Plans
            </a>
          </li>
          <li>
            <a href="#features" className="transition hover:text-lime-400">
              Payment Management
            </a>
          </li>
          <li>
            <a href="#features" className="transition hover:text-lime-400">
              Reports & Analytics
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="mb-6 text-base font-bold text-white">
          Get In Touch
        </h3>

        <p className="text-sm leading-7 text-gray-400">
          Have questions about managing your gym? Get in touch
          with our team.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
        >
          Contact Us
          <ArrowUpRight size={17} />
        </a>

        <a
          href="#faq"
          className="mt-4 block text-sm text-gray-400 transition hover:text-lime-400"
        >
          Frequently Asked Questions
        </a>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

      <p className="text-xs leading-6 text-gray-500">
        © {new Date().getFullYear()} GYMFLOW. All rights reserved.
      </p>

      <a
        href="#home"
        className="text-xs font-medium text-gray-400 transition hover:text-lime-400"
      >
        Back to top ↑
      </a>

    </div>

  </div>
</footer>



      </main>
    </>
  );
};

export default Home;
