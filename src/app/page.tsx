import { Profile } from "@app/(home)/profile";
import { Contact } from "@/app/(home)/contact";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Profile/>
      <Contact/>
    </div>
  );
}
