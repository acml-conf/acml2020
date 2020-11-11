---
content_id: program-invited-speakers
title: Invited Speakers
path: /program/invited-speakers
withSectionMenu: true
---

import ImageWithPathPrefix from "../../components/imageWithPathPrefix";
import LinkWithPathPrefix from "../../components/linkWithPathPrefix";

We have four invited speakers at ACML2020.

|  | Speaker  | Affiliation  | Talk Title  |
|:---:|:---:|:---:|:---:|
| <ImageWithPathPrefix width="200px" src="pathPrefix::/invited-speakers/SuriyaGunasekar.jpg"/> | Suriya Gunasekar | Microsoft Research, USA | <LinkWithPathPrefix text="Rethinking the role of optimization in learning" href="pathPrefix::/video/invited-talk/suriya-gunasekar"/>|
| <ImageWithPathPrefix width="200px" src="pathPrefix::/invited-speakers/AliceOh.jpg"/> | Alice Oh | KAIST, Korea | <LinkWithPathPrefix text="Open domain dialogue response generation: models and evaluation metrics" href="pathPrefix::/video/invited-talk/alice-oh"/> |
| <ImageWithPathPrefix width="200px" src="pathPrefix::/invited-speakers/WeeSunLee.jpg"/> | Lee Wee Sun | National University of Singapore, Singapore | <LinkWithPathPrefix text="Neuralizing Algorithms" href="pathPrefix::/video/invited-talk/lee-wee-sun"/> |
| <ImageWithPathPrefix width="200px" src="pathPrefix::/invited-speakers/chidchnok.jpg"/> | Chidchanok Lursinsap | Chulalongkorn University, Thailand |  <LinkWithPathPrefix text="Fast and Accurate Neural Learning with Limited Memory Size, Limited Energy Supply, and Class Drift Constraints in Streaming Data Environment" href="pathPrefix::/video/invited-talk/chidchanok-lursinsap"/> |

## Speakers' Biographies and Talk Details

### Suriya Gunasekar
<div align="center">
    <ImageWithPathPrefix width="200px" src="pathPrefix::/invited-speakers/SuriyaGunasekar.jpg"/> 
</div>

**Affiliation:** Microsoft Research, USA

**Title:** Rethinking the role of optimization in learning

**Abstract:**

In this talk, I will overview recent results towards understanding how we learn large capacity machine learning models. In the modern practice of machine learning, especially deep learning, many successful models have far more trainable parameters compared to the number of training examples. Consequently, the optimization objective for training such models have multiple minimizers that perfectly fit the training data. More problematically, while some of these minimizers generalize well to new examples, most minimizers will simply overfit or memorize the training data and will perform poorly on new examples. In practice though, when such ill-posed objectives are minimized using local search algorithms like (stochastic) gradient descent ((S)GD), the "special" minimizers returned by these algorithms have remarkably good performance on new examples. In this talk, we will explore the role optimization algorithms like (S)GD in learning overparameterized models in simpler setting of learning linear predictors.

**Bio:**

Suriya Gunasekar is a Senior Researcher in the Machine Learning and Optimization (MLO) group at Microsoft Research at Redmond. Prior to joining MSR, she was a Research Assistant Professor at Toyota Technological Institute at Chicago. She received her PhD in Electrical and Computer Engineering from The University of Texas at Austin. 

<hr/>

### Alice Oh
<div align="center">
    <ImageWithPathPrefix width="200px" src="pathPrefix::/invited-speakers/AliceOh.jpg"/> 
</div>

**Affiliation:** KAIST, Korea

**Title:** Open domain dialogue response generation: models and evaluation metrics

**Abstract:**

Dialogue response generation is an important AI research topic. We are investigating this topic with the open domain perspective, meaning the topics of the dialogues are not pre-specified. I describe a new model called Variable Hierarchical User-based Conversation Model which considers the previous dialogues among users, as well as their social network connections. I then describe a new evaluation metric called Speaker Sensitive Response Evaluation Model which correlates better with human judgments. These are described in our recent EMNLP 2019 and ACL 2020 papers.

**Bio:**

Alice Oh is an Associate Professor in the School of Computing at KAIST and directs the Users and Information Lab. She received MS in Language and Information Technologies from CMU and PhD in Computer Science from MIT. Her main research interests are in developing ML techniques for NLP, applying them to human social behavior data, and improving CS education with ML. She serves the ML and NLP research communities by reviewing and chairing for conferences including ACL, EMNLP, ACML, ICML, NeurIPS, and ICLR. Her most recent service is co-Program Chair of ICLR 2021.

