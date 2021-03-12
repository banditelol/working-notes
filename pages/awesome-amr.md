# Awesome AMR

## Basic
- [AMR Specification](https://github.com/amrisi/amr-guidelines/blob/master/amr.md) as the time of this writing, it's on version 1.2
- [Meaning Representation for NLU ODSC 2019](https://www.youtube.com/watch?v=uCZ9nAe76Ss&t=1446s) Grammarly's Mariana Romanyshyn Talk about AMR
- [AMR.ISI](https://amr.isi.edu/) 
- [Smatch Tool](https://github.com/snowblink14/smatch) based on [this paper](https://amr.isi.edu/smatch-13.pdf)
## Tools

- [amrlib](https://github.com/bjascob/amrlib) : A python library that makes AMR parsing, generation and visualization simple. Also support paralization
- [amr-coref](https://github.com/bjascob/amr_coref) which uses follows [🤗 Neural Coref Project](https://github.com/huggingface/neuralcoref). Also see [their blogpost on the same topic](https://medium.com/huggingface/how-to-train-a-neural-coreference-model-neuralcoref-2-7bb30c1abdfe).
- [amr-hackathon](https://github.com/nschneid/amr-hackathon) : python implementation of AMR notation reader with some added functionalities
- [amr-metric-suite](https://github.com/Heidelberg-NLP/amr-metric-suite) : 
- [amr-editor](http://www.isi.edu/~ulf/amr/AMR-editor.html) Based on [A tool to Build AMR Paper](https://amr.isi.edu/papers/amr-editor-ulf2013a.pdf) with [accompanying video](http://youtu.be/hy3zrhgtAVQ).

## Paper

- [Abstract Meaning Representation for Sembanking](https://www.aclweb.org/anthology/W13-2322/) : The OG paper of AMR
- [AMR Parsing via Graph-Sequence Iterative Inference](https://arxiv.org/abs/2004.05572) : Introduces end-to-end model that treats AMR parsing as a series of dual decisions on the input sequence and the incrementally constructed graph. At each time step, our model performs multiple rounds of attention, reasoning, and composition that aim to answer two critical questions: (1) which part of the input _sequence_ to abstract; and (2) where in the output _graph_ to construct the new concept.
  - [AMR-gs](https://github.com/jcyk/AMR-gs) : Is its accompanying implementation using Pytorch
- [AMR Similarity Metrics from Principles](https://arxiv.org/abs/2001.10929) : S2match that is more benevolent to only very slight meaning deviations and targets the fulfilment of all established criteria. We assess its suitability and show its advantages over Smatch and SemBleu. 
  - Accompanied with its [python implementation](https://github.com/flipz357/amr-metric-suite)
- [Investigating Pretrained Language Models for Graph-to-Text Generation](https://arxiv.org/abs/2007.08426) : Graph-to-text generation aims to generate fluent texts from graph-based data. In this paper, we investigate two recently proposed pretrained language models (PLMs) and analyze the impact of different task-adaptive pretraining strategies for PLMs in graph-to-text generation. We present a study across three graph domains: meaning representations, Wikipedia knowledge graphs (KGs) and scientific KGs. We show that the PLMs BART and T5 achieve new state-of-the-art results and that task-adaptive pretraining strategies improve their performance even further
- [One SPRING to Rule Them Both:Symmetric AMR Semantic Parsing and Generation without a Complex Pipeline](https://github.com/SapienzaNLP/spring/raw/main/docs/preprint.pdf) : state-of-the-art Text-to-AMR parsing and AMR-to-Text generation without many cumbersome external components
  - [spring](https://github.com/SapienzaNLP/spring) : Accompanying implementation in Pytorch
- [XL-AMR: Enabling Cross-Lingual AMR Parsing with Transfer Learning Techniques](https://www.aclweb.org/anthology/2020.emnlp-main.195.pdf) 
  - [xl-amr](https://github.com/SapienzaNLP/xl-amr)
- [2018 - An AMR Aligner Tuned by Transition-based Parser](https://paperswithcode.com/paper/an-amr-aligner-tuned-by-transition-based)
- [2019 - AMR Parsing as Sequence-to-Graph Transduction](https://www.aclweb.org/anthology/P19-1009/)
  -  sheng-z/stog](https://github.com/sheng-z/stog)
- [2016 - AMR Parsing with an Incremental Joint Model](https://www.aclweb.org/anthology/D16-1065/)
- [2020 - Improving AMR Parsing with Sequence-to-Sequence Pre-training ](https://www.aclweb.org/anthology/2020.emnlp-main.196/)
  - [xdqkid/S2S-AMR-Parser](https://github.com/xdqkid/S2S-AMR-Parser)
## Benchmark

- [AMR Parsing on LDC2015E86](https://paperswithcode.com/sota/amr-parsing-on-ldc2015e86-1)
- [Semeval 2017 Task 9](https://alt.qcri.org/semeval2017/task9/) : AMR Parsing (Biomdedical) and AMR to English subtasks
- [AMR Annotation version 3](https://catalog.ldc.upenn.edu/LDC2020T02)
# TODO

Add new section especially for indonesian, multi-lingual, and language agnostic model
