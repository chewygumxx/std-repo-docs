---
ctime: 2026-11-05
mtime: 2026-11-05
spdx: GPL-3.0-only
title: "Conversation with ChatGPT: Standardisation of Repository Documentation of Decisions"
description:
tags:
  - docs
  - decisions
  - adr
  - chatgpt
  - llm
---

<!--
   -
   - ~chewygumxx/std-repo-docs.git
   - ::: :/docs/notes/2026-11-05_chatgpt-conversation-decisions-docs-specification.md
   -
   -->

# Conversation with ChatGPT: Standardisation of Repository Documentation of Decisions

## chewygumxx Prompt 1

Please improve the wording of the following markdown.

```markdown
<!--
   -
   - ~chewygumxx/repository.git
   - ::: :/docs/wiki/decisions.md
   -
   -->

# Decisions

[Docs Home](./../README.md)

This page records the choices that shaped this repository, or that shape what is
planned, were made. The topic pages say what exists now; an entry here
links them and does not explain the mechanism again. Entries are grouped
by the seven subjects of the [records index catalogue](./records.md), and each
rests on a ruling, a specification's decision or roadmap revision.

Minor implementation rulings stay in their reports.

Each entry is one list of bold lead-ins:

- **Context**: What prompted the choice.
- **Alternatives**: What else was weighed or rejected, where the record
  says. A choice that records no alternative says so.
- **Choice**: What was chosen, and who chose when the record says. A
  specification's decision table often does not name who ruled; the entry
  then says so, and no approval is inferred from a specification existing.
- **Reason**: The reason the record gives. `Reason: Unspecified` marks a
  decision whose record gives none.
- **Cost**: The cost if wrong, or the cost the record names.
- **Standing**: Current, superseded (by which later decision) or revisited,
  with its date.
- **Sources**: The records and, where useful, the page that shows the
  present.
```

---

## ChatGPT Response 1

I've tightened the wording, removed awkward constructions, and made the
descriptions more consistent while preserving the distinction between
documented decisions, inferred authority, and missing evidence.

```markdown
<!--
   -
   - ~chewygumxx/repository.git
   - ::: :/docs/wiki/decisions.md
   -
   -->

# Decisions

[Docs Home](./../README.md)

This page records decisions that have shaped the repository or its planned
direction. While topic pages describe the current state, entries here document
the decisions behind it and reference their supporting records without
repeating implementation details.

Decisions are organised under the seven subjects defined in the records index
catalogue. Each entry is grounded in a documented ruling, specification
decision, or roadmap revision.

Minor implementation decisions remain in their respective reports.

Each entry follows a consistent structure using the following fields:

- **Context**: The circumstances or requirements that prompted the decision.
- **Alternatives**: Other options considered or rejected, where documented. If
  no alternatives were recorded, this is explicitly stated.
- **Choice**: The decision made and, where documented, who made it. If the
  decision-maker is not identified, this is stated explicitly. A decision
  recorded in a specification does not, by itself, establish approval or
  authority.
- **Reason**: The documented rationale for the decision. `Reason: Unspecified`
  indicates that no rationale was recorded.
- **Cost**: The potential consequences of an incorrect decision or any costs
  explicitly identified in the supporting records.
- **Standing**: The decision's current status (current, superseded, or
  revisited) with the relevant date and, where applicable, a reference to the
  superseding decision.
- **Sources**: The supporting records and, where relevant, documentation
  describing the current implementation.
```

### Editorial considerations

Two distinctions are particularly worth preserving:

#### Decision vs. Approval

A specification's decision table establishes that a
choice was documented, but not necessarily that it was formally authorised. The
revised **Choice** field preserves that distinction without over-explaining it.

#### Historical vs. Current State

The **Standing** field is especially important because this document serves as
a decision history rather than another description of the implementation.
Referencing superseding decisions helps readers trace how the repository's
direction evolved.

**One potential refinement**: Consider renaming **Cost** to **Consequences** if
entries will frequently describe architectural risks, maintenance burdens,
reversibility, or opportunity costs rather than strictly financial or resource
costs. _Consequences_ is broader, although _Cost_ remains appropriate if your
existing records consistently use that terminology.

---

