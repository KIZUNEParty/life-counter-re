<script>
	import { based } from "../constants/pages_based";
	import TW_CLASS from "../constants/tailwind_class";

  const ButtonClass = `block py-4 text-xl duration-300 hover:bg-white-overlay hover:text-pastel-black`
</script>

<svelte:head>
  <title>
    Menu {based.title}
  </title>
</svelte:head>

<section class="h-screen">
  <div class="w-full h-full flex justify-center items-center flex-row">
    <div class="w-full md:w-[80%] mx-auto text-center">
      <h1 class={`${TW_CLASS.heading.xxl} !py-0 my-2 !text-4xl underline`}>
        Life Counter Menu
      </h1>
      <a href="/start" class={ButtonClass}>
        Pick who start first!
      </a>
    </div>
  </div>
</section>