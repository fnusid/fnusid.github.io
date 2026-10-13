# fnusid.github.io

Personal research site of **Sidharth** — PhD student, Soundability Lab, University of Michigan.

Plain static HTML/CSS/JS, no build step.

| File | What it holds |
| --- | --- |
| `assets/js/data.js` | **All content**: news, publications, experience, education, talks. Edit this to update the site. |
| `index.html` | Home: bio, news, selected research, experience |
| `research.html` | All publications (filterable) and talks |
| `cv.html` | CV viewer; the PDF is `assets/cv/Sidharth_CV.pdf` |
| `assets/css/site.css` | Styles; colours are CSS variables at the top |

Add a paper thumbnail by placing an image in `assets/img/thumbs/` and setting `thumb: "assets/img/thumbs/name.png"` on the publication in `data.js`.

Pushing to `main` deploys via `.github/workflows/deploy.yml`.
