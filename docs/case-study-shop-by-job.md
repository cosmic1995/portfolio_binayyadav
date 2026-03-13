# Shop by Job

## Case Study · Lowe's India · 2025

---

## HOW TO USE THIS FILE

Every section of this case study is written and ready to paste. Where you see a line starting with `📸 VISUAL:`, that is a placeholder telling you exactly what image or artifact to add at that point — no design instructions, just what content to drop in. The writing works without the visuals, but the visuals make it a portfolio that gets read.

---

---

## HOOK

*This is what appears above the fold. A hiring manager reads this in 6 seconds and decides whether to keep going.*

---

### SHOP BY JOB

Led the end-to-end design of a job-first purchase feature for Lowe's Pro customers — from a self-identified problem through research, testing, and launch — delivering a **20% increase in transaction completion rates**.

**Role:** Lead UX Designer — full ownership, concept to launch
**Company:** Lowe's India Pvt. Ltd
**Year:** 2025
**Platform:** Web (desktop + responsive)
**Tags:** Product Design · UX Research · Usability Testing · Enterprise

---

---

## OVERVIEW

Lowe's Pro customers — professional contractors who run active job sites — are among the company's highest-value segment. They buy in volume, they buy repeatedly, and they know exactly what they need. The platform, however, was not built for them.

Shop by Job is a feature I identified, proposed, and designed from scratch. It restructures the Pro purchase journey around the job a contractor is doing — not the product department where the material happens to live — eliminating the disconnect between how contractors think and how the platform works.

The result was a 20% increase in transaction completion rates among Pro customers.

📸 VISUAL: Hero image — final UI of the Shop by Job feature (full-width, high fidelity). Show the job selection screen or the populated materials list. If you have both, prefer the one that shows job categories clearly (Plumbing, Electrical, Painting, Flooring, Drywall, Deck/Outdoor).

---

---

## THE PROBLEM

Three problems. Each one real on its own. Together, they made the Pro purchase experience actively work against the people it was supposed to serve.

---

### 1. Backwards

The platform was organised by product department. Contractors think in jobs.

A professional plumber doesn't arrive at Lowe's thinking "I need pipes, then I need fittings, then I need valves." They arrive thinking "I'm running rough-in plumbing for a two-bath renovation." Every material they need flows from that job context — but the platform forced them to translate their job into a series of individual product searches, each in a different section of the site.

This is not a minor inconvenience. It is a structural mismatch between the user's mental model and the product's model. The platform was designed for a consumer browsing one thing, not a professional managing a project.

---

### 2. Exhausting

The path to a complete project order was too long.

Building a full materials list through individual product searches required navigating multiple category pages, managing a growing cart, and keeping track of what had and hadn't been added — with no persistent job context to anchor any of it. The cognitive load of managing that process in addition to running an active job site was significant.

The data confirmed it: Pro customers were dropping off before completing purchase journeys that should have been straightforward. The friction wasn't at one point in the flow — it accumulated across every step.

---

### 3. Unforgiving

An incomplete order for a Pro customer has real professional consequences.

A consumer who forgets to add an item to their cart has a minor inconvenience. A contractor who arrives on a job site with an incomplete materials order has a delayed project, rescheduled labour, and the cost of a return trip to the store. The stakes of the purchase experience were fundamentally different for this user — and the design had never accounted for that.

📸 VISUAL: A flow diagram or annotated screenshot showing the old purchase path — the number of steps, category hops, or screens required to build a complete project order before Shop by Job existed. If you don't have the old screens, a simplified "steps required before vs after" comparison works just as well.

---

---

## THE OPPORTUNITY

This is not a UI problem. It is a mental model problem.

```text
Backwards   →   Job-first
Exhausting  →   Streamlined
Unforgiving →   Reliable
```

**Backwards → Job-first**
Reorganise the purchase entry point around what a contractor is *doing*, not what product category they are browsing. If the platform starts with the job, every subsequent decision becomes faster and more confident.

**Exhausting → Streamlined**
Reduce the steps between job context and checkout to the minimum necessary. The ideal path is: choose the job type, adjust quantities, confirm order. Three decisions, not thirty.

**Unforgiving → Reliable**
Design the feature so a complete project materials list is the default output — not something the contractor has to construct manually from memory. Reduce the risk of missed items at the point of ordering, not after the fact.

**The design question this shaped:**
*How might we let a Pro customer start with the job they're doing and arrive at a complete, ready-to-order materials list in as few steps as possible?*

---

---

## RESEARCH & DISCOVERY

I did not wait for a research brief. I identified the problem myself, defined the research approach, and ran it before proposing the solution to the product team.

**Methods used:**

