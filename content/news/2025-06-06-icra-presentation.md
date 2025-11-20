---
news_title: "Presentation at IEEE ICRA: Depth-Visual-Inertial (DVI) Mapping for Robust Indoor 3D Reconstruction"
news_summary: "Our paper 'Depth-Visual-Inertial (DVI) Mapping for Robust Indoor 3D Reconstruction' has been presented at IEEE ICRA by dr. Charles Hamesse."
title: "Depth-Visual-Inertial (DVI) Mapping for Robust Indoor 3D Reconstruction"
date: 2025-06-06
summary: "We propose the Depth-Visual-Inertial (DVI) mapping system: a robust multi-sensor fusion framework for dense 3D mapping using time-of-flight cameras equipped with RGB and IMU sensors."
draft: false
image: "images/news/dvi-mapping.jpg"
paper_type: "Conference Paper"
venue: "IEEE International Conference on Robotics and Automation (ICRA) 2025"
venue_url: "https://2025.ieee-icra.org/"
status: "Accepted"
doi: "10.1109/LRA.2024.3487496"
pdf_url:
bibtex_key: dvi-mapping-2024
---

{{< paper_header >}}


{{< paper_abstract >}}
We propose the Depth-Visual-Inertial (DVI) mapping system: a robust multi-sensor fusion framework for dense 3D mapping using time-of-flight cameras equipped with RGB and IMU sensors. Inspired by recent developments in real-time LiDAR-based odometry and mapping, our system uses an error-state iterative Kalman filter for state estimation: it processes the inertial sensor's data for state propagation, followed by a state update first using visual-inertial odometry, then depth-based odometry. This sensor fusion scheme makes our system robust to degenerate scenarios (e.g. lack of visual or geometrical features, fast rotations) and to noisy sensor data, like those that can be obtained with off-the-shelf time-of-flight DVI sensors. For evaluation, we propose the new Bunker DVI Dataset, featuring data from multiple DVI sensors recorded in challenging conditions reflecting search-and-rescue operations. We show the superior robustness and precision of our method against previous work. Following the open science principle, we make both our source code and dataset publicly available.
{{< /paper_abstract >}}

<!-- {{< paper_keywords "Visual-Inertial SLAM, Autonomous Navigation, Sensor Fusion, Real-Time Systems, Mobile Robotics, Computer Vision" >}} -->



{{< paper_authors "charles_hamesse" "michiel_vlaminck" "hiep_luong" "rob_haelterman" >}}


{{< paper_citation >}}

## Acknowledgments

This work was funded in part by Belgium’s Royal Higher Institute for Defence (RHID) under Grant DAP18/04 and Grant DAP22/01.
