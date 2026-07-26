const grid = document.getElementById("project-grid");
const filterBar = document.getElementById("filters");

const categories = ["all", ...new Set(projects.map(p => p.category))];

function renderFilters() {

    filterBar.innerHTML = categories.map(c => `
        <button class="filter-pill ${c === "all" ? "active" : ""}" data-cat="${c}">
            ${c === "all" ? "All" : c}
        </button>
    `).join("");

    filterBar.querySelectorAll(".filter-pill").forEach(btn => {

        btn.addEventListener("click", () => {

            filterBar.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            renderGrid(btn.dataset.cat);

        });

    });

}

function renderGrid(filter = "all") {

    const items = filter === "all" ? projects : projects.filter(p => p.category === filter);

    grid.innerHTML = items.map(p => `
        <div class="card ${p.id.startsWith("placeholder") ? "placeholder" : ""}" data-id="${p.id}">
            <div class="tag">${p.category}${p.year ? " · " + p.year : ""}</div>
            <h3>${p.title}</h3>
            <p>${p.blurb}</p>
        </div>
    `).join("");

    grid.querySelectorAll(".card").forEach(card => {

        card.addEventListener("click", () => {

            const p = projects.find(x => x.id === card.dataset.id);

            const stackHtml = p.stack && p.stack.length
                ? `<div class="stack-row">${p.stack.map(s => `<span class="stack-pill">${s}</span>`).join("")}</div>`
                : "";

            const linksHtml = p.links && p.links.length
                ? makeList("Links", p.links.map(l => `<a class="panel-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`))
                : "";

            openPanel(`
                <h1>${p.title}</h1>
                <p>${p.description}</p>
                ${stackHtml}
                ${linksHtml}
            `);

        });

    });

}

renderFilters();
renderGrid();