## chewygumxx Prompt 2

It is originally from the beginning of this file of my repository hosted at
[GitHub chewygumxx/dorothy][repo-dorothy]. I wish to standardise it for
potential application within other repositories and potentially even an agent
skill.

> [Attached: decisions.md][attach-decisions]

---

## ChatGPT Response 2

That changes how I'd approach the standardisation. Having examined the
[chewygumxx/dorothy Decisions][dorothy-decisions],
[chewygumxx/dorothy Records][dorothy-records], and
[chewygumxx/dorothy Wiki home][dorothy-wikihome]
in Dorothy, I think you've already developed the foundations of a useful
repository-independent decision documentation methodology.

I'd preserve its existing structure while separating three concerns: the
reusable documentation convention, repository-specific organisation, and the
procedures an agent follows to maintain it.

### 1. What makes your existing approach distinctive

Your [`decisions.md`][attach-decisions] isn't quite a conventional
[Architecture Decision Record (ADR)][adr-arch-decision-docs] .

<!-- spellchecker:words Nygard -->

Traditional ADR approaches, including
[Michael Nygard's format and MADR][adr-templates], generally create individual
records when decisions are made. These document context, the decision itself,
its consequences, and sometimes the alternatives considered.

Dorothy's approach is somewhat different.

It's a **retrospective, evidence-backed decision index** that reconstructs
significant choices from specifications, reports, roadmap revisions, and other
historical records.

Its value comes from three principles:

- **Evidence over inference**: A specification containing a decision doesn't
  necessarily establish who authorised it, nor does implementation prove why it
  was chosen.
- **Historical reasoning ver implementation detail**: The index explains why
  something was decided. Reference documentation explains what currently
  exists.
- **Continuity over time**: Decisions can be revisited, superseded, or partially
  implemented without losing their original rationale.

These principles already appear throughout your document, including the
requirement to distinguish undocumented information from recorded facts.
([decisions.md][attach-decisions] Lines 26-48)

I would standardise those principles rather than replace them with an existing
ADR convention.

### 2. Proposed repository-independent wording

This version preserves all seven original fields, removes Dorothy-specific
assumptions, and introduces a few rules intended to make the format reliable
across repositories.

```markdown
# Decisions

This document records significant decisions that have shaped the project or\
continue to guide its development. Each entry preserves the circumstances,\
alternatives, rationale, consequences, and supporting evidence behind a\
decision, together with its current standing.

The purpose of this document is to preserve **why decisions were made**, not\
to duplicate descriptions of their implementation. Reference documentation\
describes the project's current state; this document traces the decisions\
behind it and links to relevant documentation where appropriate.

Decisions are organised by subject, following the project's documentation\
structure where one exists. Entries are derived from supporting records,\
including specifications, design documents, implementation reports, roadmap\
revisions, and explicitly documented directives.

Only decisions with meaningful architectural, operational, or strategic\
implications belong here. Minor implementation decisions remain in their\
respective records.

## Entry structure

Each decision is documented under a descriptive heading, followed by a list\
of consistently ordered fields:

- **Context**: The circumstances, requirements, or constraints that\
  prompted the decision.
- **Alternatives**: Other approaches considered or rejected, including\
  their documented trade-offs. State when no alternatives were recorded.
- **Choice**: The decision made, including its date and decision-maker\
  where documented. Neither authorship nor approval may be inferred solely\
  from the existence of a specification or implementation.
- **Reason**: The documented rationale for the decision. Use\
  `not recorded` when no rationale is available.
- **Cost**: The documented or reasonably established trade-offs, risks,\
  limitations, or consequences of the decision, including the potential\
  cost of an incorrect choice. Distinguish recorded costs from\
  independently identified risks.
- **Standing**: The decision's current validity and any subsequent\
  revision, replacement, or reconsideration. Include relevant dates and\
  references to subsequent decisions. Distinguish a decision's standing\
  from its implementation status.
- **Sources**: References supporting the decision and its interpretation,\
  including links to current documentation where useful.

## Documentation principles

Entries must remain faithful to their supporting records. Missing\
information must be identified rather than inferred, reconstructed, or\
presented as established fact.

Distinguish proposals from adopted decisions, recorded rationale from\
subsequent interpretation, and documented authority from assumed approval.

When a decision changes, preserve its original context and identify the\
subsequent decision responsible for the change. Do not silently rewrite\
historical reasoning to reflect present circumstances.

Keep entries concise and focused on decision-making. Refer readers to\
supporting records for implementation details, extended analysis, and\
verification results.
```

I deliberately omitted frontmatter, navigation links, absolute paths, and fixed
subject categories. Those are integration details that should be supplied by
the adopting repository rather than imposed by the convention.

### 3. Refinements I'd make before formalising the convention

There are three subtle ambiguities worth addressing.

#### A. Standing versus implementation status

Your existing entries sometimes use Standing to describe a decision's validity
and sometimes to describe implementation progress.

For example, a decision can be current and approved while its implementation
remains incomplete.

I would define these independently.

| Dimension            | Possible values                                                     |
| -------------------- | ------------------------------------------------------------------- |
| Decision standing    | Proposed, current, superseded, withdrawn                            |
| Implementation state | Planned, in progress, implemented, partially implemented, abandoned |
| Historical events    | Revisited, amended, reaffirmed                                      |

You needn't introduce an eighth field immediately. Standing can contain both
dimensions as long as they're distinguishable.

Also, revisited describes an event rather than necessarily a current standing:
a decision can be revisited and subsequently reaffirmed.

#### B. Cost versus consequences

Your existing Cost field has a valuable distinction that I wouldn't discard:
the cost of making a particular decision versus the cost of discovering that it
was wrong.

However, the proposed generalisation introduces a potential evidentiary
problem.

If an agent identifies a plausible risk that isn't in the underlying records,
should that be included?

I'd allow it only when explicitly attributed as subsequent analysis, not as the
original decision-maker's reasoning.

For a particularly rigorous convention, you could eventually use Consequences
instead, encompassing both favourable and adverse effects.

I wouldn't make that change yet.

#### C. Consistent representation of missing information

I'd standardise on a single representation:

`not recorded`

This is preferable to alternating among `unspecified`, `unknown`, `none`, and
`not recorded`.

These have different meanings:

- `none`: The source explicitly establishes that none existed.
- `not recorded`: The available evidence does not establish whether any
  existed.
- `unknown`: A broader assertion about knowledge, rather than simply the
  documentary record.

That distinction becomes especially valuable when agents produce or update the
index.

### 4. Turning the convention into an agent skill

This is where the approach becomes particularly interesting.

The documentation template itself is not really a skill. The skill would be the
procedure for discovering, substantiating, reconciling, and maintaining
decisions.

That procedural dimension makes it well suited to Agent Skills.

<!-- spellchecker:words agentskills -->

The current [Agent Skills specification][spec-agentskills] supports a
`SKILL.md` containing instructions and optional supporting resources, including
templates. ([GitHub agentskills/agentskills][repo-agentskills])

I'd separate the reusable assets like this:

```text
decision-history/
├── SKILL.md
├── references/
│   └── conventions.md
└── assets/
    └── decisions.md
```

Here, `SKILL.md` would govern the agent's workflow. `references/conventions.md`
would establish field definitions, evidence requirements, and status semantics.
`assets/decisions.md` would contain the repository-independent template.

The skill's essential responsibilities would be to:

1. Discover the repository's historical records and current reference
   documentation.
2. Identify significant decisions, including decisions that supersede earlier
   ones.
3. Extract context, alternatives, choices, reasoning, and costs without
   inventing missing evidence.
4. Reconcile historical decisions with subsequent records and current
   implementation.
5. Produce or update the decision index while preserving source traceability.

One additional safeguard would be useful: A skill should report insufficient
evidence rather than manufacture a complete-looking entry.

For example, discovering a database migration does not establish why the
database was replaced or who approved the replacement. The skill can identify
the migration as a candidate for investigation, but it shouldn't invent the
associated decision.

### 5. An architectural recommendation

I would avoid making Dorothy's `docs/wiki/decisions.md` itself the canonical
specification for this methodology.

Instead, define a reusable convention that Dorothy adopts alongside other
repositories. The distinction is important:

| Component                | Responsibility                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| Documentation convention | Defines what constitutes a decision entry and how it must be represented.                         |
| Repository configuration | Defines where records live, how subjects are organised, and which documentation is authoritative. |
| Agent skill              | Implements the procedure for extracting, validating, and updating decisions.                      |
| Decision index           | Contains the actual project-specific decision history.                                            |

This separation should also prevent the convention from accumulating
assumptions about Dorothy's particular documentation architecture.

One final consideration: I'd name the prospective skill `decision-history`
rather than `architecture-decision-records`.

The latter suggests conventional ADR creation, whereas your methodology covers
architecture, project governance, operational policy, implementation strategy,
and the evolution of previously adopted decisions.

`decision-history` communicates the historical and evidentiary emphasis without
restricting the subject matter.

My preference would be to keep Context, Alternatives, Choice, Reason, Cost,
Standing, Sources as the stable field vocabulary. The seven fields are already
expressive enough; the greatest opportunity for standardisation lies in
defining their semantics and governing how agents establish the evidence behind
them.

---

## chewygumxx Prompt 3

I am very much invested in further formalising the foundational convention
before further developing repository documentation apparatus dependant upon it
and I greatly appreciate your proposed conjecture.

Does this amended version further clarify?

```markdown
# Decisions

[Docs Home](./../README.md)

This document records significant decisions that have shaped the project or
continue to guide its development. Each entry preserves the circumstances,
alternatives, rationale, consequences, and supporting evidence behind a
decision, together with its current standing.

The purpose of this document is to preserve **why decisions were made**, not
to duplicate descriptions of their implementation. Reference documentation
describes the project's current state; this document traces the decisions
behind it and links to relevant documentation where appropriate.

Decisions are organised by subject, following the project's documentation
structure where one exists. Entries are derived from supporting records,
including specifications, design documents, implementation reports, roadmap
revisions, and explicitly documented directives.

Only decisions with meaningful architectural, operational, or strategic
implications belong here. Minor implementation decisions remain in their
respective records.

## Entry Structure

Each decision is documented under a descriptive heading, followed by a list
of consistently ordered fields:

- **Context**: The circumstances, requirements, or constraints that
  prompted the decision.
- **Weight**: The documented or reasonably established trade-offs, risks,
  limitations, or consequences of the decision, including the potential
  cost of an incorrect choice. Distinguish recorded costs from
  independently identified risks.
- **Choice**: The decision made, including its date and decision-maker
  where documented. Neither authorship nor approval may be inferred solely
  from the existence of a specification or implementation.
- **Reason**: The documented rationale for the decision. Use
  `not recorded` when no rationale is available.
- **Status**: Present state of decision implementation.
- **Confidence**: Validity sentiment relative to implementation status and
  current information.
- **History**: Log of any subsequent revision, replacement, or reconsideration.
  Include relevant dates and reference subsequent decisions. Distinguish a
  decision's standing from its implementation status.
- **Alternatives**: Other approaches considered or rejected, including their
  documented trade-offs. State when no alternatives were recorded.
- **Sources**: Additional material relevant to decision and its interpretation,
  including links to current documentation where useful.

## Documentation Principles

Entries must remain faithful to their supporting records. Missing
information must be identified rather than inferred, reconstructed, or
presented as established fact.

Distinguish proposals from adopted decisions, recorded rationale from
subsequent interpretation, and documented authority from assumed approval.

When a decision changes, preserve its original context and identify the
subsequent decision responsible for the change. Do not silently rewrite
historical reasoning to reflect present circumstances.

Keep entries concise and focused on decision-making. Refer readers to
supporting records for implementation details, extended analysis, and
verification results.
```

---

## ChatGPT Response 3

Yes. Your amendment substantially clarifies the intended convention,
particularly by distinguishing **what was decided, what subsequently happened,
and whether the decision remains defensible**.

I think this is an important development. The original seven-field structure
primarily preserved historical reasoning. Your nine-field structure introduces
a second responsibility: evaluating a decision against its implementation and
subsequent evidence.

That makes the convention more ambitious, and potentially more useful. However,
I see several semantic ambiguities worth resolving before treating it as
foundational.

### 1. What your amendment establishes

The most consequential changes are the introduction of **Weight**, **Status**,
**Confidence**, and **History**.

Together, they suggest four distinct questions:

| Field      | Fundamental question                              |
| ---------- | ------------------------------------------------- |
| Weight     | What is at stake in this decision?                |
| Status     | To what extent has the decision been implemented? |
| Confidence | How defensible does the decision remain?          |
| History    | How has the decision evolved?                     |

This is a meaningful improvement over having **Cost** and **Standing**
accommodate all four concerns.

In particular, separating **Status** from **Confidence** is valuable.

A decision might be fully implemented but now appear misguided. Conversely, a
decision might remain compelling despite being entirely unimplemented.

Neither condition should obscure the other.

There is, however, a distinction between making these concepts separate and
defining them precisely enough for consistent application across repositories
and by autonomous agents.

### 2. The remaining semantic ambiguities

#### Weight: significance or consequences?

Your description currently reads:

> The documented or reasonably established trade-offs, risks, limitations, or
> consequences of the decision, including the potential cost of an incorrect
> choice.

This describes consequences, whereas weight conventionally describes
significance, importance, or influence.

I suspect your intention is broader than either interpretation alone.

A decision's weight could reasonably encompass its architectural reach,
reversibility, exposure to risk, and potential consequences if mistaken.

That suggests the following definition:

> **Weight**: The significance and potential consequences of the decision,
> including its scope, trade-offs, risks, limitations, and cost of reversal or
> failure. Distinguish documented consequences from subsequent assessments.

This wording makes _Weight_ a coherent concept rather than simply a replacement
for _Cost_.

It also introduces an important distinction: **Consequences identified when the
decision was made are not necessarily the same as consequences identified
later**.

Historical and subsequent assessments can coexist, but their provenance needs
to remain visible.

#### Status: implementation or adoption?

Your new definition is concise:

> Present state of decision implementation.

I agree with separating implementation status from the decision's standing.

However, this creates an interesting problem.

Consider a decision that was implemented, subsequently superseded, and whose
implementation has since been removed.

Its current implementation status might be `removed`, but that doesn't
independently tell readers whether the original decision was superseded,
withdrawn, or simply abandoned.

I would preserve **Status** strictly for implementation and assign the
historical standing of the decision to **History**.

A more precise definition might be:

> **Status**: The current implementation state of the decision, distinguishing
> planned, ongoing, partial, completed, abandoned, or otherwise unresolved
> implementation. Implementation does not itself establish continued validity
> or approval.

This also raises the prospect of a controlled status vocabulary, although
defining one can come later.

#### Confidence: confidence in what?

This is the most important unresolved question.

Your wording is:

> Validity sentiment relative to implementation status and current information.

I understand the intention, but _validity sentiment_ is not yet sufficiently
operational for a documentation standard.

There are at least two fundamentally different interpretations of confidence.

**Epistemic confidence** concerns how strongly the available evidence supports a
claim.

**Evaluative confidence** concerns whether a decision remains appropriate given
current understanding.

These are not interchangeable.

For example, the available records might conclusively establish that a
particular architectural choice was made, while subsequent experience provides
compelling evidence that it was a poor choice.

Epistemic confidence in the historical claim would be high; evaluative
confidence in the decision would be low.

Your reference to implementation status and current information suggests that
you mean the second.

If so, I would define it as:

> **Confidence**: The current assessment of whether the decision remains
> appropriate, considering its implementation, observed outcomes, outstanding
> uncertainties, and available evidence. Identify the basis and date of the
> assessment, and distinguish established findings from judgement.

I would also permit `not assessed`.

This is particularly important for an eventual agent skill. An agent should not
manufacture a positive or negative confidence assessment merely because the
field exists.

**Confidence should be an explicit assessment**, not an impression inferred
from the completeness of the documentation.

#### History: events or current standing?

Your definition is:

> Log of any subsequent revision, replacement, or reconsideration.

This is valuable, but it leaves unresolved how readers determine whether a
decision currently stands.

A decision can be reconsidered without being changed. It can also be partially
superseded without being wholly invalidated.

I would therefore give History two responsibilities: Preserve subsequent events
and establish the decision's present standing.

For example:

> **History**: The chronological record of subsequent reviews, reaffirmations,
> revisions, withdrawals, or superseding decisions. Include relevant dates,
> supporting records, and the decision's resulting standing. Preserve the
> distinction between historical decisions and changes to their implementation.

That would eliminate the need to reintroduce a separate **Standing** field while
preserving its essential function.

### 3. A subtle issue with Alternatives and Sources

Two fields deserve additional attention.

**Alternatives** currently appears after History.

There is no inherent problem with this, but I would place it directly after
Context. Alternatives belong to the circumstances under which the original
decision was made, rather than its subsequent evaluation.

That creates a more natural progression:

Context → Alternatives → Choice → Reason → Weight → Status → Confidence →
History → Sources.

Sources has also changed in a potentially consequential way.

Your original convention treated sources as the evidentiary foundation of each
entry. The amended wording describes them as:

> Additional material relevant to decision and its interpretation.

I would resist the word _additional_.

It makes supporting records sound supplementary rather than essential.

For an evidence-backed decision history, sources are not ancillary reading.
They establish which claims are documented, which are interpretations, and
whether the decision's history has been faithfully reconstructed.

I would instead use:

> **Sources**: The records substantiating the decision, its rationale,
> subsequent developments, and current assessment. Include links to relevant
> reference documentation where useful. Distinguish primary evidence from
> supplementary material.

This also allows different sources to substantiate different aspects of an
entry.

### 4. One foundational distinction I would formalise

I think your amendment reveals something deeper about the convention.

#### A decision record now contains three different kinds of information

| Information | Nature                                                                   | Examples                              |
| ----------- | ------------------------------------------------------------------------ | ------------------------------------- |
| Historical  | What the available records establish about the decision when it was made | Context, Alternatives, Choice, Reason |
| Evaluative  | What the decision means or implies, including subsequent judgement       | Weight, Confidence                    |
| Evolving    | What has happened since the decision was made                            | Status, History                       |

Sources support all three.

This classification isn't absolute. Weight may incorporate original and
subsequent assessments, and History necessarily contains historical facts.
Nevertheless, it establishes three different obligations for documentation
authors.

Historical information must be **faithfully extracted**.

Evaluative information must be **justified and attributed**.

Evolving information must be **reconciled against current evidence**.

That distinction matters enormously for standardisation.

Without it, an agent might mistake an inference about why a decision was
reasonable for the original decision-maker's documented reasoning.

Your existing documentation principles already prohibit that kind of inference,
but the addition of Confidence makes the boundary between historical evidence
and permitted evaluation worth defining explicitly.

### 5. Proposed refinement of your entry definitions

Keeping your nine fields and most of your terminology, I would currently
recommend the following.

```markdown
## Entry Structure

Each decision is documented under a descriptive heading, followed by a
list of consistently ordered fields:

- **Context**: The circumstances, requirements, or constraints that
  prompted the decision.
- **Alternatives**: Other approaches considered or rejected, including
  their documented trade-offs. State when no alternatives were recorded.
- **Choice**: The decision made, including its date and decision-maker
  where documented. Neither authorship nor approval may be inferred
  solely from the existence of a specification or implementation.
- **Reason**: The documented rationale for the decision. Use
  `not recorded` when no rationale is available.
- **Weight**: The significance and potential consequences of the
  decision, including its scope, trade-offs, risks, limitations, and
  cost of reversal or failure. Distinguish documented consequences
  from subsequent assessments.
- **Status**: The current implementation state of the decision,
  distinguishing completed, partial, ongoing, planned, abandoned,
  or otherwise unresolved implementation. Implementation does not
  itself establish continued validity or approval.
- **Confidence**: The current assessment of whether the decision
  remains appropriate, considering its implementation, observed
  outcomes, outstanding uncertainties, and available evidence.
  Identify the basis and date of the assessment, distinguish
  established findings from judgement, and state when no assessment
  has been made.
- **History**: The chronological record of subsequent reviews,
  reaffirmations, revisions, withdrawals, or superseding decisions.
  Include relevant dates, supporting records, and the decision's
  resulting standing. Preserve the distinction between historical
  decisions and changes to their implementation.
- **Sources**: The records substantiating the decision, its rationale,
  subsequent developments, and current assessment. Include links
  to relevant reference documentation where useful. Distinguish
  primary evidence from supplementary material.
```

This would be my preferred working definition of the nine fields.

It preserves your amendments while clarifying the responsibilities of each.

### 6. Two further questions for the foundational convention

Before moving toward a skill or a broader repository documentation
architecture, I would examine two conceptual questions.

#### First: What constitutes a decision?

Your document currently identifies significant architectural, operational, and
strategic decisions, which establishes scope but not necessarily the criteria
for recognising a decision.

For example, is a technical direction documented in a specification a decision
if no identifiable authority formally adopted it?

Your principles correctly prohibit inferring approval, but this leaves open
whether the entry should be included as a decision with unknown authority, or
excluded as an unadopted proposal.

That distinction should eventually be explicit.

#### Second: What constitutes a legitimate change to a decision entry?

Historical facts should remain stable unless corrected by better evidence.
Implementation status and evaluative confidence, however, may change
frequently.

Consequently, I would distinguish between:

- **Correction**: Revising an entry because its existing account was inaccurate
  or inadequately supported.
- **Reassessment**: Updating the understanding of an unchanged decision based on
  new evidence.
- **Revision**: Documenting an actual change to the decision itself.

This distinction would help prevent changes in confidence or implementation
state from being mistaken for new decisions.

It would also establish a principled foundation for how an agent maintains
historical integrity.

### My assessment

I consider your amendment a substantial improvement, and I would retain its
nine-field structure provisionally.

The most valuable development is that decisions no longer need to be
represented as either simply current or superseded. They can instead be
understood through their historical justification, implementation progress,
contemporary assessment, and subsequent evolution.

My main reservation is that **Confidence introduces an evaluative responsibility
that the original convention did not have**.

That is not an argument against including it. Quite the opposite: it may be the
most valuable addition.

But it means the convention must explicitly distinguish what the repository's
evidence establishes from what a reviewer, or an agent, concludes about that
evidence.

I would therefore make **the distinction between historical fact, attributed
evaluation, and evolving state** the next foundational principle to formalise.

Once that boundary is well defined, the remaining questions about status
vocabularies, entry formatting, indexing, and agent workflows become
considerably easier to address without compromising the historical record.

---

## References

### Documentation of [chewygumxx/dorothy][repo-dorothy]

- [Attached: decisions.md][attach-decisions]
- [GitHub chewygumxx/dorothy][repo-dorothy]
- [dorothy/dorothy - Decisions][dorothy-decisions]
- [dorothy/dorothy - Records][dorothy-records]
- [dorothy/dorothy - Wiki home][dorothy-wikihome]

[attach-decisions]: ./2026-11-05_chatgpt-conversation-decisions-docs-specification/decisions.md "Attached: decisions.md"
[repo-dorothy]: https://github.com/chewygumxx/dorothy "GitHub: chewygumxx/dorothy"
[dorothy-decisions]: https://github.com/chewygumxx/dorothy/blob/main/docs/wiki/decisions.md "chewygumxx/dorothy Decisions"
[dorothy-records]: https://github.com/chewygumxx/dorothy/blob/main/docs/wiki/records.md "chewygumxx/dorothy Records"
[dorothy-wikihome]: https://github.com/chewygumxx/dorothy/blob/main/docs/README.md "chewygumxx/dorothy Wiki home"

### ADR

- [ADR Templates | Architectural Decision Records][adr-templates]
- [Documenting architecture decisions - The GDS Way][adr-arch-decision-docs]

[adr-templates]: https://adr.github.io/adr-templates/ "ADR Templates | Architectural Decision Records"
[adr-arch-decision-docs]: https://gds-way.digital.cabinet-office.gov.uk/standards/architecture-decisions.html "Documenting architecture decisions - The GDS Way"

### Agent Skills

<!-- spellchecker:words agentskills -->

- [Agent Skills Specification][repo-agentskills]
- [GitHub agentskills/agentskills][spec-agentskills]

[spec-agentskills]: https://agentskills.io/specification "Agent Skills Specification"
[repo-agentskills]: https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx "GitHub: agentskills/agentskills"

<!-- vim:set expandtab shiftwidth=2 filetype=markdown foldlevel=3: -->