<hr/>

### Lee Wee Sun
<div align="center">
    <ImageWithPathPrefix width="200px" src="pathPrefix::/invited-speakers/WeeSunLee.jpg"/> 
</div>

**Affiliation:** National University of Singapore, Singapore

**Title:** Neuralizing Algorithms

**Abstract:**

Most AI problems that we would like to solve are computationally intractable in the worst case. However, we are mostly interested in solving a small fraction of possible problems, those that occur in the real world. Approximation algorithms work well on some of these problems but are not tuned for the target problem distribution. Machine learning provides the tools to develop approximation algorithms that work well on problems encountered in practice, by training the algorithms on problems sampled from real world distributions. We modify known approximation algorithms and augment them with learnable components to allow learning of more powerful approximation algorithms that are then tuned to work on the target problem distribution. We demonstrate how to do this by developing Factor Graph Neural Network, a high order graph neural network based on loopy belief propagation on factor graphs and Particle Filter Recurrent Neural Network, a recurrent neural network based on particle filters. We also examine the advantages of decomposing a large problem into algorithmic components to simplify the design of a large system, while doing end-to-end learning to ensure that the entire system works well on the target problem distribution.

**Bio:**

Lee Wee Sun is a professor in the Department of Computer Science, National University of Singapore. He obtained his B.Eng from the University of Queensland in 1992 and his Ph.D. from the Australian National University in 1996. He has been a research fellow at the Australian Defence Force Academy, a fellow of the Singapore-MIT Alliance, and a visiting scientist at MIT.  

His research interests include machine learning, planning under uncertainty, and approximate inference. He has been an area chair for machine learning and AI conferences such as the Neural Information Processing Systems (NeurIPS), the International Conference on Machine Learning (ICML), the AAAI Conference on Artificial Intelligence (AAAI), and the International Joint Conference on Artificial Intelligence (IJCAI). He was a program, conference and journal track co-chair for the Asian Conference on Machine Learning (ACML), and he is currently the co-chair of the steering committee of ACML.

<hr/>

### Chidchanok Lursinsap
<div align="center">
    <ImageWithPathPrefix width="200px" src="pathPrefix::/invited-speakers/chidchnok.jpg"/> 
</div>

**Affiliation:** Chulalongkorn University, Bangkok, Thailand

**Title:** Fast and Accurate Neural Learning with Limited Memory Size, Limited Energy Supply, and Class Drift Constraints in Streaming Data Environment

**Abstract:**

Tremendous data have been generated in almost every field of industrial and scientific applications and researches Due to the advancement of Internet and new sensor equipment. This situation creates a crisis of memory overflow, where the amount of continuously incoming data is larger than the physical size of memory. Most of the developed neural learning algorithms were designed without seriously considering this memory overflow crisis. It is assumed that all learning data including present data and new incoming data must be retained inside the memory throughout the learning process. This assumption is unrealistic and impractical in the streaming data environment. Furthermore, the number of learning epochs cannot be controlled, which implies that the energy consumption for achieving the learning process may exceed the available energy supply such as a battery. This talk will discuss a new concept of neural learning, the supporting architecture, and the relevant theoretical foundation to achieve the efficient leaning process with high accuracy under the constraints of memory overflow and controllable polynomial time complexity.

**Bio:**

Chidchanok Lursinsap received the B.Eng. degree (Hons.) in computer engineering from Chulalongkorn University, Bangkok,
Thailand, in 1978, and the M.S. and Ph.D. degrees in computer science from the University of Illinois at
Urbana–Champaign, Urbana, IL, USA, in 1982 and 1986, respectively.
He was a Lecturer with the Department of Computer Engineering, Chulalongkorn University, in 1979. In 1986,
he was a Visiting Assistant Professor with the Department of Computer Science, University of Illinois at Urbana–Champaign.
From 1987 to 1996, he was with the Center for Advanced Computer Studies, University of Louisiana at Lafayette,
as an Assistant and an Associate Professor.
After that, he came back to Thailand to establish the Ph.D. Program in computer science with Chulalongkorn University
and he became a Full Professor. His major research interests include neural learning and its applications to other science and engineering areas.