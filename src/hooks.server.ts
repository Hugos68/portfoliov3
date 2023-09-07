import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const handleTheme = (async ({ event, resolve }) => {

	const newTheme = event.url.searchParams.get("theme");
	const cookieTheme = event.cookies.get("theme");

    let theme: 'dark' | 'light';
	if (newTheme && (newTheme === 'dark' || newTheme === 'light')) theme = newTheme;
    else if (cookieTheme && (cookieTheme === 'dark' || cookieTheme === 'light')) theme = cookieTheme;
    else theme = 'dark'; // Default theme

    return await resolve(event, {
        transformPageChunk: ({ html }) =>
            html.replace('%theme%', theme),
    });
}) satisfies Handle;


export const handle = sequence(handleTheme);