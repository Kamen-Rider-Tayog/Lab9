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
	const storedUsername = localStorage.getItem("registeredUsername");
	const storedPassword = localStorage.getItem("registeredPassword");

	if (username === "" || password === "") {
		alert("Fill up muna ngani.");
		return;
	}

	if (username != storedUsername && password != storedPassword) {
		alert("Bano mo naman, nakalimutan mo account mo.");
	} else {
		window.location.href = "website.html";
	}
});

document
	.getElementById("registerBtn")
	.addEventListener("click", function (event) {
		event.preventDefault();

		const username = document.querySelector(".registerName").value.trim();
		const password = document.querySelector(".registerPass").value.trim();
		const confirmPassword = document
			.querySelector(".registerConfirm")
			.value.trim();
		const errorElement = document.getElementById("passwordError");

		errorElement.textContent = "";
		const passwordPattern = /^[A-Z]/;

		if (username === "" || password === "" || confirmPassword === "") {
			alert("Mag fill up ka muna.");
			return;
		}

		if (password !== confirmPassword) {
			alert("Hindi magkatulad, ayusin mo pag input.");
			return;
		}

		if (password.length < 8) {
			errorElement.classList.toggle("active");
			errorElement.textContent = "Napaka ikli naman ng password mo.";
			return;
		}

		if (!passwordPattern.test(password)) {
			errorElement.classList.toggle("active");
			errorElement.textContent = "MALAKING TITIK NGA MUNA.";
			return;
		}

		localStorage.setItem("registeredUsername", username);
		localStorage.setItem("registeredPassword", password);

		alert("Registration successful!");
		toggleForms();
	});
