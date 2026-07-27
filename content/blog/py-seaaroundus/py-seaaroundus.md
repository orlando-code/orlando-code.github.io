---
title: "py-seaaroundus"
date: "2026-07-08T21:35:09.000Z"
description: "Python wrapper for the Sea Around Us fisheries API."
excerpt: "Easy access to the Sea Around Us database: quantity and valuation of national fisheries data disaggregated by e.g. catch type, fishing sector etc."
category: "package"
draft: false
cover: pysea-cover.png
coverAlt: "The value of national reef fisheries around the world in 2019"
coverFit: contain
---

While looking to quantify the effect of reef degradation on the ecosystem services they provide, I was in search of a global dataset of the value of reef fisheries.

I came across the [Sea Around Us](https://www.seaaroundus.org/), a project run from the University of British Columbia, Canada, which produces estimates of temporal trends in national fishery catches by synthesising multiple data sources. These data are disaggregated into sub-categories including fishing sector (commercial, industrial, subsistence), functional group (everything from small reef-associated fish to large sharks, via shrimps) and many others.

This data seemed perfect for my use case, but had one problem: I couldn't find a way to download it at scale. An R library advertised on the [Tools Guide](https://www.seaaroundus.org/tools-guide/) 404-ed, and I wasn't about to click through country by country...

With the considerable help of [this fork of the original library](https://github.com/theAbby/seaaroundus) – mine is basically just an up-to-date version with a few more bells and whistles – I implemented a rapid and lightweight Python implementation, [py-seaaroundus](https://pypi.org/project/py-seaaroundus/) which uses local caching to avoid heavy API usage.

I hope it will help you too!


```bash
pip install py-seaaroundus
```

## Demo notebook

The `economics_figures.ipynb` notebook walks through region lookup, catch time series, caching, batch downloads, and optional charts.

<div class="not-prose blog-notebook-embed">
  <a class="blog-site-embed-banner" href="/blog/py-seaaroundus/economics_figures.html" target="_blank" rel="noopener noreferrer">
    <span class="blog-site-embed-banner-label">Open notebook</span>
    <span class="blog-site-embed-banner-url">economics_figures.ipynb</span>
    <span class="blog-site-embed-banner-arrow" aria-hidden="true">↗</span>
  </a>
  <iframe
    title="py-seaaroundus economics figures notebook"
    src="/blog/py-seaaroundus/economics_figures.html"
    loading="lazy"
    height="900"
  ></iframe>
</div>

<p class="blog-embed-links">
  <a href="/blog/py-seaaroundus/economics_figures.html" target="_blank" rel="noopener noreferrer">Open full notebook</a>
  ·
  <a href="/blog/py-seaaroundus/economics_figures.ipynb" target="_blank" rel="noopener noreferrer">Download .ipynb</a>
  ·
  <a href="https://github.com/orlando-code/py-seaaroundus" target="_blank" rel="noopener noreferrer">View on GitHub</a>
</p>
