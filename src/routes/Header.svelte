<script lang="ts">
    import { page } from '$app/stores';
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";

    const submitTheme: SubmitFunction = ({ action }) => {
        const theme = action.searchParams.get('theme') as 'dark' | 'light';
        document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
        document.documentElement.classList.add(theme === 'dark' ? 'dark' : 'light');
    }
</script>

<header class="text-white sticky top-0 bg-purple-500 m-4 py-4 px-24 rounded-md flex gap-8">
    <nav class="flex gap-8">
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/contact">Contact</a>
    </nav>
    <form class="ml-auto" method="post" use:enhance={submitTheme}>
        {#if $page.data.theme === 'dark'}  
            <button formaction="/?/setTheme&theme=light"><i class="fa-solid fa-sun"></i></button>
        {:else}
            <button formaction="/?/setTheme&theme=dark"><i class="fa-solid fa-moon"></i></button>
        {/if}
    </form>
</header>