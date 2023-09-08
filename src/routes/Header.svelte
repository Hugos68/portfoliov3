<script lang="ts">
	import { page } from '$app/stores';
	import { createDialog, melt } from '@melt-ui/svelte';

	const {
		elements: { trigger, overlay, content, portalled }
	} = createDialog();
</script>

<header
	class="bg-white text-sunset-orange-500 font-semibold text-lg sticky top-0 p-6 px-8 rounded-tl-3xl rounded-bl-md rounded-br-3xl rounded-tr-md flex gap-8"
>
	<nav class="hidden md:flex gap-[5vw] mx-auto">
		<a class:active={$page.url.pathname === '/'} href="/">HK</a>
		<a class:active={$page.url.pathname === '/about'} href="/about">About</a>
		<a class:active={$page.url.pathname === '/work'} href="/work">Work</a>
		<a class:active={$page.url.pathname === '/contact'} href="/contact">Contact</a>
	</nav>

	<button class="md:hidden" use:melt={$trigger}>
		<i class="fa-solid fa-bars fa-xl" />
	</button>

	<nav class="flex gap-[2vw] absolute px-8 right-0">
		<a href="https://github.com/Hugos68" target="_blank"><i class="fa-brands fa-github fa-xl" /></a>
		<a href="https://www.linkedin.com/in/hugo-korte-1781a2244/" target="_blank"
			><i class="fa-brands fa-linkedin fa-xl" /></a
		>
	</nav>
</header>

<!-- TODO: FIX DRAWER -->
<div use:melt={$portalled}>
	<div class="fixed inset-0 z-50 bg-black/50" use:melt={$overlay}>
		<aside class="fixed top-0 left-0 h-screen w-[min(300px,80vw))]" use:melt={$content} />
	</div>
</div>

<style>
	.active {
		@apply relative;
	}
	.active::before {
		@apply content-[''] bg-sunset-orange-500 h-1 w-full absolute bottom-0;
		view-transition-name: indicator;
	}
</style>
