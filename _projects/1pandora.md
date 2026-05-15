---
layout: portfolio
project_name: Pandora
project_description: Pandora was an internal secrets management tool used by 10,000+ Ubisoft employees across North America and Europe.
link:
content_color: fcfcfd
content_filtercolor_top: 224, 133, 99, 0.0
content_filtercolor_btm: 220, 204, 198, 0.0
image_path: img/pandora/landing-page.png
roles: Frontend Engineer / Product UI Contributor
image_layout: slide--layout-1
category: Product UI | Frontend Engineering 
year: 2023
---
Pandora is an internal secret management web application at [Ubisoft](https://www.ubisoft.com/en-us), used by 10,000+ employees across North America and Europe. It helps employees securely create, store, find, and share credentials, keys, certificates, and other access-related records.

The product supported **9 secret types** and role-based sharing controls, including **viewer, editor, and admin** permissions.  

![secret creation]({{ site.url }}/img/pandora/create-new-secret.png)
### Why It Mattered

Before Pandora, secrets were often managed through scattered documents, chats, spreadsheets, or paper. This made access control inconsistent, slowed teams down, and increased security risk.

Pandora created a safer, more structured workflow for managing sensitive information: making secure behavior easier for employees to adopt in everyday work.

### My Role

**Role:** Frontend Engineer / Product UI Contributor  
**Team:** Designer, PM, engineering manager, backend engineers, QA, and 2 frontend engineers

I helped lead frontend development for core product flows and partnered with designers, PMs, backend engineers, and QA to translate product requirements into clear, usable interface experiences.
### Product Areas I Contributed To

- **Finding secrets:** sortable/filterable table, search, folder navigation, favorites, and recent activity
- **Understanding details:** secret detail panel for quick inspection without losing context
- **Creating and updating secrets:** flows for multiple secret types and editing sensitive information
- **Sharing safely:** role/group-based permissions UX for viewer, editor, and admin access

### UX Decision: Detail Panel vs. Detail Page
While building the secrets detail flow, we realized the table needed to remain the user’s main workspace, not just a starting point. Users often needed to inspect a secret, check metadata, copy information, or review sharing details while staying oriented in the table/folder view.

A full detail page would have created repeated back-and-forth navigation. To reduce friction, we introduced a **Secret Detail Panel** that opened directly from the table.

This helped users:

- inspect secrets without losing context
- move faster between scanning and reviewing
- reduce repeated navigation
- keep the main workspace continuous

The tradeoff was maintainability. A senior engineer raised a valid concern that the panel could become a “second detail page,” duplicating UI logic and making the product harder to maintain.

I suggested resolving this by making the panel the **single read surface** for secret details and keeping a dedicated **Edit page** for changes.

This preserved the UX benefit of faster lookup while keeping the product structure easier to maintain.  

![secret detail panel]({{ site.url }}/img/pandora/git.png)

### Project Outcome

Pandora launched first as a beta for engineering users, then expanded to company-wide use. It became part of **Ubisoft’s official security training** and workflow and reached approximately **10,000 users** by the time I left.

### Reflection

Pandora shaped my interest in design because it showed me how much clarity, interaction patterns, accessibility, and maintainable systems matter in complex tools. Even though the product was security-focused, the core challenge was human: people needed to complete important tasks with trust, ease, and confidence.

This is the kind of work I want to keep growing in, using design thinking, craft, and curiosity about people’s needs to make complex systems easier to understand and use.