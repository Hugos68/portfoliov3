<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	const {
		elements: { content, trigger },
		states: { open }
	} = createCollapsible();

	beforeNavigate(() => open.set(false));
</script>

<div class="fixed top-0 left-0 w-full flex justify-center">
	<header
		class="relative w-full m-4 md:mx-16 lg:mx-32 xl:mx-48 bg-white text-sunset-orange-500 font-semibold text-lg p-6 px-8 rounded-tl-3xl rounded-bl-md rounded-br-3xl rounded-tr-md"
	>
		<div class="flex gap-8">
			<nav class="hidden md:flex gap-[5vw] mx-auto">
				<a
					class="hover:opacity-75 transition-opacity"
					class:active={$page.url.pathname === '/'}
					href="/">HK</a
				>
				<a
					class="hover:opacity-75 transition-opacity"
					class:active={$page.url.pathname === '/about'}
					href="/about">About</a
				>
				<a
					class="hover:opacity-75 transition-opacity"
					class:active={$page.url.pathname === '/work'}
					href="/work">Work</a
				>
				<a
					class="hover:opacity-75 transition-opacity"
					class:active={$page.url.pathname === '/contact'}
					href="/contact">Contact</a
				>
			</nav>

			<button class="hover:opacity-75 transition-opacity md:hidden" use:melt={$trigger}>
				<i class="fa-solid fa-bars fa-xl" />
			</button>

			<nav class="flex gap-4 lg:gap-8 absolute px-8 right-0">
				<a
					class="hover:opacity-75 transition-opacity"
					href="https://github.com/Hugos68"
					target="_blank"><i class="fa-brands fa-github fa-xl" /></a
				>
				<a
					class="hover:opacity-75 transition-opacity"
					href="https://www.linkedin.com/in/hugo-korte-1781a2244/"
					target="_blank"><i class="fa-brands fa-linkedin fa-xl" /></a
				>
			</nav>
		</div>

		{#if $open}
			<nav
				class="flex justify-evenly mx-auto mt-4 md:hidden"
				use:melt={$content}
				in:slide={{ duration: 250 }}
				out:slide={{ duration: 100 }}
			>
				<a
					class="hover:opacity-75 transition-opacity"
					class:active={$page.url.pathname === '/'}
					href="/">HK</a
				>
				<a
					class="hover:opacity-75 transition-opacity"
					class:active={$page.url.pathname === '/about'}
					href="/about">About</a
				>
				<a
					class="hover:opacity-75 transition-opacity"
					class:active={$page.url.pathname === '/work'}
					href="/work">Work</a
				>
				<a
					class="hover:opacity-75 transition-opacity"
					class:active={$page.url.pathname === '/contact'}
					href="/contact">Contact</a
				>
			</nav>
		{/if}
	</header>
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
