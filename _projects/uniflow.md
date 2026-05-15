---
layout: portfolio
project_name: uniFlow
project_description: uniFlow is a Unity Plugin for Dialogflow v2. It enables creators to integrate natural language conversation into AR and VR environments.
link:
content_color: e1d7d4
content_filtercolor_top: 121, 85, 72, 0.3
content_filtercolor_btm: 220, 204, 198, 0.5
image_path: img/uniflow/uniflow-thumb-3.jpg
image_path2: img/uniflow/uniflow-userflow.jpg
image_path3: img/uniflow/uniflow-logos.jpg
image_path4: img/uniflow/uniflow-example.jpg
image_layout: slide--layout-2
category: Voice | XR | Unity
roles: Unity C# Developer
collaborator: Ilana Pecis Bonder & Alice Sun
---
uniFlow is a Unity plugin for Dialogflow v2 that enables creators to integrate natural language conversation into AR and VR environments.

The project was selected and funded by [xStory](https://www.itpxstory.com/) as part of an exploration into new forms of interactive storytelling and immersive experience.

### Why We Built It

While learning to use Oculus Rift and building AR/VR prototypes, I noticed that XR experiences can feel overwhelming for people who are new to immersive environments.

In VR especially, users often have to learn unfamiliar controllers, gestures, menus, and movement patterns before they can fully participate. I found myself wishing I could simply speak to make things happen.  

We explored voice as a way to make immersive environments feel more natural, accessible, and expressive; especially for creators building interactive stories, guided experiences, or conversational characters.

### Design & Engineering Challenge

The main challenge was making voice interaction easier for creators to add without requiring them to rebuild the full integration from scratch.

At the time, an older Api.ai Unity plugin existed, but it was being deprecated. We wanted uniFlow to continue that idea for Dialogflow v2 and give creators a clearer path for experimenting with conversational interaction in Unity.

The design challenge was not only technical. It was also about creator experience:

**How can we make a voice integration understandable enough for other creators to use?**

That meant thinking through setup, documentation, example flows, and how voice commands could map to meaningful actions in immersive scenes.

### How It Worked

![Overview]({{ site.url }}/img/uniflow/uniflow-overview.jpg)

![User flow]({{ site.url }}/img/uniflow/uniflow-userflow.jpg)

![Example interaction]({{ site.url }}/img/uniflow/uniflow-example.jpg)

uniFlow connected Unity with Dialogflow v2 so creators could define conversational intents and trigger events inside an AR or VR scene.

Documentation and source code:

- [Documentation and guidelines](https://itp-xstory.github.io/uniFlow/)
- [Code repository](https://github.com/ITP-xStory/uniFlow)

### Demo

<iframe width="100%" height="415" src="https://www.youtube.com/embed/zkAbJk768YQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Reflection

uniFlow helped me see creator tools as a design problem. The goal was not only to make voice work inside Unity, but to make the integration easier for other creators to understand, adapt, and build with.