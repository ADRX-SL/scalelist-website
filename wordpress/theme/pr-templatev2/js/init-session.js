document.addEventListener('DOMContentLoaded', async () => {
	async function authSession() {
		const res = await fetch('https://stage.scalelist.com/api/auth/session', {
			credentials: 'include',
		});
		const json = await res.json();
		localStorage.setItem('wp-user', JSON.stringify(json));
		window.user = json;

		return json;
	}
	const user = await authSession();

	if(typeof user === 'object' && !Array.isArray(user) && 'user' in user){
		const authButton = document.querySelector('#auth-button > span > span:nth-child(2)');

		if(authButton){
			authButton.innerHTML = "My Account";
		}
	}
});