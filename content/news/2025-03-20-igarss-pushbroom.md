---
news_title: "Paper Accepted at IEEE IGARSS 2025: Image Reconstruction for Hyperspectral Pushbroom Cameras using visual-inertial SLAM"
news_summary: "Our paper 'Image Reconstruction for Hyperspectral Pushbroom Cameras using visual-inertial SLAM' has been accepted at IEEE IGARSS."
title: "Image Reconstruction for Hyperspectral Pushbroom Cameras using visual-inertial SLAM"
date: 2025-03-20
summary: "In this study we propose a novel method in which we employ a visual-inertial SLAM system to reconstruct distorted hyperspectral pushbroom images."
draft: false
image: "images/news/pushbroom-slam.png"
paper_type: "Conference Paper"
venue: "IEEE International Geoscience and Remote Sensing Symposium (IGARSS) 2025"
venue_url: "https://www.2025.ieeeigarss.org/"
status: "Accepted"
doi: ""
pdf_url:
bibtex_key: pushbroom-slam-2025
---

{{< paper_header >}}


{{< paper_abstract >}}
Pushbroom cameras are one of the most popular
types of cameras when it comes to remote sensing hyperspectral
imaging. However, since these cameras work by scanning a single
line at a time, the image data can be distorted if there is no
consistent relative motion between the camera and the scene
to be captured. This constraint presents a substantial obstacle
in modern battlefield deployments, where drones carrying these
cameras may be subject to vigorous maneuvering. To address this
problem, we propose a novel method in which we employ a visual-inertial SLAM system, rigidly attached to the hyperspectral
camera, which captures the 3D geometry of the scene and
the trajectory of the system. With this additional information,
we project the scanned lines on the scene geometry and then
reconstruct the images, effectively reversing the distortion caused
by the camera movement. We illustrate the performance of
our method on a data set that has been created by manually
holding a hyperspectral pushbroom camera, causing significant
distortions in the data due to natural human movement. When
postprocessing the data with our method, we observe a clear
reduction in distortion.
{{< /paper_abstract >}}



{{< paper_authors "charles_hamesse" "hannes_de_meulemeester" "skralan_hosteaux" "rob_haelterman" >}}


{{< paper_citation >}}

## Acknowledgments

This work was funded by The Belgian Defence project “DAP22/01” and the EDA project “HYPER-IP”.
