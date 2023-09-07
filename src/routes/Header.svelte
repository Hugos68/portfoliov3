<script>
	import { page } from '$app/stores';
</script>

<header
	class="bg-white text-sunset-orange-500 font-semibold text-lg sticky top-0 p-6 rounded-tl-3xl rounded-bl-md rounded-br-3xl rounded-tr-md flex gap-8"
>
	<nav class="flex gap-[5vw] mx-auto">
		<a class:active={$page.url.pathname === '/'} href="/">HK</a>
		<a class:active={$page.url.pathname === '/about'} href="/about">About</a>
		<a class:active={$page.url.pathname === '/work'} href="/work">Work</a>
		<a class:active={$page.url.pathname === '/contact'} href="/contact">Contact</a>
	</nav>
</header>

<style>
	.active {
		@apply relative;
	}
	.active::before {
		@apply content-[''] bg-sunset-orange-500 h-1 w-full absolute bottom-0;
		view-transition-name: indicator;
	}
</style>
