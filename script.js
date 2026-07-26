const svg = document.getElementById("knowledge-map");
const nodesLayer = document.getElementById("nodes");
const linesLayer = document.getElementById("connections");

const SVG_NS = "http://www.w3.org/2000/svg";

let circles = [];

function drawNodes() {

    knowledge.forEach((node, index) => {

        const group = document.createElementNS(SVG_NS, "g");
        group.classList.add("node-group");

        const circle = document.createElementNS(SVG_NS, "circle");

        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", 7);

        circle.classList.add("node");

        const label = document.createElementNS(SVG_NS, "text");

        label.setAttribute("x", node.x + 16);
        label.setAttribute("y", node.y + 5);

        label.classList.add("label");
        label.textContent = node.title;

        group.appendChild(circle);
        group.appendChild(label);

        nodesLayer.appendChild(group);

        circles.push({
            group,
            circle,
            node
        });

        group.addEventListener("mouseenter", () => {
            drawConnections(index);
        });

        group.addEventListener("mouseleave", () => {
            clearConnections();
        });

        group.addEventListener("click", () => {
            openNodePanel(node);
        });

    });

}

function distance(a, b) {

    return Math.sqrt(
        (a.x - b.x) ** 2 +
        (a.y - b.y) ** 2
    );

}

function drawConnections(index){

    clearConnections();

    const node = knowledge[index];

    node.links.forEach(linkId=>{

        const target = knowledge.find(n=>n.id===linkId);

        if(!target) return;

        const line=document.createElementNS(SVG_NS,"line");

        line.setAttribute("x1",node.x);
        line.setAttribute("y1",node.y);

        line.setAttribute("x2",target.x);
        line.setAttribute("y2",target.y);

        line.classList.add("connection");

        linesLayer.appendChild(line);

    });

}

function clearConnections() {

    linesLayer.innerHTML = "";

}

function openNodePanel(node) {

    openPanel(`
        <h1>${node.title}</h1>

        <p>${node.description}</p>

        ${makeList("Projects", node.projects)}

        ${makeList("Writing", node.writing)}

        ${makeList("Reading", node.reading)}
    `);

}

drawNodes();
const hero=document.getElementById("hero");
const venn=document.getElementById("venn");
const graph=document.getElementById("knowledge-map");
const opening=document.getElementById("opening");

window.addEventListener("scroll",()=>{

    const progress=Math.min(
        window.scrollY/window.innerHeight,
        1
    );

    venn.style.opacity=1-progress;

    venn.style.transform=
        `scale(${1-progress*.12})`;

    graph.style.opacity=progress;

    graph.style.transform=
        `translateY(${80-(progress*80)}px)`;

    const introProgress=Math.min(
        window.scrollY/(window.innerHeight*.4),
        1
    );

    opening.style.opacity=1-introProgress;
    opening.style.pointerEvents=introProgress>=1?"none":"auto";

});