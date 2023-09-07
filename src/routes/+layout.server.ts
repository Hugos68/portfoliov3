export async function load({ cookies }) {
    return {
        theme: cookies.get('theme') as 'dark' | 'light'
    }
}