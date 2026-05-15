# Lin Zhang Portfolio

This is Lin's personal portfolio website, built with Jekyll and hosted on GitHub Pages.

## Local Development

This project uses Jekyll, so it needs to be served with Jekyll locally instead of opening the HTML files directly or using a basic static server.

### 1. Install dependencies

```bash
bundle install
```

### 2. Run the local server
```bash
bundle exec jekyll serve
```

### 3. Open the site

Visit: http://localhost:4000


### Project Structure
```
├── _config.yml        # Jekyll site configuration
├── _layouts/          # Page layouts
├── _includes/         # Reusable template partials
├── _projects/         # Portfolio project content
├── assets/ or css/    # Styles and static assets
├── index.html         # Homepage
├── projects.html      # Projects page
├── Gemfile            # Ruby/Jekyll dependencies
└── Gemfile.lock       # Locked dependency versions
```

### Updating Portfolio Projects

Portfolio project entries are managed through the `_projects/` folder.

### To add or update a project:

Create or edit a file in `_projects/`
Update the project front matter, such as title, category, role, and description
Add or revise the project content
Run the site locally to check the page
bundle exec jekyll serve

### Deployment

This site is deployed through GitHub Pages from the repository:

`linzhangcs.github.io`

After changes are merged or pushed to the publishing branch, GitHub Pages will rebuild and publish the site automatically.