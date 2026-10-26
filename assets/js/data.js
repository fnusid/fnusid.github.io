/* ============================================================
   SITE CONTENT — edit this file to update the website.
   Every page reads from here; no build step needed.
   ============================================================ */
window.SITE = {
  name: "Sidharth",
  email: "sidcs@umich.edu",

  /* ---- News (newest first). type: paper | work | edu | talk | travel. `html` may contain links. ---- */
  news: [
    { type: "travel", date: "Oct 2026", html: "I'll be in Boston from Oct 27–31 for <a href='https://dcase.community/workshop2026/'><strong>DCASE 2026</strong></a> and <a href='https://www.saneworkshop.org/sane2026/'><strong>SANE 2026</strong></a>. I'll be presenting our poster <a href='https://fnusid.github.io/unmixing-the-crowd-demo/'><em>Mixture-Derived Speaker Embeddings</em></a> at SANE (Poster Session 1, poster AM-35). If you work on speech or audio, I'd love to meet, so come say hi or <a href='mailto:sidcs@umich.edu'>drop me a note</a>!" },
    { type: "paper", date: "Oct 2026", html: "Listening demo is up for <a href='https://fnusid.github.io/unmixing-the-crowd-demo/'><em>Mixture-Derived Speaker Embeddings: Can They Replace Enrollment in Pre-trained Target Speech Extractors?</em></a> (SANE 2026). Paper coming soon." },
    { type: "work", date: "Jun 2026", html: "Started a summer research internship at <strong>Bose Research</strong> on open-vocabulary, queryable sound event localization." },
    { type: "paper", date: "Apr 2026", html: "<a href='https://arxiv.org/abs/2604.03219'><em>Unmixing the Crowd</em></a> is out as an arXiv preprint." },
    { type: "paper", date: "Apr 2026", html: "<a href='https://dl.acm.org/doi/10.1145/3772363.3799034'><em>Sona</em></a>, real-time multi-target sound attenuation for noise sensitivity, appears at CHI 2026 Extended Abstracts." },
    { type: "edu", date: "Aug 2025", html: "Started my PhD in Computer Science &amp; Engineering at the <strong>University of Michigan</strong>." },
    { type: "paper", date: "May 2025", html: "<a href='https://doi.org/10.21437/Interspeech.2025-19'><em>aTENNuate</em></a> accepted at <strong>Interspeech 2025</strong>." },
    { type: "talk", date: "Mar 2025", html: "Presented <em>PainDECOG</em> at the AAAI 2025 Workshop on Health Intelligence (W3PHIAI), Philadelphia." }
  ],

  /* ---- Publications ----
     area: speech | hci | neuro   selected: shown on the homepage
     thumb: optional image path, e.g. "assets/img/thumbs/unmixing.png" */
  publications: [
    {
      thumb: "assets/img/thumbs/mixture-embeddings.jpg", year: 2026, area: ["speech"], selected: true,
      title: "Mixture-Derived Speaker Embeddings: Can They Replace Enrollment in Pre-trained Target Speech Extractors?",
      authors: "<strong>FNU Sidharth</strong>, Hao-Wen Dong, Dhruv Jain",
      venue: "SANE 2026", status: "Paper coming soon",
      summary: "A focused reframing of our Unmixing the Crowd work around one practical question: can speaker embeddings taken straight from the mixture stand in for an enrollment clip in a frozen, pre-trained target speech extractor? Across 3,000 noisy two-speaker mixtures they reach 10.8 dB SI-SDRi on average, compared with 6.8 dB for diarize-then-enroll.",
      links: { Demo: "https://fnusid.github.io/unmixing-the-crowd-demo/" },
      related: {
        label: "Builds on",
        title: "Unmixing the Crowd: Learning Persistent Speaker Representations from Mixture-Derived Multi-Speaker Embeddings",
        authors: "<strong>FNU Sidharth</strong>, Meysam Asgari, Hao-Wen Dong, Dhruv Jain",
        venue: "arXiv preprint, 2026",
        links: { arXiv: "https://arxiv.org/abs/2604.03219", Code: "https://github.com/fnusid/wavlm_asp" }
      }
    },
    {
      thumb: "assets/img/thumbs/sona.jpg", year: 2026, area: ["hci", "speech"], selected: true,
      title: "Sona: Real-Time Multi-Target Sound Attenuation for Noise Sensitivity",
      authors: "Jeremy Zhengqi Huang, Emani Hicks, <strong>Sidharth</strong>, Gillian R. Hayes, Dhruv Jain",
      venue: "CHI 2026 Extended Abstracts (CHI EA)",
      summary: "A mobile system for personalized, real-time soundscape mediation: it turns down several overlapping, user-chosen sounds at adjustable strength while keeping the rest of the soundscape.",
      links: { Paper: "https://dl.acm.org/doi/10.1145/3772363.3799034", arXiv: "https://arxiv.org/abs/2604.00447", Project: "https://zjhuang2.github.io/projects/sona/", Video: "https://www.youtube.com/watch?v=9btBaOAkGEg" }
    },
    {
      thumb: "assets/img/thumbs/atennuate.svg", year: 2025, area: ["speech"], selected: true,
      title: "aTENNuate: Optimized Real-time Speech Enhancement with Deep SSMs on Raw Audio",
      authors: "Yan Ru Pei, Ritik Shrivastava, <strong>FNU Sidharth</strong>",
      venue: "Interspeech 2025",
      summary: "A deep state-space autoencoder that enhances raw waveforms in real time: 3.27 PESQ on VoiceBank-DEMAND with only 0.84M parameters.",
      links: { Paper: "https://doi.org/10.21437/Interspeech.2025-19", arXiv: "https://arxiv.org/abs/2409.03377" }
    },
    {
      thumb: "assets/img/thumbs/paindecog.svg", year: 2025, area: ["neuro"], selected: true,
      title: "PainDECOG: Machine Learning-Based Identification of Pain Biomarkers from sEEG Signals",
      authors: "<strong>Sidharth</strong>, Vishwas Sathish, Shweta Bansal, Samantha Sun, Timmy Pham, Kurt Weaver, Rajesh P. N. Rao, Jeffrey Herron",
      venue: "AAAI 2025 Workshop on Health Intelligence (W3PHIAI)",
      summary: "Identifies neural biomarkers of acute pain from intracranial EEG using spectral power and coherence features.",
      links: { arXiv: "https://arxiv.org/abs/2502.10621" }
    },
    {
      year: 2023, area: ["speech"],
      title: "The DISPLACE Challenge 2023: DIarization of SPeaker and LAnguage in Conversational Environments",
      authors: "Shikha Baghel, Shreyas Ramoji, <strong>Sidharth</strong>, et al.",
      venue: "Interspeech 2023",
      links: { Paper: "https://doi.org/10.21437/Interspeech.2023-2367" }
    },
    {
      year: 2023, area: ["neuro"],
      title: "Emotion Detection from EEG using Transfer Learning",
      authors: "<strong>Sidharth</strong>, et al.",
      venue: "IEEE EMBC 2023, Sydney",
      links: { Paper: "https://doi.org/10.1109/EMBC40787.2023.10340389" }
    },
    {
      year: 2023, area: ["neuro"],
      title: "CSP-LSTM Based Emotion Recognition from EEG Signals",
      authors: "Jerrin Thomas Panachakel, H. Ranjana, <strong>Sidharth</strong>, et al.",
      venue: "IEEE MetroXRAINE 2023",
      links: { Paper: "https://doi.org/10.1109/MetroXRAINE58569.2023.10405666" }
    },
    {
      year: 2023, area: ["neuro"],
      title: "EEG-based Emotion Classification: A Theoretical Perusal of Deep Learning Methods",
      authors: "K. Sana Parveen, Jerrin Thomas Panachakel, H. Ranjana, <strong>Sidharth</strong>, et al.",
      venue: "IEEE INOCON 2023",
      links: { Paper: "https://doi.org/10.1109/INOCON57975.2023.10101002" }
    }
  ],

  /* ---- Experience & education ---- */
  industry: [
    { org: "Bose Research", role: "Research Intern, Spatial Audio / Machine Learning", dates: "Jun – Aug 2026", logo: "assets/img/logos/bose.png" },
    { org: "Skyworks Solutions", role: "Research Intern", dates: "May – Aug 2025", logo: "assets/img/logos/skyworks.png" },
    { org: "BrainChip Research", role: "Research Intern", dates: "Jun 2024 – Mar 2025", logo: "assets/img/logos/brainchip.png" }
  ],
  education: [
    { org: "University of Michigan", role: "PhD, Computer Science & Engineering · Soundability Lab", note: "Advisor: Dhruv Jain · Collaborator: Hao-Wen Dong", dates: "2025 – ongoing", logo: "assets/img/logos/umich.png", fill: true },
    { org: "University of Washington", role: "MS, Electrical Engineering", note: "Thesis: Decoding Pain: Statistical Identification of Biomarkers from Electrophysiological Signals", dates: "2023 – 2025", logo: "assets/img/logos/uw.png", fill: true },
    { org: "College of Engineering Trivandrum", role: "B.Tech, Electronics & Instrumentation · minor in Mathematics", note: "Thesis: Emotion Detection from EEG using Transfer Learning", dates: "2019 – 2023", logo: "assets/img/logos/cet.png" }
  ],

  talks: [
    { title: "Decoding Pain: Statistical Identification of Biomarkers from Electrophysiological Signals", meta: "AAAI 2025 · W3PHIAI Workshop · Philadelphia · Mar 2025" },
    { title: "Emotion Detection from EEG using Transfer Learning", meta: "IEEE EMBC 2023 · Sydney · Jul 2023" }
  ]
};
