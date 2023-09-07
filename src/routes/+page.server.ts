import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    setTheme: async ({ url, cookies }) => {
        const theme = url.searchParams.get('theme');
        if (theme && (theme === 'dark' || theme === 'light')) cookies.set('theme', theme, { path: '/', maxAge:  60 * 60 * 24 * 365 });
        else return fail(400, { message: 'Invalid or missing theme' });
        return { succes: true };
    }   
}