- Secondary research — Lowe's Pro customer data, industry reports on contractor purchasing behaviour, competitive analysis of B2B procurement tools
- Direct sessions with 1–2 professional contractors — exploratory interviews focused on how they currently plan purchases for a job and where the existing platform fails them
- Journey mapping of the current Pro purchase flow — mapping every step from job context to completed cart

**What the research confirmed — and what it sharpened:**

The secondary research told me contractors think in jobs. The direct sessions told me *why* that matters in a way the data couldn't: contractors described managing a mental checklist of required materials while simultaneously navigating a platform that had no concept of that list. They were holding the job in their head while the platform asked them to forget it.

One finding redirected the design early: the problem was not just that the flow had too many steps. It was that none of the steps were connected to a job context. Even a shorter flow that started in the wrong place would have the same fundamental problem. The solution had to start with the job, not just be a shorter version of the existing flow.

Journey mapping surfaced where the drop-off was happening: not at checkout, but mid-flow, when the mental effort of maintaining job context while navigating department categories became unsustainable.

📸 VISUAL: Your journey map from this project — even a simplified version showing the old flow with annotated friction points. If you have a whiteboard photo or Miro board from the research synthesis phase, that works even better (it shows the work was real).

---

**The Pro Customer — who this was designed for:**

Not a consumer browsing options. A professional with a schedule, a crew, and a client waiting. They have a fixed job type, they know their material quantities from experience, and they expect a professional-grade tool that reflects how they actually work. Their tolerance for a platform that treats them like a first-time retail shopper is zero.

📸 VISUAL: Your user persona for the Pro contractor — if you have one. Keep it summary format: job title, key behaviour ("plans purchases by job type, not by product category"), and pain point ("drops off when the platform doesn't match how they think"). No need for full persona template.

---

---

## DESIGN PROCESS

### What I started with

The first version of the flow started at the product level — an improved search experience with better filtering for Pro users. I scrapped it.

The research had made something clear: a better search is still a search. It still requires the contractor to know the product name, navigate to the right department, and build the cart piece by piece. Improving the existing model was solving the wrong problem. The feature needed a different entry point entirely.

📸 VISUAL: Early lo-fi wireframe or sketch of the first discarded approach — the improved search concept. Even a rough Figma frame or whiteboard sketch. Shows the decision to change direction was deliberate, not accidental.

---

### The model that replaced it

Starting from the research finding — contractors organise their work by job type — I designed the feature around a simple decision tree:

**What job are you doing?** → **Here are the materials you'll need.** → **Adjust and order.**

The job categories I defined from research: **Plumbing, Electrical, Painting, Flooring, Drywall, Deck/Outdoor.** These are the six job types that appeared most consistently in secondary research and contractor interviews as the recurring purchase contexts for the Pro segment.

📸 VISUAL: Early IA diagram or Figma flow showing the job-first decision structure — job category selection → materials list → quantity adjustment → cart. Even a simplified flow works here.

---

### What failed in testing — and what changed

I ran one round of usability testing with Pro customers before finalising the design. The job-first model was validated immediately — contractors understood it without instruction. That part worked.

What did not work: the path from the populated materials list to checkout had too many steps. The initial design included a review screen between the materials list and cart confirmation that required contractors to make decisions they had already made. It was redundant — a step that existed because of how the design was built, not because the user needed it.

I removed the intermediate review screen. The flow collapsed from five steps to three: select job → adjust quantities → add to cart. Task completion in the follow-up iteration improved significantly.

📸 VISUAL: Side-by-side comparison of the v1 flow (5 steps, with the redundant review screen) and the revised flow (3 steps). Annotate the removed step and why. This is the most powerful thing you can show in this section — a design decision that was changed because of evidence.

---

### Design system alignment

All components built on Backyard Design System 4. This kept the feature visually consistent with the broader Lowe's Pro experience and reduced handoff friction with engineering — specifications were tied directly to existing DS4 tokens and components rather than bespoke styles.

---

---

## THE SOLUTION

Three problems. Three design responses. Each one a direct answer to what was named at the start.

---

### Job Selector — solving Backwards

The entry point to Shop by Job is not a product search. It is a job type selection.

Six clearly labelled job categories — Plumbing, Electrical, Painting, Flooring, Drywall, Deck/Outdoor — are presented at the top of the Pro purchasing flow. The contractor selects the job they are working on. That single selection determines everything that follows.

No search query. No department navigation. The platform starts where the contractor starts.

📸 VISUAL: Final hi-fi screen of the job selector — the six category cards with icons. Show it in the context of the broader page layout, not just the component in isolation.

---

### Pre-built Materials List — solving Exhausting

Once a job type is selected, the platform populates a complete materials list for that job — the items a contractor would typically need to execute it.

The list is not locked. Quantities are editable inline. Items can be added or removed. But the default state is already a complete, accurate starting point — the contractor is adjusting, not building from scratch.

