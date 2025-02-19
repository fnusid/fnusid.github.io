---
title: Emotion detection from EEG using transfer learning
authors:
- 'Sidharth'
- Ashish Abraham Samuel
- H Ranjana
- Jerrin Thomas Panachakel
- others
date: '2023-07-24'
publishDate: '2023-07-24'
publication_types:
- paper-conference
publication: '*2023 45th Annual International Conference of the IEEE Engineering in
  Medicine & Biology Society (EMBC)*'
abstract: In this study, we employed transfer learning to overcome the challenge of limited data availability in EEG-based emotion detection. The base model used in this study was Resnet50. Additionally, we employed a novel feature combination in EEG-based emotion detection. The input to the model was in the form of an image matrix, which comprised Mean Phase Coherence (MPC) and Magnitude Squared Coherence (MSC) in the upper-triangular and lower-triangular matrices, respectively. We further improved the technique by incorporating features obtained from the Differential Entropy (DE) into the diagonal. The dataset used in this study, SEED EEG (62 channel EEG), comprises three classes (Positive, Neutral, and Negative). We calculated both subject-independent and subject-dependent accuracy. The subject-dependent accuracy was obtained using a 10-fold cross-validation method and was 93.1%, while the subject-independent classification was performed by employing the leave-one-subject-out (LOSO) strategy. The accuracy obtained in subject-independent classification was 71.6%. Both of these accuracies are at least twice better than the chance accuracy of classifying 3 classes. The study found the use of MSC and MPC in EEG-based emotion detection promising for emotion classification. The future scope of this work includes the use of data augmentation techniques, enhanced classifiers, and better features for emotion classification.
url_pdf: 'https://ieeexplore.ieee.org/abstract/document/10340389'
---
