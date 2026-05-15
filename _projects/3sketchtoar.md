---
layout: portfolio
project_name: Sketch to AR
project_description: Sketch to AR is an interactive experience that turns hand-drawn sketches into 3D objects in augmented reality.
link:
content_color: f0deb7
content_filtercolor_top: 121, 85, 72, 0.3
content_filtercolor_btm: 220, 204, 198, 0.3
image_path: img/sketchtoar/sta5.JPG
image_path2: img/sketchtoar/sta2.JPG
image_path3: img/sketchtoar/sta3.jpg
image_path4: img/sketchtoar/sta4.JPG
image_layout: slide--layout-3
category: Augmented Reality | Interaction Design | Unity
roles: Unity Developer / Creative Technologist
year: 2019
collaborator: Mengzhen Xiao
---
Sketch to AR is an interactive experience that lets people see their sketches in a new way: translated into 3D objects in augmented reality.

The experience starts with a familiar action: drawing. A participant draws an object, shows the sketch to the system, and sees a related 3D model appear in AR. The project explores how a simple creative input can become a dynamic spatial experience through computer vision, API integration, and real-time interaction design.

<iframe src="https://player.vimeo.com/video/313726484" width="100%" height="359" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

### Why We Built It
Sketching is one of the fastest ways for people to express an idea, but many sketch-based interfaces stop at recognition.
We wanted to explore what could happen if recognition became part of a playful feedback loop. Instead of only asking whether a machine could identify a sketch correctly, we asked:

**What if a simple drawing could transform into an unexpected 3D object in AR?**

The goal was not to create a precise 3D modeling tool. It was to make the moment of drawing feel more alive: turning a quick sketch into something people could see, react to, and talk about in physical space.

### My Role

I worked as a developer and creative technologist. My contributions included:

- Designed and implemented the flow to convert sketch input to AR output
- Built the Unity prototype with ARKit
- Integrated Google Vision AI for sketch recognition
- Integrated Google Poly API to search for and load 3D models
- Tested the experience with users during development and exhibition
- Coordinated project scope, technical constraints, and exhibition readiness with my collaborator

### Design Challenge

The main challenge was making a multi-step technical system feel simple and playful to the participant.

Behind the scenes, the experience involved image capture, sketch recognition, API querying, 3D model loading, and AR placement. But for the user, we wanted the interaction to feel lightweight:

**Draw something. Show it to the system. See the result appear in space.**

It was about shaping the interaction so people could understand it quickly, try it without hesitation, and enjoy the surprise of the result.  

![kids trying out sketch to ar]({{ site.url }}/img/sketchtoar/kidtrying.jpg)

### How It Worked

Sketch to AR was built with Unity and ARKit. It used Google Vision AI to identify sketches and the Google Poly API to search for and load related 3D objects into the AR scene.
I wrote more about the making process in this [blog entry](https://linzhangcs.github.io/blog/2018/10/31/sketchTo3D/) if you're interested in learning more.

### Exhibition & Learnings

Sketch to AR was selected for the ITP/IMA Spring Show 2019. More than 200 people tried the experience over two days, including children with parents, students, creative professionals, developers, Professor Clay Shirky, and NYU President Andrew D. Hamilton.

Watching people use the prototype helped us understand that the most interesting moments were not always the perfectly accurate results. Sometimes the system interpreted a sketch differently than the participant expected, and that mismatch created surprise, humor, and conversation.

![Haiyi and Vidia]({{ site.url }}/img/sketchtoar/sta3.jpg)

![group of people trying sketch to ar]({{ site.url }}/img/sketchtoar/group.jpg)

![NYU president Hamilton trying it out]({{ site.url }}/img/sketchtoar/nyu_president_hamilton.jpg)

![Professor Clay Shirky trying Sketch to AR]({{ site.url }}/img/sketchtoar/IMG_8510.JPG)

![Professor Clay Shirky trying Sketch to AR]({{ site.url }}/img/sketchtoar/clay.JPG)

![bike]({{ site.url }}/img/sketchtoar/bike.jpg)

![boat shoes]({{ site.url }}/img/sketchtoar/boatshoes.jpg)

![matt]({{ site.url }}/img/sketchtoar/matt.JPG)
