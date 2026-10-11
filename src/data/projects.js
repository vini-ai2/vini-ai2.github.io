// Public repository catalogue. Descriptions stay close to the README/source
// evidence; team and maturity notes are shown explicitly where known.
export const projects = [
  {
    id: 'finance-controller',
    title: 'AI Finance Controller',
    category: 'Quantitative Finance & Financial Engineering',
    featured: true,
    status: 'Hackathon project',
    blurb: 'A deterministic bank-to-ledger reconciliation engine with auditable exception handling.',
    description:
      'Reconciles synthetic bank and ledger records using exact and indexed fuzzy matching, then verifies eligible one-to-two settlement groups. An optional LLM pass reviews ambiguous exceptions; the README documents measured results and limitations on the included synthetic batch.',
    stack: ['Python', 'Record linkage', 'Synthetic data', 'LLM review'],
    repo: 'razorpay_buildathon_AI_Finance_Controller',
    mapNode: 'optimization'
  },
  {
    id: 'property-valuation-agent',
    title: 'Property Valuation Agent',
    category: 'Applied Machine Learning & AI',
    featured: true,
    status: 'Hackathon project',
    blurb: 'An OpenEnv task environment for an AI agent performing property valuation.',
    description:
      'A simulated property appraisal task based on the Ames Housing Dataset. The repository describes an agent environment exposed through the OpenEnv step, reset, and state interface.',
    stack: ['Python', 'OpenEnv', 'Ames Housing Dataset', 'Docker'],
    repo: 'openv_hack',
    mapNode: 'learning'
  },
  {
    id: 'gridlock',
    title: 'Gridlock: Parking Intelligence',
    category: 'Data Science & Research',
    featured: true,
    status: 'Hackathon project',
    blurb: 'Spatial and temporal analysis of parking violations to prioritize congestion hotspots.',
    description:
      'Uses Bengaluru parking-violation records, DBSCAN hotspot clustering, temporal features, and a Random Forest feature-importance analysis to rank locations with a Parking-Induced Congestion Risk Index (PICRI). The repository includes analysis code, tables, and a heatmap.',
    stack: ['Python', 'DBSCAN', 'Random Forest', 'Pandas', 'Geospatial analysis'],
    repo: 'Gridlock-Hackathon',
    mapNode: 'optimization'
  },
  {
    id: 'agentic-speech-scam-detection',
    title: 'Agentic Speech-Based Scam Detection',
    category: 'Applied Machine Learning & AI',
    featured: true,
    status: 'Research prototype',
    blurb: 'Combines acoustic cues and ASR-derived meaning for speech scam and misinformation analysis.',
    description:
      'A multi-modal speech and text analysis prototype. Its README describes an agent that combines acoustic risk with semantic risk and provides explainable scoring. The repository includes the agent, tools, reports, and UI; no publication status is claimed here.',
    stack: ['Python', 'Speech processing', 'ASR', 'Agent workflows'],
    repo: 'agentic-speech-based-scam-detection',
    mapNode: 'language'
  },
  {
    id: 'small-language-model-security',
    title: 'Small Language Models for Software Security',
    category: 'Applied Machine Learning & AI',
    status: 'Proof of concept',
    blurb: 'A controlled evaluation of compact local models on vulnerability identification tasks.',
    description:
      'Compares local 3B–4B language models on short Python examples: identifying vulnerability status, CWE, affected line, explanation, and a minimal fix. The README describes a 130-example corpus and a Bandit comparison; it explicitly frames this as a proof of concept, not a benchmark.',
    stack: ['Python', 'Qwen', 'Gemma', 'Phi', 'Ollama', 'Bandit'],
    repo: 'SLM_demo_for_app_sec',
    mapNode: 'learning'
  },
  {
    id: 'medical-drug-chatbot',
    title: 'Medical Drug Recommendation Chatbot',
    category: 'Applied Machine Learning & AI',
    status: 'Hackathon prototype',
    blurb: 'A Streamlit interface that requests drug suggestions from a hosted language model.',
    description:
      'The repository source builds prompts from a diagnosis, optional patient information, and follow-up questions, then calls Groq’s Llama 3.1 8B Instant model. Presented as a hackathon prototype; the source does not establish clinical validation.',
    stack: ['Python', 'Streamlit', 'Groq API', 'Llama 3.1'],
    repo: 'Hackathon',
    mapNode: 'language'
  },
  {
    id: 'git-smart-http-deployment',
    title: 'Git Smart HTTP Deployment Server',
    category: 'Systems & Software Engineering',
    blurb: 'Installation and verification scripts for a self-hosted Git-over-HTTP server.',
    description:
      'Automates setup for Git Smart HTTP using Nginx, fcgiwrap, and systemd, with a verification script and a post-receive deployment hook. The hook checks out changes and starts an Arduino CLI Teensy build for the configured deployment repository.',
    stack: ['Bash', 'Git Smart HTTP', 'Nginx', 'fcgiwrap', 'systemd', 'Arduino CLI'],
    repo: 'git-server-dummy',
    mapNode: 'networks'
  },
  {
    id: 'computer-vision-labs',
    title: 'Computer Vision Lab Experiments',
    category: 'Computer Vision',
    status: 'Coursework',
    blurb: 'Image filtering, segmentation, corner detection, and Haar-cascade face detection exercises.',
    description:
      'A set of image-processing labs with Python source for spatial filters and edge detection, region growing and splitting, Harris corner detection, and Viola–Jones face detection. The repository includes input and generated output images.',
    stack: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    repo: 'Computer-Vision-Amateur',
    mapNode: 'geometry'
  },
  {
    id: 'psychoactive-drug-identification',
    title: 'The Effects and Classification of Psychoactive Substances',
    category: 'Data Science & Research',
    status: 'Published paper · CSITSS 2025',
    blurb: 'A chemical-language modeling project with curated datasets and embedding experiments.',
    description:
      'The public repository contains cleaned psychoactive-drug datasets, embedding artifacts, and ChemBERT fine-tuning and transformer experiment directories. The repository contents establish the research work; publication details are not stated on this page.',
    stack: ['Python', 'ChemBERT', 'Embeddings', 'Transformer fine-tuning'],
    repo: 'LLM-based-identification-of-pyschoactive-drugs',
    mapNode: 'learning'
  },
  {
    id: 'safe-chat',
    title: 'Safe Chat: MiniQUIC & Hybrid Messaging',
    category: 'Systems & Software Engineering',
    blurb: 'A teaching-grade UDP transport and encrypted messaging system with a browser dashboard.',
    description:
      'Implements a QUIC-inspired UDP transport with streams, acknowledgements, retransmission, and flow control. The README also documents X3DH and Double Ratchet sessions, a hybrid classical/post-quantum key exchange mode, and a WebSocket dashboard.',
    stack: ['Go', 'UDP', 'X25519', 'KEM hybrid', 'WebSockets'],
    repo: 'Safe-Chat_QUIC_HTTP3',
    mapNode: 'networks'
  },
  {
    id: 'financial-litter',
    title: 'Financial Litter',
    category: 'Quantitative Finance & Financial Engineering',
    featured: true,
    status: 'In progress · team project',
    blurb: 'A personal finance platform with tested calculators, a portfolio simulator, and a security layer.',
    description:
      'The resume describes an in-progress platform with unit-tested SIP, EMI, compound-interest, and FD calculations; a 1,000-path Monte Carlo simulator for equity, debt, and gold allocations with P10/P50/P90 outcomes; and Argon2id, JWT refresh-token rotation and revocation, rate-limited login, and AES-256-GCM encryption with per-user HKDF-derived keys. The project is described in existing portfolio data as a two-person team effort; individual contribution boundaries are not specified.',
    stack: ['TypeScript', 'Prisma', 'Monte Carlo simulation', 'Argon2id', 'JWT', 'AES-256-GCM'],
    repo: 'Financial_Litter',
    mapNode: 'economics'
  },
  {
    id: 'gold-nanoparticle-synthesis-recommender',
    title: 'Optimized Gold Nanoparticle Synthesis for Cancer Treatment',
    category: 'Applied Machine Learning & AI',
    status: 'Research extension · fork · manuscript in preparation',
    blurb: 'A chemist-approved rule engine translates predicted property deviations into synthesis recommendations.',
    description:
      'The resume describes a rule engine that checks predicted nanoparticle size, zeta potential, drug loading, targeting, and cytotoxicity against suitability ranges, then maps deviations to fixed, chemist-approved fixes with mechanistic explanations. It runs on a Keras multi-output model. This is presented as the resume-described contribution in a forked repository; the manuscript is in preparation for journal submission.',
    stack: ['Keras', 'Multi-output models', 'Rule engine', 'Materials science'],
    repo: 'LLM_Optimized_Synth_AuNP',
    mapNode: 'learning'
  },
  {
    id: 'deca-residual-correction',
    title: 'Visual-First Residual Correction for 2D-to-3D Facial Reconstruction',
    category: 'Computer Vision',
    status: 'Research extension · fork',
    blurb: 'A residual MLP corrects expression, jaw-pose, and camera parameters over a frozen DECA backbone.',
    description:
      'The resume describes training a three-layer residual MLP over the frozen DECA backbone, generating landmark labels with a FAN pipeline, and adding hard-case-weighted sampling after fixing a data-loading issue. The corrected model is described as running in real time through four webcam inference pipelines. This entry describes that extension work within a fork of the DECA repository.',
    stack: ['PyTorch', 'DECA', 'FAN', 'Computer vision'],
    repo: 'DECA',
    mapNode: 'geometry'
  },
  {
    id: 'dl-fraud-classification',
    title: 'Credit Card Fraud Classification from Scratch',
    category: 'Coursework & Technical Experiments',
    status: 'Coursework',
    blurb: 'Perceptron and MLP implementations with experiments on class imbalance.',
    description:
      'A deep-learning assignment using the credit-card fraud dataset. Includes perceptron and multilayer perceptron implementations, threshold comparisons, and experiments combining stratification with class weights. The README discusses precision and recall trade-offs on an imbalanced dataset.',
    stack: ['Python', 'NumPy', 'Perceptron', 'MLP', 'Class weighting'],
    repo: 'DL_Sem4',
    mapNode: 'learning'
  },
  {
    id: 'dimensionality-reduction',
    title: 'Dimensionality Reduction Walkthrough',
    category: 'Coursework & Technical Experiments',
    status: 'Technical experiment',
    blurb: 'A notebook walkthrough of normalization, covariance, PCA, and explained variance.',
    description:
      'A Jupyter notebook documenting a dimensionality-reduction workflow, including manual PCA concepts and comparison with a scikit-learn PCA result.',
    stack: ['Python', 'Jupyter', 'PCA', 'scikit-learn'],
    repo: 'Dimensionality-Reduction',
    mapNode: 'geometry'
  },
  {
    id: 'rl-environment-experiments',
    title: 'Reinforcement Learning & Environment Experiments',
    category: 'Coursework & Technical Experiments',
    status: 'Experiments',
    blurb: 'A from-scratch CartPole Q-network and a small API-served guessing environment.',
    description:
      'The repository contains a NumPy Q-network training loop for Gymnasium CartPole and a separate number-guessing environment with reset, step, and state methods exposed through FastAPI. Grouped here as experiments rather than polished standalone products.',
    stack: ['Python', 'NumPy', 'Gymnasium', 'FastAPI', 'Reinforcement learning'],
    repo: 'gibber',
    mapNode: 'learning'
  },
  {
    id: 'tensor-tonic-solutions',
    title: 'TensorTonic ML Solutions',
    category: 'Coursework & Technical Experiments',
    status: 'Practice implementations',
    blurb: 'Verified implementations of core ML and numerical computing building blocks.',
    description:
      'A collection of solutions covering activations, losses, initialization, normalization, matrix operations, distances, and a vanilla RNN step. The README links each implementation to its TensorTonic problem.',
    stack: ['Python', 'NumPy', 'Machine learning fundamentals'],
    repo: 'TensorTonic-Solutions',
    mapNode: 'learning'
  },
  {
    id: 'cs229-logistic-regression',
    title: 'CS229: Logistic Regression with Newton’s Method',
    category: 'Coursework & Technical Experiments',
    status: 'Coursework',
    blurb: 'A from-scratch logistic regression exercise using Newton’s method.',
    description:
      'The repository includes a Python script explicitly labeled as logistic regression trained with Newton’s method, alongside a source directory and data. This entry presents it as course work rather than a standalone research project.',
    stack: ['Python', 'NumPy', 'Logistic regression', 'Newton’s method'],
    repo: 'cs229',
    mapNode: 'learning'
  },
  {
    id: 'codeforces-solutions',
    title: 'Codeforces C++ Solutions',
    category: 'Coursework & Technical Experiments',
    status: 'Practice repository',
    blurb: 'A large collection of C++ solutions with notes for competitive-programming problems.',
    description:
      'The repository contains roughly 800 problem directories and is described as Codeforces solutions written in C++ with a note for each question. Listed in the coursework and experiments category so it remains accessible without taking priority over complete project work.',
    stack: ['C++', 'Algorithms', 'Data structures'],
    repo: 'competitive-programming'
  },
  {
    id: 'technova-endsem',
    title: 'TechNova Event Website',
    category: 'Coursework & Technical Experiments',
    status: 'Coursework · team project',
    blurb: 'A multi-page event website built by Team 12.',
    description:
      'The repository contains HTML, CSS, JavaScript, and image assets for an event site with event and feedback pages. Its README names Manasvini Kandikonda alongside Chirayu Nilesh Chaudhari and Janya Billa as Team 12; this is collaborative work.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repo: 'UID-TechNova2026-EndSem'
  },
  {
    id: 'portfolio-website',
    title: 'This Portfolio Website',
    category: 'Web & Backend Development',
    status: 'Personal project',
    blurb: 'An Astro portfolio with a knowledge graph and searchable project catalogue.',
    description:
      'A static Astro site with a canvas-based knowledge graph, light and dark themes, and a data-driven project catalogue. This page reads project metadata from a JavaScript module and supports category filters and text search.',
    stack: ['Astro', 'JavaScript', 'CSS'],
    repo: 'vini-ai2.github.io',
    mapNode: 'representation'
  }
];

export const projectCategories = [...new Set(projects.map((project) => project.category))];

export function repositoryUrl(project) {
  return `https://github.com/vini-ai2/${project.repo}`;
}
