---
title: "Real-time Speech Enhancement on Raw Signals with Deep State-space Modeling"
collection: publications
permalink: /publication/aTENNuate
excerpt: 'Deep state space modelling for speech denoising'
date: 2024-09-07
venue: 'ICASSP 2025'
paperurl: '[http://academicpages.github.io/files/paper1.pdf](https://arxiv.org/pdf/2409.03377)'
citation: 'Yan Ru Pei, Ritik Shrivastava, Sidharth., ”Real‐time Speech Enhancement on Raw Signals with Deep State‐space Modeling,” ICASSP 2025 ‐ 2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), Hyderabad, India, 2025'
---

We present aTENNuate, a simple deep state-space autoencoder configured for efficient online raw speech enhance- ment in an end-to-end fashion. The network’s performance is primarily evaluated on raw speech denoising, with additional as- sessments on tasks such as super-resolution and de-quantization. We benchmark aTENNuate on the VoiceBank + DEMAND and the Microsoft DNS1 synthetic test sets. The network outperforms previous real-time denoising models in terms of PESQ score, parameter count, MACs, and latency. Even as a raw waveform processing model, the model maintains high fidelity to the clean signal with minimal audible artifacts. In addition, the model re- mains performant even when the noisy input is compressed down to 4000Hz and 4 bits, suggesting general speech enhancement capabilities in low-resource environments. Code is available at github.com/Brainchip-Inc/aTENNuate
