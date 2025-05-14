function toggleForms() {
	const login = document.getElementById("loginForm");
	const register = document.getElementById("registerForm");
	login.classList.toggle("hidden");
	register.classList.toggle("hidden");
}

document.getElementById("loginBtn").addEventListener("click", function (e) {
	e.preventDefault();
	const username = document.querySelector(".loginName").value.trim();
	const password = document.querySelector(".loginName").value.trim();

	if (username === "" || password === "") {
		alert("Please enter both username and password");
		return;
	}
});

document
	.getElementById("registerBtn")
	.addEventListener("click", function (event) {
		event.preventDefault();

		
		const username = document.querySelector(".registerName").value.trim();
		const password = document.querySelector(".registerPass").value.trim();
		const confirmPassword = document.querySelector(".registerConfirm").value.trim();
		const errorElement = document.getElementById("passwordError");

		errorElement.textContent = "";

		if (!username || !password || !confirmPassword) {
			alert("Mag fill up ka muna.");
			return;
		}

		if (password !== confirmPassword) {
			errorElement.classList.toggle("active");
			errorElement.textContent = "Passwords do not match.";
			return;
		}

		if (password.length < 8) {
			errorElement.classList.toggle("active");
			errorElement.textContent = "Password must be at least 8 characters.";
			return;
		}

		if (password[0] !== password[0].toUpperCase()) {
			errorElement.classList.toggle("active");
			errorElement.textContent =
				"Password must start with an uppercase letter.";
			return;
		}

		alert("Registration successful!");
		this.reset(); 
		toggleForms(); 
	});
