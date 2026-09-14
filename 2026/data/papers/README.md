# HAT 2026 paper PDFs

This directory contains the four author-supplied accepted-paper PDFs. GitHub Pages
serves these static files together with the rest of the website. No separate file
hosting service or upload backend is needed. The PDFs are unchanged copies of the
supplied documents.

Use stable, descriptive, lowercase filenames with hyphens, for example
`first-author-short-title.pdf`. Avoid spaces and personal contact details in filenames.

The accepted-papers page is `2026/papers/index.html`. Its four entries use stable
IDs `paper-01` through `paper-04`, in the organizer-supplied order. Each entry has
the paper title (and subtitle where present), the complete author list in PDF
order, affiliations, paper type, original abstract, and a relative PDF link.

| Entry | Authors | Type | File |
| --- | --- | --- | --- |
| `paper-01` | Jawwad Shadman Siddique | Position paper | `siddique-cognitive-automation-boundary.pdf` |
| `paper-02` | Manaswi Saha | Position paper | `saha-behavioral-science-human-ai-teaming.pdf` |
| `paper-03` | Jing Li, Jinliang Li | Full paper | `li-teaming-needs-scoreboard.pdf` |
| `paper-04` | Hamed Khosravi, Xiaoming Huo | Full paper | `khosravi-team-audit.pdf` |

Paper types and the primary authors' affiliations come from the organizer.
Coauthors and their affiliations come from the PDFs. Hamed Khosravi's school is
provided by the organizer and is attributed only to him; Xiaoming Huo is listed
at Georgia Institute of Technology, as printed in the PDF.

From the accepted-papers page, a PDF link can use the relative path
`../data/papers/first-author-short-title.pdf`. Relative PDF links keep the files
on the same site and work under a GitHub Pages project path as well.

For updates, edit the corresponding entry in `2026/papers/index.html` and keep
its PDF link and displayed page count in sync. Native HTML `details` elements
let readers expand the abstracts without requiring JavaScript. Example markup:

```html
<p class="paper-authors">Author names in paper order</p>
<p class="paper-affiliations">Author affiliations</p>
<details class="paper-abstract">
  <summary>Read abstract</summary>
  <p>The paper's abstract.</p>
</details>
<a class="cta-button cta-secondary"
   href="../data/papers/first-author-short-title.pdf">Read Paper (PDF)</a>
```

The site uses no external PDF storage or embedded third-party PDF viewer.
