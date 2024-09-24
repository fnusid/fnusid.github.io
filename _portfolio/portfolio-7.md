---
title: "Odessa"
excerpt: "Speaker dependent HMM based ASR<br/><img src='/images/odessa.png' width='200'>"
collection: portfolio
---

Description : This project presents a speaker-dependent, isolated-phrase ASR system designed to recognize a specific user’s set of prede- fined phrases. The system utilizes Hidden Markov Models (HMMs) with a single Gaussian distribution per state and a diagonal covariance matrix to model acoustic features effi- ciently. A continuous monitoring approach is employed, with a speech/silence detector identifying speech segments. Upon detecting the wake-up phrase, ”Odessa,” the system expects the next segment to contain one of the remaining phrases from the vocabulary. Experimental results demonstrate the system’s effectiveness, achieving a mean accuracy of 98.3% across 5-fold cross-validation.

[Code : https://github.com/fnusid/HMM_ASR](https://github.com/fnusid/HMM_ASR)

[Paper : https://github.com/fnusid/HMM_ASR/blob/main/Report.pdf](https://github.com/fnusid/HMM_ASR/blob/main/Report.pdf)

