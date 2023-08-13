<script lang="ts">
	import { based } from "../../constants/pages_based";
	import TW_CLASS from "../../constants/tailwind_class";
	import RandomPick from "../../modules/PickStart";
	import RandomAnimation from "../../modules/RandomAnimation"

  let Count: number | undefined = undefined
  let Player: number | undefined = undefined
  let Result: number | undefined = undefined
  
  let Randomize = setInterval(() => {
    const Based = RandomAnimation((Player === undefined) ? RandomPick() : Player, (Count === undefined) ? 0 : Count)
    Count = Number(Based.count) + 1
    Player = Based.returnStyling

    if (Count > 11) {
      Result = Player
      clearInterval(Randomize)
    }
  }, 200)
</script>

<svelte:head>
  <title>
    Pick Me {based.title}
  </title>
</svelte:head>

<section>
  <div class={TW_CLASS.container}>
    <div class="flex justify-center items-center rotate-180 h-[40vh]">
      <h1 class={`${TW_CLASS.heading.xxxl} !py-0 !text-5xl`}>
        {(Result !== undefined && Result === 1) ? "You Start First" : ""}
      </h1>
    </div>

    <div class="flex justify-center items-center h-[10vh]">
      <h1 class={`${TW_CLASS.heading.xxxl} !py-0 !text-5xl scale-110`}>
        <div class={`hidden ${(Player !== 0) ? '!block' : ''}`}>
          <i class="fa-solid fa-arrow-up"></i>
        </div>
        <div class={`hidden ${(Player !== 1) ? '!block' : ''}`}>
          <i class="fa-solid fa-arrow-down"></i>
        </div>
      </h1>
    </div>

    <div class="flex justify-center items-center h-[40vh]">
      <h1 class={`${TW_CLASS.heading.xxxl} !py-0 !text-5xl`}>
        {(Result !== undefined && Result === 0) ? "You Start First" : ""}
      </h1>
    </div>
  </div>
</section>