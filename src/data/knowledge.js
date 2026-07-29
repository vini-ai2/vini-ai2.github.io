// Each node can belong to 1-2 of the four lenses from the venn: cs, ai, math, econ.
// This drives the node's color/halo in the knowledge graph.

export const knowledge = [
  {
    id: 'representation',
    title: 'Representation',
    categories: ['ai', 'cs'],
    description:
      'Every model throws something away. Understanding what is omitted is often more important than what is included.',
    links: ['learning', 'geometry', 'language'],
    projects: ['GraphRAG', 'Knowledge Graphs', 'Topographs'],
    writing: ['Every Map Lies', 'Compression is Representation'],
    reading: ['Gödel, Escher, Bach', 'The Visual Display of Quantitative Information']
  },
  {
    id: 'learning',
    title: 'Learning',
    categories: ['ai'],
    description: 'Learning is the search for useful representations.',
    links: ['representation', 'optimization', 'language'],
    projects: ['LLMs', 'Computer Vision', 'Gold Nanoparticle Prediction'],
    writing: ['Why Models Compress'],
    reading: ['Deep Learning', 'Pattern Recognition']
  },
  {
    id: 'geometry',
    title: 'Geometry',
    categories: ['math', 'cs'],
    description: 'Geometry explains relationships before numbers do.',
    links: ['representation', 'networks'],
    projects: ['Topographs', 'Graph Theory Visualizations'],
    writing: ['Seeing Structure'],
    reading: ['Visual Complex Analysis']
  },
  {
    id: 'language',
    title: 'Language',
    categories: ['ai', 'econ'],
    description: 'Language is a lossy interface between minds.',
    links: ['representation', 'learning', 'economics'],
    projects: ['Text Analytics', 'Scam Detection'],
    writing: ["Language Isn't Thought"],
    reading: ['Metaphors We Live By']
  },
  {
    id: 'networks',
    title: 'Networks',
    categories: ['cs'],
    description: 'Nothing interesting exists in isolation.',
    links: ['geometry', 'robotics'],
    projects: ['Rover Communication', 'Mesh Networking', 'Git over RF'],
    writing: ['Everything is a Graph'],
    reading: ['Computer Networking']
  },
  {
    id: 'robotics',
    title: 'Robotics',
    categories: ['cs', 'math'],
    description: 'Software eventually collides with physics.',
    links: ['networks', 'optimization'],
    projects: ['IRC Rover', 'Autonomous Navigation'],
    writing: ['Software Meets Reality'],
    reading: ['Modern Robotics']
  },
  {
    id: 'optimization',
    title: 'Optimization',
    categories: ['math', 'ai'],
    description: 'Every system optimizes something. The question is whether it should.',
    links: ['learning', 'robotics', 'economics'],
    projects: ['OFI Engine', 'Scheduling', 'Rust'],
    writing: ['Optimization is a Value Judgment'],
    reading: ['Convex Optimization']
  },
  {
    id: 'economics',
    title: 'Economics',
    categories: ['econ'],
    description: 'Markets are distributed information systems.',
    links: ['optimization', 'language'],
    projects: ['Financial Literacy', 'Market Simulator'],
    writing: ['Markets Compress Information'],
    reading: ['The Use of Knowledge in Society']
  }
];

export const lensMeta = {
  cs: { label: 'Computer Science', question: 'How can this be built?', varName: '--c-cs' },
  ai: { label: 'Artificial Intelligence', question: 'How can this learn?', varName: '--c-ai' },
  math: { label: 'Mathematics', question: 'Why is this true?', varName: '--c-math' },
  econ: { label: 'Economics', question: 'What incentives emerge?', varName: '--c-econ' }
};
