'use client';

import { coreSkills, skills } from './shared/skills';

const LogoTextStyle = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full">
        <h1 className="font-title text-primary py-4 text-3xl font-bold md:text-5xl">Tech Stack</h1>
        <div className="rounded-3xl border border-gray-200 p-12 shadow-sm">
          {/* Core Stack */}
          <section className="mb-12 border-b border-gray-200 pb-12">
            <h2 className="font-subtitle text-subtitle mb-4 font-bold tracking-wider uppercase md:text-2xl">
              Core Stack
            </h2>
            <div
              className="grid justify-items-center gap-2"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px,100%),1fr))' }}
            >
              {coreSkills.map((skill, idx) => (
                <div key={idx} className="group flex min-w-[220px] items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800">
                    {skill.Icon && (
                      <skill.Icon
                        className="h-8 w-8"
                        style={
                          {
                            '--icon-primary': skill.color,
                            color: skill.color,
                          } as React.CSSProperties
                        }
                      />
                    )}
                  </div>
                  <span className="text-text text-[1rem] font-bold md:text-2xl">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="max-mobile:grid-cols-1 tablet:grid-cols-2 grid gap-8 md:grid-cols-3">
            {skills.map((skill) => {
              return (
                <section key={skill.category}>
                  <h3 className="font-subtitle text-subtitle mb-4 font-bold tracking-wider uppercase">
                    {skill.category}
                  </h3>
                  <div className="space-y-3">
                    {skill.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {skill.Icon && (
                          <skill.Icon
                            className="h-6 w-6"
                            style={
                              {
                                '--icon-primary': skill.color,
                                color: skill.color,
                              } as React.CSSProperties
                            }
                          />
                        )}
                        <span className="font-text">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export const Stacks = () => {
  return (
    <section id="stack" className="pt-8">
      <LogoTextStyle />
    </section>
  );
};
