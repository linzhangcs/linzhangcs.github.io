---
layout: portfolio
project_name: Sketch to AR
project_description: Sketch to AR is an interactive experience that turns hand-drawn sketches into 3D objects in augmented reality.
link:
content_color: fdd7b8
content_filtercolor_top: 121, 85, 72, 0.3
content_filtercolor_btm: 220, 204, 198, 0.3
image_path: img/sketchtoar/sta5.JPG
image_path2: img/sketchtoar/sta2.JPG
image_path3: img/sketchtoar/sta3.jpg
image_path4: img/sketchtoar/sta4.JPG
image_layout: slide--layout-3
category: Unity, Augmented Reality, Interaction Design
roles: Unity Developer
year: 2019
collaborator: Mengzhen Xiao
---
Sketch to AR is an interactive experience that lets people see their sketches in a new way: translated into 3D objects in augmented reality.

The experience starts with a familiar action: drawing. A participant draws an object, shows the sketch to the system, and sees a related 3D model appear in AR. The project explores how a simple creative input can become a dynamic, spatial experience through computer vision, API integration, and real-time interaction design.
<iframe src="https://player.vimeo.com/video/313726484" width="100%" height="359" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

### Why
Sketching is one of the fastest ways for people to express an idea, but most sketch-based interfaces stop at recognition: the system guesses what the drawing is, then the interaction ends.

We wanted to design a more generative interaction. Instead of only asking whether a machine could recognize a sketch, we asked:

> What if a sketch could become the starting point for a new spatial experience?


### My Role

I worked as a developer, creative technologist, and project manager. My contributions included:

- Designing the core interaction flow from sketch input to AR output
- Building the Unity prototype with ARKit
- Integrating Google Vision AI for sketch recognition
- Integrating Google Poly API to search and load 3D models
- Testing the experience with users during development and exhibition
- Coordinating project scope, technical constraints, and exhibition readiness with my collaborator

### Design and Engineering Challenges

The main challenge was making a multi-step technical system feel simple to the participant.

Behind the scenes, the experience involved image capture, sketch recognition, API querying, 3D model loading, and AR placement. For the user, we wanted the interaction to feel lightweight: draw something, show it to the system, and see the result.

This required thinking through:
- How to guide people without over-explaining the technology
- How to handle imperfect or surprising recognition results
- How to translate a 2D input into a meaningful 3D spatial response
- How to make the prototype stable enough for a public exhibition environment

### How

Sketch to AR was built using ARKit in Unity. It used Google [Vision AI API](https://cloud.google.com/vision/#industry-leading-accuracy-for-image-understanding) for identifying the sketches, and Google [Poly API](https://developers.google.com/poly/develop/) for querying and loading 3D objects into the AR scene.
Here is more info on the [making process](https://linzhangcs.github.io/blog//2018/10/31/sketchTo3D/) if you are interested.

### Exhibition and Learnings

Sketch to AR was selected for ITP/IMA Spring Show 2019. Over 200 people tried it over a period of two days, 8 hours in total. Out those 200 people, some are curious kids with their parents, students and professionals in the creative fields, some are developers who worked on Poly API. We even had Professor Clay Shirky and the NYU president Andrew D. Hamilton trying it out.
Watching people use the prototype helped us understand that the most interesting moments were not always the perfectly accurate results. Sometimes the system interpreted a sketch differently than the participant expected, and that mismatch created surprise, humor, and conversation.

This became an important design insight: in playful AI-assisted interfaces, imperfection does not always have to be hidden. When framed well, it can become part of the interaction.

![Haiyi and Vidia]({{ site.url }}/img/sketchtoar/sta3.jpg)

![group of people trying sketch to ar]({{ site.url }}/img/sketchtoar/group.jpg)

![kids trying out sketch to ar]({{ site.url }}/img/sketchtoar/kidtrying.jpg)

![NYU president Hamilton trying it out]({{ site.url }}/img/sketchtoar/nyu_president_hamilton.jpg)

![clay]({{ site.url }}/img/sketchtoar/IMG_8510.JPG)

![clay]({{ site.url }}/img/sketchtoar/clay.JPG)

![bike]({{ site.url }}/img/sketchtoar/bike.jpg)

![boat shoes]({{ site.url }}/img/sketchtoar/boatshoes.jpg)

![matt]({{ site.url }}/img/sketchtoar/matt.JPG)
