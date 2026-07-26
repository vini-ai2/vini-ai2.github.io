const vennSvg = document.getElementById("venn");

const vennCircles = document.querySelectorAll(".interactive");

const worldview = {

    cs: {

        title: "Computer Science",

        question: "How can this be built?",

        words: [
            "Systems",
            "Networks",
            "Distributed Computing",
            "Compilers"
        ]

    },

    ai: {

        title: "Artificial Intelligence",

        question: "How can this learn?",

        words: [
            "Representation",
            "Embeddings",
            "Reasoning",
            "Vision"
        ]

    },

    math: {

        title: "Mathematics",

        question: "Why is this true?",

        words: [
            "Graphs",
            "Optimization",
            "Topology",
            "Probability"
        ]

    },

    econ: {

        title: "Economics",

        question: "What incentives emerge?",

        words: [
            "Markets",
            "Mechanism Design",
            "Information",
            "Auctions"
        ]

    }

};
const intersections={

"cs-ai":{

title:"Building Intelligence",

desc:"Where software becomes adaptive.",

topics:[
"Computer Vision",
"Knowledge Graphs",
"Robotics",
"Agentic Systems"
]

},

"cs-math":{

title:"Algorithms",

desc:"Where proofs become programs.",

topics:[
"Graphs",
"Optimization",
"Complexity",
"Discrete Math"
]

},

"ai-math":{

title:"Learning Theory",

desc:"Where intelligence becomes explainable.",

topics:[
"Probability",
"Geometry",
"Optimization",
"Information Theory"
]

},

"cs-econ":{

title:"Distributed Incentives",

desc:"Systems shaped by incentives.",

topics:[
"Distributed Systems",
"Cryptography",
"Mechanism Design",
"Blockchains"
]

},

"ai-econ":{

title:"Decision Making",

desc:"Learning under incentives.",

topics:[
"Reinforcement Learning",
"Markets",
"Auctions",
"Game Theory"
]

},

center:{

title:"The Questions",

desc:"Ideas I keep returning to.",

topics:[
"Representation",
"Complex Systems",
"Intelligence",
"Emergence"
]

}

};


vennCircles.forEach(circle => {

    circle.addEventListener("mouseenter", () => {

        vennCircles.forEach(c => {

            if (c !== circle)
                c.classList.add("fade");

        });

        showWords(circle.id);

    });

    circle.addEventListener("mouseleave", () => {

        vennCircles.forEach(c => c.classList.remove("fade"));

        removeWords();

    });

});

document
    .querySelectorAll(".intersection")
    .forEach(region => {

        region.addEventListener("mouseenter", () => {

            showIntersection(region.id);

        });

    });


function showWords(id) {

    removeWords();

    const data = worldview[id];

    const circle = document.getElementById(id);

    const cx = Number(circle.getAttribute("cx"));
    const cy = Number(circle.getAttribute("cy"));

    vennSvg.appendChild(
        createText(
            data.title,
            cx,
            cy - 55,
            "hover-title"
        )
    );

    vennSvg.appendChild(
        createText(
            data.question,
            cx,
            cy - 25,
            "hover-question"
        )
    );

    data.words.forEach((word, i) => {

        const x = cx + (Math.random() * 40 - 20);

        const y = cy + 25 + (i * 32);

        const text = createText(
            word,
            x,
            y,
            "floating-word"
        );

        text.style.animationDelay = `${i * 0.08}s`;

        vennSvg.appendChild(text);

    });

}


function createText(text, x, y, cls) {

    const t = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );

    t.textContent = text;

    t.setAttribute("x", x);

    t.setAttribute("y", y);

    t.setAttribute("text-anchor", "middle");

    t.classList.add(cls);

    return t;

}


function removeWords() {

    document.querySelectorAll(

        ".hover-title, .hover-question, .floating-word"

    ).forEach(el => el.remove());

}
function showIntersection(id){

removeWords();

const data=intersections[id];

if(!data) return;

const panel=document.getElementById("panel-content");

panel.innerHTML=`

<h1>${data.title}</h1>

<p>${data.desc}</p>

<ul>

${data.topics.map(t=>`<li>${t}</li>`).join("")}

</ul>

`;

}