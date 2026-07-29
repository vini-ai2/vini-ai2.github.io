// category should match a knowledge-map node id so a project can later
// cross-link back to the map (representation, learning, geometry, language,
// networks, robotics, optimization, economics).

export const projects = [
  {
    id: 'gridlock',
    title: 'Gridlock',
    category: 'optimization',
    year: '2026',
    blurb: 'Congestion-aware parking enforcement, built at a hackathon.',
    description:
      'An AI-driven parking intelligence system for Bengaluru that flags where enforcement should focus. Combines DBSCAN clustering and temporal analysis for feature engineering, feeding a Random Forest model with a custom PICRI risk-scoring system.',
    stack: ['DBSCAN', 'Random Forest', 'Feature Engineering'],
    links: []
  },
  {
    id: 'rag-medical',
    title: 'Medical Records RAG',
    category: 'language',
    year: '2025–26',
    blurb: 'Retrieval-augmented Q&A over patient medical records, built during an internship at 314e.',
    description:
      'A retrieval-augmented generation system for querying patient medical records, with semantic chunk retrieval and source-page highlighting for explainability. Used transformer-based embeddings and vector search to reduce hallucinations.',
    stack: ['RAG', 'Vector Search', 'Transformers'],
    links: []
  },
  {
    id: 'psychoactive-drug-prediction',
    title: 'Psychoactive Drug Prediction System',
    category: 'learning',
    year: '2025',
    blurb: 'Fusion ML framework predicting behavioral effects of chemical compounds.',
    description:
      'A fusion machine learning framework combining chemical descriptors and behavioral data. Regression models predict Impulsivity and Sensation Seeking scores, feeding a classification pipeline that distinguishes psychoactive from non-psychoactive substances. Published as a paper at CSITSS 2025.',
    stack: ['Regression', 'Classification', 'Feature Fusion'],
    links: [{ label: 'GitHub', url: 'https://github.com/vini-ai2' }]
  },
  {
    id: 'facial-emotion-detection',
    title: 'Facial Emotion Detection: ML vs DL',
    category: 'learning',
    year: '2025',
    blurb: 'Classical ML vs deep learning face-off on the KDEF emotion dataset.',
    description:
      'A comparison of classical ML and deep learning models for facial emotion recognition across 7 emotions on the KDEF dataset — HOG, LBP, logistic regression, SVM, and Random Forest against ConvNeXt-Tiny, ResNet50, EfficientNet, and Vision Transformer. Vision Transformers came out on top, reaching up to 95% accuracy.',
    stack: ['ConvNeXt', 'ResNet50', 'ViT', 'HOG/LBP'],
    links: [{ label: 'GitHub', url: 'https://github.com/vini-ai2' }]
  },
  {
    id: 'gold-nanoparticle-synthesis',
    title: 'LLM-Optimized Gold Nanoparticle Synthesis',
    category: 'learning',
    year: '2025',
    blurb: 'LLM-assisted synthesis condition search for cancer-treatment nanoparticles.',
    description:
      'A custom dataset of 20,000 nanoparticles and 26 features, built using pre-trained transformers, used to surface optimal synthesis conditions and review compatibility for gold nanoparticles in cancer treatment.',
    stack: ['LLMs', 'Synthetic Data', 'Materials ML'],
    links: [{ label: 'GitHub', url: 'https://github.com/vini-ai2' }]
  },
  {
    id: 'rc-car-vision',
    title: 'Remote Control Car Vision & Control System',
    category: 'robotics',
    year: '2025',
    blurb: 'A vision-guided RC car with obstacle detection and shortest-path tracking.',
    description:
      'A remote-controlled car with speed control, live camera feed, Bluetooth modules, and obstacle detection, using computer-vision-based shortest-path finding and tracking. Compared contour-based tracking against Hough-transform-based tracking in a companion paper at WCONF 2025.',
    stack: ['OpenCV', 'Bluetooth', 'Path Planning'],
    links: [{ label: 'GitHub', url: 'https://github.com/vini-ai2' }]
  },
  {
    id: 'safe-chat',
    title: 'Safe Chat',
    category: 'networks',
    year: '2025',
    blurb: 'A QUIC-based chat system with classical and quantum encryption.',
    description:
      'A lightweight chat system built over HTTP/3 (QUIC), layering end-to-end classical and quantum encryption on top.',
    stack: ['QUIC', 'HTTP/3', 'Encryption'],
    links: [{ label: 'GitHub', url: 'https://github.com/vini-ai2' }]
  },
  {
    id: 'drug-recommendation-chatbot',
    title: 'Medical Drug Recommendation Chatbot',
    category: 'language',
    year: '2024',
    blurb: 'A LLaMA-3.1-powered chatbot for medical drug recommendations.',
    description:
      'A chatbot built on LLaMA-3.1 for medical drug recommendations, built during a hackathon.',
    stack: ['LLaMA-3.1', 'Chatbot'],
    links: [{ label: 'GitHub', url: 'https://github.com/vini-ai2' }]
  }
];
