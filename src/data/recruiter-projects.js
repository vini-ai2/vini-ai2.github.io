// Safe Chat is not listed in the current resume, so it is not shown here.
export const projects = [
  {
    id: 'finlitter',
    title: 'Finlitter',
    category: 'economics',
    year: 'In progress',
    blurb: 'An in-progress personal finance platform built by a team of two.',
    description: 'An in-progress personal finance platform. The resume lists a unit-tested toolkit for SIP, EMI, compound-interest, and FD calculations; a 1,000-path Monte Carlo investment simulator with P10, P50, and P90 outputs; and an authentication and encryption layer. The individual contribution split is not yet confirmed.',
    stack: ['Monte Carlo simulation', 'Financial calculators', 'Authentication', 'Encryption'],
    links: [{ label: 'GitHub', url: 'https://github.com/vini-ai2/Financial_Litter' }]
  },
  {
    id: 'gold-nanoparticle-recommender',
    title: 'Optimized Gold Nanoparticle Synthesis for Cancer Treatment',
    category: 'learning',
    year: '',
    blurb: 'A rule engine maps predicted property deviations to fixed synthesis recommendations.',
    description: 'A rule engine scores predicted properties against suitability ranges and maps out-of-range deviations to chemist-approved recommendations. Each recommendation has a one-line mechanistic justification. It runs with a Keras multi-output model. The research manuscript is in preparation.',
    stack: ['Keras', 'Rule-based recommendations'],
    links: [{ label: 'GitHub', url: 'https://github.com/vini-ai2/LLM_Optimized_Synth_AuNP' }]
  },
  {
    id: 'deca-residual-correction',
    title: 'Visual-First Residual Correction for 2D-to-3D Facial Reconstruction (DECA)',
    category: 'geometry',
    year: '',
    blurb: 'Residual correction for expression, jaw-pose, and camera parameters.',
    description: 'Trained a three-layer residual MLP on top of the frozen DECA backbone, generated landmark labels with a FAN pipeline, and added hard-case-weighted sampling after fixing a data-loading bug. The corrected model runs in real time through four webcam inference pipelines.',
    stack: ['PyTorch', 'DECA', 'FAN'],
    links: [{ label: 'GitHub', url: 'https://github.com/vini-ai2/DECA' }]
  }
];
