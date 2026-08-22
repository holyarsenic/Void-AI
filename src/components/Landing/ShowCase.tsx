import Logo from "@/assets/Logo/Logo";

const ShowCase = () => {
  return (
    <section className="relative w-full min-h-screen bg-background px-6 py-24 sm:px-10 lg:px-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Logo className="absolute inset-0 h-full w-full text-foreground/10 rotate-180" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-4 max-w-2xl text-start">

          <h2 className="font-theme text-3xl font-bold text-white sm:text-5xl tracking-tight">
            From prompt to interface in seconds.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/40">
            Describe what you imagine. Watch AI interpret your design system and deliver 
            production-ready, accessible components effortlessly.
          </p>
        </div>

        <div className="">
          
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm shadow-2xl shadow-black/50">
              <video
                className="h-auto w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
              >
                <source src="/Showcase.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;