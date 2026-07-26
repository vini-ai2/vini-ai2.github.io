// Each project can tag "category" with a knowledge-map node id
// (representation, learning, geometry, language, networks, robotics,
// optimization, economics) so it can later cross-link back to the map.
// Replace the placeholder entries below with your real projects —
// keep the same shape (id, title, category, blurb, description, stack, links).

const projects = [

    {
        id: "gridlock",
        title: "Gridlock",
        category: "optimization",
        year: "2026",
        blurb: "Congestion-aware parking enforcement, built at a hackathon.",
        description:
            "An AI-driven parking intelligence system that flags where enforcement " +
            "should focus. Pulls together DBSCAN clustering and temporal analysis " +
            "for feature engineering, feeding a Random Forest model with a custom " +
            "PICRI scoring system.",
        stack: ["DBSCAN", "Random Forest", "Feature Engineering"],
        links: []
    },

    {
        id: "placeholder-1",
        title: "PLACEHOLDER — replace me",
        category: "representation",
        year: "",
        blurb: "One line: what it is, in plain terms.",
        description:
            "Two or three sentences: the problem, your approach, and what you'd " +
            "do differently now. This is a template card — delete once real " +
            "projects are in.",
        stack: ["tag one", "tag two"],
        links: []
    }

];