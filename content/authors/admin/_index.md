---
# Display name
title: Sidharth

# Name pronunciation (optional)
name_pronunciation: ''

# Full name (for SEO)
first_name: Sidharth
last_name: ''

# Status emoji
status:
  icon: 🎧

# Is this the primary user of the site?
superuser: true

# Highlight the author in author lists? (true/false)
highlight_name: true

# Role/position/tagline
role: Speech and Audio AI + HCI Researcher

# Organizations/Affiliations to display in Biography blox
organizations:
  - name: Soundability Lab, Computer Science and Engineering, University of Michigan, Ann Arbor
    url: https://soundability.eecs.umich.edu/

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles:
  - icon: at-symbol
    url: 'mailto:sidcs@umich.edu'
    label: E-mail Me
  - icon: brands/github
    url: https://github.com/fnusid
  - icon: brands/linkedin
    url: https://www.linkedin.com/in/sidharth172901
  - icon: academicons/google-scholar
    url: https://scholar.google.com/citations?user=XjJ2oQcAAAAJ&hl=en&oi=ao
  - icon: academicons/orcid
    url: https://orcid.org/0000-0002-0351-9401

interests:
  - Artificial Intelligence
  - Speech and Audio Processing
  - HCI

education:
  - area: PhD, Computer Science
    institution: University of Michigan, Ann Arbor
    date_start: 2025-08-25
    date_end: 2039-05-06
    summary: |
      PhD student at [Soundability Lab](https://accessibility.eecs.umich.edu/) advised by [Prof Dhruv Jain](https://web.eecs.umich.edu/~profdj/).
    # button:
    #   text: 'Read Thesis'
    #   url: 'https://example.com'
  - area: MS, Electrical and Computer Engineering
    institution: University of Washington, Seattle
    date_start: 2023-09-27
    date_end: 2025-06-08
    summary: |
      GPA: 3.83/4.0
      Research Project: [Decoding Pain: Statistical Identification of Biomarkers from Electrophysiological Signals](https://arxiv.org/abs/2502.10621)

      Advisors: [Prof. Jeffrey Herron](https://sites.uw.edu/jeffherr/), [Prof. Rajesh Rao](https://www.rajeshpnrao.com/)
      
      Courses:
      - Statistical Learning
      - Deep Learning and Computer Vision
      - Computer Speech Processing
      - Digital Signal Processing

  - area: B.Tech., Applied Electronics and Instrumentation Engineering with minor in Mathematics
    institution: College of Engineering, Trivandrum
    date_start: 2019-07-22
    date_end: 2023-05-31
    summary: |
      GPA: 9.35/10.0
      Thesis: [Emotion Detection from EEG using transfer learning](https://arxiv.org/abs/2306.05680)
      Advisor: [Prof. Jerrin Thomas Panachakel](https://sites.google.com/view/jerrinpanachakel/home)
work:
  - position: Research Intern
    company_name: Skyworks Solutions.
    company_url: https://www.skyworksinc.com/
    company_logo: ''
    date_start: '2025-05-27'
    date_end: '2025-08-14'
    summary: |2-
      Responsibilities include:
        - Pioneered a dual-microphone enhancement framework integrating internal and external ear microphone signals to improve intelligibility and mitigate speech drop in low-SNR conditions.
        - Designed a low-parameter, streamable U-Net-based architecture with a cross-attention mechanism to fuse two-channel feature representations for real-time deployment.
        - Collected and curated a real-world evaluation dataset using a dummy-head HAT recording system for robust, ecologically valid testing.
        - Introduced SpeechDROPBERT, a novel SpeechBERT-based evaluation metric for quantifying speech-drop effects.
        - Achieved DNSMOS OVRL 2.40 on the curated test set vs. 2.25 in a beamformer + speech enhancement baseline, and SpeechDROPBERT 0.88 vs. 0.60 baseline, demonstrating substantial perceptual and robustness gains

  - position: Research Intern
    company_name: BrainChip, Inc.
    company_url: https://brainchip.com/
    company_logo: ''
    date_start: '2024-06-27'
    date_end: '2025-03-31'
    summary: |2-
      Responsibilities include:
      - Developed TENNs, a state-space model optimized for the Akida SNN chip, enabling efficient multimodal processing.
      - Designed aTENNuate, a real-time speech enhancement model (Interspeech 2025) and explored LoRA-based adaptation.
      - Optimized LLM training and implemented a Triton-based GPU kernel for FFT convolution in signal processing.
      - Developed secure inference & speaker verification, leveraging state-space models for enterprise applications.
      - Developing TENNs TTS model
  - position: Research Intern
    company_name: LEAP Lab, IISc
    company_url: ''
    company_logo: ''
    date_start: 2022-12-05
    date_end: 2023-05-15
    summary: |
      Responsibilities include:
      - Developed diarization systems for multilingual, multi-speaker environments with code-mixing, automating 40 hours of conversational data annotation.
      - Refined speaker detection by preprocessing audio and fine-tuning speaker activity detection using x-vectors.
      - Enhanced speaker boundaries with VB-HMM clustering for improved diarization accuracy.
      - Achieved DER of 28.04 for speaker diarization and 37.72 for language diarization on the DISPLACE dataset.

# Skills
# Add your own SVG icons to `assets/media/icons/`
# skills:
#   - name: Technical Skills
#     items:
#       - name: Python
#         description: ''
#         percent: 80
#         icon: code-bracket
#       - name: Data Science
#         description: ''
#         percent: 100
#         icon: chart-bar
#       - name: SQL
#         description: ''
#         percent: 40
#         icon: circle-stack
#   - name: Hobbies
#     color: '#eeac02'
#     color_border: '#f0bf23'
#     items:
#       - name: Hiking
#         description: ''
#         percent: 60
#         icon: person-simple-walk
#       - name: Cats
#         description: ''
#         percent: 100
#         icon: cat
#       - name: Photography
#         description: ''
#         percent: 80
#         icon: camera

# languages:
#   - name: English
#     percent: 100
#   - name: Chinese
#     percent: 75
#   - name: Portuguese
#     percent: 25

# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
awards:
  - title: NSF AAAI'25 Student Travel Award
    url: ''
    date: '2025-02-10'
    awarder: The U.S National Science Foundation (NSF) and AAAI
    icon: ''
    summary: |
      I am selected as a recipient of the Student Travel Award for AAAI 2025, sponsored by NSF to present my research paper "Decoding Pain: Statistical Identification of Biomarkers from Electrophysiological Signals"
  - title: Weil NeuroHUB and CoNECT Student Travel Award
    url: ''
    date: '2024-01-15'
    awarder: Weil-Neurohub and CoNECT
    icon: ''
    summary: |
      I was awarded travel grant to present my research paper "Decoding Pain: Statistical Identification of Biomarkers from Electrophysiological Signals"
  - title: Electrical and Computer Engineering Student Conference Travel Award
    url: ''
    date: '2024-01-12'
    awarder: Department of Electrical and Computer Engineering, University of Washington, Seattle
    icon: ''
    summary: |
      I was awarded travel grant by the Department of Electrical and Computer Engineering at the University of Washington to present my research paper "Decoding Pain: Statistical Identification of Biomarkers from Electrophysiological Signals"
---

## About Me

I am a first year PhD student at the [Soundability Lab](https://accessibility.eecs.umich.edu/) at University of Michigan CSE dept. advised by [Dr. Dhruv Jain](https://web.eecs.umich.edu/~profdj/), where I focus on developing deep learning algorithms for hearables. Prior to joining UMich, I graduated with an MS in the Department of Electrical and Computer Engineering at the University of Washington, Seattle.

My research interests broadly lie in speech, audio and language processing and deep learning.

In University of Washington, I was fortunate to be advised by [Dr. Jeffrey Herron](https://sites.uw.edu/jeffherr/) and [Dr. Rajesh Rao](https://www.cs.washington.edu/people/faculty/rao) in [Neural Systems lab](https://neural.cs.washington.edu) where I work alongside [Vishwas Sathish](https://scholar.google.com/citations?user=Ad01nlUAAAAJ&hl=en) and [Samantha Sun](https://samantha-sun.com) on identifying potential biomarker for pain from electrophysiological signals. 

I was also a part of [Mobile Intelligence lab](https://homes.cs.washington.edu/~gshyam/) where I worked on developing a volume controlled target speech extraction in noisy environments alongside [Tuochao Chen](https://staff.washington.edu/tuochao/), [Malek Itani](https://malekitani.github.io) and [Dr. Shyam Gollakota](https://homes.cs.washington.edu/~gshyam/). 

Prior to joining University of Washington, I was a research intern at the [Learning and Extraction of Acoustic Patterns (LEAP) lab](http://leap.ee.iisc.ac.in) where I worked alongside [Dr. Sriram Ganapathy](http://www.leap.ee.iisc.ac.in/sriram/) on the [DISPLACE 2023 Challenge](https://displace2023.github.io).
