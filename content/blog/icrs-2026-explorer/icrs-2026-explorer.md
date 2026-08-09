---
title: "ICRS 2026 Explorer"
date: "2026-07-26T12:00:00.000Z"
description: "Interactive map, emissions estimates, and co-authorship network for ICRS in Auckland."
excerpt: "Contact speakers, explore talks, author connections, and travel footprints for the International Coral Reef Symposium 2026."
category: "general"
draft: false
---

The <a href="https://www.icrs2026.nz/" target="_blank" rel="noopener noreferrer">International Coral Reef Symposium (ICRS)</a> in Auckland last week was arguably the highlight of my coral career so far.

It was also overwhelming: with 2000+ _incredibly cool_ delegates delivering 2061 presentations, naturally things got missed.

While I saved loads of contacts in the notes function I added to <a href="https://github.com/nirivas/icrs2026" target="_blank" rel="noopener noreferrer">Nico Rivas' awesome conference app</a>, there were loads of talks I couldn't attend but still want to follow up on. And probably so many more talks and presenters I missed completely.

I helped myself by creating this app. I hope it will help others too!

---

**ICRS 2026 Explorer** is an interactive collaboration companion for the International Coral Reef Symposium in Auckland:

- **Map** – visualise where everyone's from, which institutes are working on what: searching a keyword (e.g. 'bleaching') highlights all institutes with 'bleaching' in a talk title/abstract
- **Network** – view which talk authors are connected to others. Selecting an author displays their contact information and institutional web page and the talks on which they are listed. Selecting one of these talks displays the abstract and co-authors, allowing you to navigate to these co-authors' nodes and connections! There is also a 'similar talks' suggestion allowing you to explore the area further. You can also highlight nodes via their key terms (e.g. 'bleaching')
- **Emissions** – many of us (myself included) came a very long way to be here. The associated emissions – calculated from characteristic flights taken to get from your institute to Auckland – are considerable. This feels rather uncomfortable given our commitment to protect the future of reefs. Several talks mentioned individual accountability for emissions reductions, and I've codified this into a map. Search your name and log that you've offset your travel, turning your portion of your affiliation green. Of course, offsets are far from perfect, but when done well they are better than nothing – and certainly send a message of intent.

I'd love to hear from you if you have any thoughts, recommendations, or suggestions about this tool! See below for an in-depth methodology.

<div class="not-prose blog-site-embed">
  <a class="blog-site-embed-banner" href="/explore-icrs-2026/" target="_blank" rel="noopener noreferrer">
    <span class="blog-site-embed-banner-label">Open explorer</span>
    <span class="blog-site-embed-banner-url">orlando-codes.com/explore-icrs-2026</span>
    <span class="blog-site-embed-banner-arrow" aria-hidden="true">↗</span>
  </a>
  <iframe
    title="ICRS 2026 Explorer"
    src="/explore-icrs-2026/"
    loading="lazy"
    height="900"
  ></iframe>
</div>

---

## Contents

## Contents

