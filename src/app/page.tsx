import { Profile } from '@app/(home)/profile';
import { Contact } from '@/app/(home)/contact';
import { Projects } from './(home)/projects';

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}
