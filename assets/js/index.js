const counter = document.querySelector(".counter-number");

async function updateCounter() {
    const response = await fetch("https://nzammtagbxcqwalelx4cdu2bfq0cuohj.lambda-url.ap-south-1.on.aws/");
    const data = await response.json();
    counter.innerHTML = `Views: ${data.views}`;
}

updateCounter();