- [Contents](#contents)
- [Contents](#contents-1)
- [Overview](#overview)
- [Data sources](#data-sources)
  - [Delegate list](#delegate-list)
  - [Presentation titles, abstracts, and co-authorship](#presentation-titles-abstracts-and-co-authorship)
- [Data processing](#data-processing)
  - [`pdf` ingestion](#pdf-ingestion)
  - [Aliases](#aliases)
  - [Geocoding](#geocoding)
- [Network construction](#network-construction)
  - [Contacts](#contacts)
- [Emissions](#emissions)
- [Ethics, privacy, and protection](#ethics-privacy-and-protection)
- [Reproducibility](#reproducibility)
- [Caveats and limitations](#caveats-and-limitations)
- [Application structure](#application-structure)
  - [Design choices](#design-choices)


## Overview
## Data sources

### Delegate list
Delegate information was taken from the [delegate list](https://airdrive.eventsair.com/eventsairaueprod/production-innovators-public/20d10b81d8cd43ad9b0fc3a08e5695f4) generated on Thursday July 9th 2026. This list was provided by email to delegates on the same day. The pdf was processed to via the commandline [`poppler`](https://poppler.freedesktop.org/) package (version `26.08.0`).

### Presentation titles, abstracts, and co-authorship
A `json` file containing presentation information (for both orals and posters) was obtained from the [black-market conference app GitHub](https://github.com/nirivas/icrs2026/tree/1070ded75c43f3e40c932d634640a4d5ab43e37b). This in turn was scraped from the [conference website](https://innovators-icrs2026programme.eventsairsite.com/) via the [associated API](https://azure.microsoft.com/en-gb/products/functions/).

## Data processing
### `pdf` ingestion
Extracting text from a semi-structured `pdf` is often non-exact – there were numerous errors in reading and organising text into a structured dataframe:

| < first name > | < last name > | < organisation > | < country > |.

There were also issues with reading accented characters; the same organisation referred to by different names etc. Cleaning was largely automated but manually verified.

### Aliases
Thank goodness I find data cleaning satisfying (with a pinch of soul-destruction). In many cases (20%!), `delegate name from delegate list` $\neq$ `delegate name from presentation` information. These had to be standardised to make sure delegates weren't duplicated. 80% matched perfectly, an algorithmic + [fuzzy name matching](https://en.wikipedia.org/wiki/Approximate_string_matching) process partially matched 13.6% and failed to match 6.9% – these were all manually reviewed.

Similarly, affiliations were occasionally mis-spelt or referred to by different names e.g. 'University of California at Berkeley' and 'University of California - Berkeley'. These were standardised to a single name.


### Geocoding
The locations of delegates' affiliated institutes were geocoded via the [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding). These were manually verified through the following steps:
- Geocoding precise - allow.
- Geocoding imprecise (no exact address returned, usually because there were multiple results e.g. multiple university campuses) – search manually and take the largest/most central location e.g. main rather than satellite campuses.
- Geocoding failed – search online e.g. company website to look for head offices. If no address available, fall back to state/country capital (see [Caveats and limitations](#caveats-and-limitations)).


## Network construction

### Contacts
Institutional webpages were scraped from the web using the [Brave Search API](https://brave.com/search/api/). For the top 410 delegates (those with standardised institutional emails and/or the most co-authorships) these are supplemented with manually-verified email addresses. In addition, the option to copy the delegates' details (full name and affiliation) to clipboard as well as a link to their name and affiliation searched via Linkedin and Google Scholar aim to speed up searching for a specific contact online. See [Ethics, privacy, and protection](#ethics-privacy-and-protection).

## Emissions
## Ethics, privacy, and protection
While institutional pages and publically-listed email addresses available online – and presumably intended to be found – grouping it all in one location online may make it easier for bad actors and bots to misuse.


## Reproducibility
Processing results are cached wherever possible to reduce time and computational load.

## Caveats and limitations

- **Inaccurate/out of date delegate list** – the delegate list was provided 10 days before the start of the conference. A number of people who appear on that list withdrew at the last minute, and may not have made the trip to Auckland at all. *This would overestimate the emissions directly attributable to those delegates – although most would have had a travel ticket booked, likely leading to an empty seat on a plane.*
- **Co-authorship** – classed as any person appearing on the authorship of the conference presentation: it should be noted that this may have changed between applying to the conference and delivering the presentation. It also does not imply that the project is published.
- **Contradictory affiliation locations** – a large number of delegates listed institutional affiliations e.g. 'University of California - Berkeley' in a different country from the institute e.g. 'India' rather than the 'United States'. It is unclear whether this is a mistake or whether the delegate is working at an offshoot of their parent organisation in the country named. These were unpicked where possible e.g. of course 'the Nature Conservancy Venezuela, Bolivarian Republic of' implies that the delegate works for TNC in Venezuela. Where not possible to decipher, the location of the parent institute i.e. 'University of California - Berkeley' was preferred.
- **Affiliations with no location** – many delegates belonging to international or small organisation do not have an obvious working location. Where location was impossible to estimate from the affiliation (and believe me, I searched manually wherever necessary!), the capital city of the state/country was used as a fallback e.g. an organisation with country 'United States' but no obvious location would be assigned to its state capital if the state was mentioned in the name; New York if not.


## Application structure

### Design choices