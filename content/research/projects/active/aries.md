---
title: Advanced Resolution and Intelligence for Explosive Sensing
linkTitle: ARIES
type: docs
prev: research/projects/
project_image: "/images/aries-illustration.png"
project_start: "March 1, 2026"
project_end: "February 28, 2029"
project_status: 'active'
project_reference: N/A
project_funding: Defence-related Research Action (DEFRA), 2025
project_rma_involvement: Partner
project_coordinator: "[Bart Goossens](https://research.ugent.be/web/person/bart-goossens-0/en)"
project_coordinator_affiliation: "imec vzw"
project_copromotor: "[Hannes De Meulemeester](https://researchportal.rma.ac.be/en/persons/hannes-de-meulemeester)"
project_rma_researchers: "To be hired"
project_partners_rma: N/A
project_partners_BE_DEF: N/A
project_partners_other: "[imec vzw](https://www.imec.be/), [FLIR Belgium](https://www.flir.com), [UGent](https://ugent.be)"
project_quad_chart: "[Quad Chart](</downloads/Quad_ARIES_4D Perception.pdf>)"
keywords:
- Hyperspectral Imaging
- 3D Mapping
- Magnetometry
- Sensor Fusion
- Landmine Detection
---

{{< projectheader >}}


## Context
The ARIES project addresses the critical need for improved detection of surface-laid landmines, a persistent threat in military operations and civilian areas worldwide. Recent conflicts, such as in Ukraine, highlight the urgent challenge posed by unexploded ordnance and aerially deployable surface mines. Current detection approaches are limited in accuracy, adaptability, and speed, often exposing personnel to risk during demining operations. ARIES aims to develop an advanced sensor fusion framework combining multiple sensing modalities (visible light, near- and short-wave infrared, thermal infrared, hyperspectral, polarization imaging, and magnetometry) into a modular, lightweight system deployable on drones, rovers, or carried by soldiers. The system will enable real-time, passive detection resilient to environmental variability, improving operational scalability and personnel safety. 

 
## Objectives
The principal objectives of ARIES are to develop a novel context-adaptive sensor fusion algorithm optimally combining multi-spectral and geophysical data to detect at least 20 types of surface mines with high accuracy and low false alarm rates. The project targets a detection rate of 95% in favorable conditions and 80% in more challenging ones, with an overall false alarm rate below 10%. Creating a large dataset of at least 50,000 multi-modal images under varying environmental conditions will underpin algorithm training and validation. Further objectives include designing a modular sensor rig adaptable to different operational setups, optimizing edge AI algorithms for mobile, power-constrained platforms to allow rapid in-field processing, and validating system performance through field trials. The project also seeks to contribute to Defence capability development by enhancing explosive ordnance disposal efficiency and reducing risks to personnel.

## Methodology
The ARIES methodology is structured into three main phases. Initially, a preliminary dataset will be collected using all available sensors across diverse environments and conditions to design and prototype a sensor fusion mine detection algorithm. This prototype will inform a second phase involving collection of a significantly larger, focused dataset optimized to maximize detection performance. Algorithm refinement will incorporate environmental context and neural network calibration for robust sensor weighting and adaptability to sensor availability or failure. Subsequently, the compute-intensive detection algorithm will be optimized for deployment on mobile platforms using neural network compression and GPU acceleration to achieve low-latency processing (~100 ms). The final phase will focus on constructing a modular sensor rig deployable on drones, rovers, or by hand, with testing and validation conducted through field trials. Collaboration among project partners with complementary expertise ensures comprehensive development and validation of hardware, software, and operational concepts.