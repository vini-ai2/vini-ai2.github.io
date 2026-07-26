const panel = document.getElementById("panel");
const panelContent = document.getElementById("panel-content");
const closeBtn = document.getElementById("close");

function makeList(title, items) {

    if (!items || !items.length) return "";

    return `
        <div class="section">

            <h2>${title}</h2>

            <ul>

            ${items.map(item => `
                <li>${item}</li>
            `).join("")}

            </ul>

        </div>
    `;

}

function openPanel(html) {

    panelContent.innerHTML = html;
    panel.classList.add("open");

}

function closePanel() {

    panel.classList.remove("open");

}

closeBtn.addEventListener("click", closePanel);

window.addEventListener("keydown", e => {

    if (e.key === "Escape") {
        closePanel();
    }

});