This collapses the cognitive load of the old flow. Instead of holding a mental materials checklist while navigating category pages, the contractor sees the list already built and makes incremental adjustments. The effort shifts from construction to confirmation.

📸 VISUAL: Final hi-fi screen of the populated materials list — show a specific job type (e.g. Plumbing) with items listed, quantities shown, and the add/remove controls visible. If you have an interaction recording of the quantity edit, that would be ideal to show the micro-interaction.

---

### Direct-to-Cart — solving Unforgiving

From the materials list, the path to checkout is one action: add the full project order to cart.

No intermediate review. No back-and-forth between pages. The contractor confirms their selections and the order is built — complete, in a single flow, without requiring them to track what they have and haven't added.

The risk of a missed item on site is reduced at the point of ordering, not discovered on arrival.

📸 VISUAL: Final hi-fi screen of the cart confirmation or the transition from materials list to cart — show the completed order with the job type visible as context. If you have a connected screens view (materials list → cart), even better.

---

### Full flow — connected screens

📸 VISUAL: A connected screens or flow view showing all three steps in sequence: Job Selector → Materials List → Cart. This is the "reveal" visual for the whole case study. It should show the simplicity of the path — three steps, clean, direct.

---

---

## RESULTS

The 20% increase in transaction completion rates was measured against the previous Pro purchase flow for the same job categories and customer segment.

---

**+20%**
Transaction completion rates — Pro customers who started a purchase journey and completed it, compared to the previous individual-search flow.

---

**What this meant for the business:**
Pro customers are Lowe's highest-value segment. A 20% improvement in their purchase completion rate is not a UX win — it is a revenue impact. Every completed purchase that previously dropped off mid-flow is a recovered transaction.

**What this meant for the user:**
Pro contractors completed orders they had previously abandoned. The purchase journey they had been working around — or avoiding entirely — became a tool they could actually use.

---

---

## STRATEGIC CONSIDERATIONS

*What it took beyond the design work.*

---

**I proposed this project.** It was not a brief handed to me. I identified the problem, structured the research, presented the case for building it, and got alignment from the product and operations teams before any design work started. Making that case required framing the problem as a business problem — not a UX complaint — and showing the opportunity in terms of completion rate improvement before there was any data to prove it.

That framing shaped how the project was received, resourced, and prioritised.

---

**The taxonomy was a constraint, not a creative decision.** The six job categories — Plumbing, Electrical, Painting, Flooring, Drywall, Deck/Outdoor — were not chosen for aesthetic or structural reasons. They were validated against contractor research and existing Pro purchasing data to ensure the categories reflected actual job patterns. Categories that seemed logical from a product perspective but didn't match how contractors talk about their work were excluded. This required direct conversation with the product and merchandising teams to align on what "job-first" actually meant in practice.

---

**I scoped the MVP deliberately.** The first version of Shop by Job covers the six most common job categories. There are others. The decision to start with six — rather than building the full range — was a deliberate trade-off between launch speed and coverage. A feature that launches well for six job types builds more trust with Pro customers than a feature that launches inconsistently across twenty. The data from the initial six will inform the expansion roadmap.

---

---

## REFLECTION

### What I'd do differently, and what this project taught me

---

**I would have done more direct contractor sessions earlier.** I made a pragmatic call — secondary research plus one or two direct interviews was enough to validate the core insight and move into design. That call was right for the timeline. But the usability testing revealed a flow problem (the redundant review screen) that earlier qualitative sessions would likely have surfaced. The extra sessions would have cost a week. Removing the review screen at the testing stage cost more.

**The self-initiation was the hardest part.** Designing a feature is one skill. Making the case for it from scratch — to product managers, operations leads, and development teams who have other priorities — is a different skill. I had to learn how to translate a design observation into a business argument before I had any data to support it. That experience changed how I approach every project since: I now write the business case before I write the design brief.

**The taxonomy insight surprised me.** I expected the main research finding to be about steps — too many clicks, too long a path. The research confirmed that. But the deeper finding — that the problem was not the length of the path but where it started — was not what I was looking for. I found it because the contractor sessions kept returning to the same moment: the moment the platform asked them to think in product categories instead of job context. That moment, repeated across multiple sessions, is where the solution came from. It is a good reminder that the most useful research findings are often not the ones you designed the research to find.

---

---

## METADATA

| Field | Detail |
| --- | --- |
| Role | Lead UX Designer — full ownership, concept to launch |
| Company | Lowe's India Pvt. Ltd |
| Year | 2025 |
| Status | Launched |
| Tools | Figma · Miro · Backyard Design System 4 |
| Methods | Secondary research · Contractor sessions · Journey mapping · Usability testing · Iterative prototyping |
| Team | Cross-functional — UX, Product, Engineering, Operations, Merchandising |

---

*All metrics sourced from Lowe's India internal measurement — 2025.*
*Case study written for: binayyadav.netlify.app*
