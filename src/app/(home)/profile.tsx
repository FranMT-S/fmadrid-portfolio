import Image from 'next/image';

export const Profile = () => {
  return (
    <section
      id="profile"
      className="flex min-h-screen flex-col-reverse items-center justify-end lg:flex-row lg:justify-center"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-12 text-left">
        <section>
          <h1
            data-testid="profile-title"
            className="font-title text-primary pb-0 text-[2rem] font-bold md:text-5xl"
          >
            Hi, I'm Francisco Madrid
          </h1>
          <h2
            data-testid="profile-subtitle"
            className="font-subtitle text-[1.5rem] text-zinc-600 md:text-4xl dark:text-zinc-400"
          >
            Full Stack Developer
          </h2>
          <div className="font-text mt-4 space-y-1 text-[1rem] md:text-[1.25rem] xl:text-[1.50rem]">
            <p className="mx-auto max-w-2xl">Your API is slow? I’ll optimize it.</p>
            <p className="mx-auto max-w-2xl">If you have an idea, I’ll build it.</p>
            <p className="mx-auto max-w-2xl">If you’re doing it manually, I’ll automate it.</p>
          </div>
        </section>
        <section className="flex justify-start gap-4">
          <a
            data-testid="profile-cta-jobs"
            href="#projects"
            className="border-primary hover:bg-primary text-primary rounded-lg border px-6 py-3 font-medium transition-opacity hover:text-white hover:opacity-90"
          >
            View My Work
          </a>
        </section>
      </div>
      <div className="mx-auto mb-8">
        <Image
          data-testid="profile-image"
          src="/img/profile.png"
          alt="Profile"
          width={480}
          height={480}
          sizes="(max-width: 1024px) 400px, (max-width: 1440px) 480px, 600px"
          className="h-auto w-fit rounded-full md:w-[400px] lg:w-[480px] xl:w-[600px]"
          priority
        />
      </div>
    </section>
  );
};
