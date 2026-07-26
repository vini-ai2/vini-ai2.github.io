const grid = document.getElementById("writing-grid");
const filterBar = document.getElementById("filters");

const types = ["all", "essay", "note"];
const typeLabels = { all: "All", essay: "Essays", note: "Notes" };

function renderFilters() {

    filterBar.innerHTML = types.map(t => `
        <button class="filter-pill ${t === "all" ? "active" : ""}" data-type="${t}">
            ${typeLabels[t]}
        </button>
    `).join("");

    filterBar.querySelectorAll(".filter-pill").forEach(btn => {

        btn.addEventListener("click", () => {

            filterBar.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            renderGrid(btn.dataset.type);

        });

    });

}

function renderGrid(filter = "all") {

    const items = filter === "all" ? writing : writing.filter(w => w.type === filter);

    grid.innerHTML = items.map(w => `
        <div class="card ${w.id.startsWith("placeholder") ? "placeholder" : ""}" data-id="${w.id}">
            <div class="tag">${w.type}${w.date ? " · " + w.date : ""}</div>
            <h3>${w.title}</h3>
            <p>${w.excerpt}</p>
        </div>
    `).join("");

    grid.querySelectorAll(".card").forEach(card => {

        card.addEventListener("click", () => {

            const w = writing.find(x => x.id === card.dataset.id);

            const linksHtml = w.links && w.links.length
                ? makeList("Related", w.links.map(l => `<a class="panel-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`))
                : "";

            openPanel(`
                <h1>${w.title}</h1>
                ${w.body}
                ${linksHtml}
            `);

        });

    });

}

renderFilters();
renderGrid();