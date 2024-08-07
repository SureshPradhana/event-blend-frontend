import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navigations/navbar";

export default component$(() => {
  return (
    <div class="flex h-full min-h-screen flex-col justify-between bg-background">
      <Navbar />
      <main class="w-full flex-1 py-6">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
