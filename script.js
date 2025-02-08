function yesClicked() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Yay! 💖 You are my Valentine! 🎉</h1>
            <img src="https://tenor.com/view/happy-birthday-gif-26022558.gif" alt="Celebration">
        </div>
    `;
}

function moveNoButton() {
    let button = document.getElementById("no-btn");
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
