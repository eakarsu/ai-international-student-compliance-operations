# International Student Compliance Operations

Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues.

## Implemented records

- **Student Case**: name, student Reference, school, program, start At, expected End At, status.
- **Student Document**: title, document Type, document Number, issued At, expires At, source Reference, status.
- **Enrollment Event**: title, term, event Type, effective At, credits, evidence, status.
- **Employment Request**: title, employer, employment Type, start At, end At, hours Per Week, evidence, status.
- **Student Request**: title, request Type, submitted At, requested At, details, response Due At, status.
- **Dso Review**: title, reviewer, reviewed At, request Reference, decision, rationale, status.
- **Reporting Event**: title, event Type, effective At, reporting Due At, payload Reference, authorization Reference, status.
- **Reporting Receipt**: title, submitted At, submitter, external Receipt, response Text, status.
- **Student Communication**: title, contacted At, channel, topic, message, follow Up At, status.
- **Operational Task**: title, owner, priority, start At, due At, done, notes, status.
- **Rule Version**: title, jurisdiction, version, effective At, expires At, source Url, requirement Text, status.
- **Document Requirement**: title, category, required By, source Reference, evidence Reference, review Notes, status.

## AI workflows

- Document date extraction: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Enrollment event reconciliation: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Employment evidence gaps: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Student request response draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- DSO review brief: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Reporting queue summary: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Evidence completeness review: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Operations handoff draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.

## Calculations

- Student event reporting queue: Compute overdue intervals from DSO-entered deadlines; legal reporting periods are not inferred.
- Student Case evidence checklist: Check source presence against an explicitly supplied document list; reviewer assesses adequacy.
- Operational deadline queue: Compute overdue items from entered dates and completed flags; no external notifications.

## Workspace features

Role-based login and account management; validated create/edit/delete; required parent and sibling relationships; search and pagination; atomic JSON imports; CSV/JSON exports; optimistic concurrency; two independent human reviews; immutable source-text uploads with independent review; dated task calendar; aggregate reports; searchable audit trail; model catalog and administrator AI settings; configured HTTPS connectors with approval, idempotency and receipt checks.

## Integration boundaries

A finite working scope, not every conceivable feature. No production regulator, insurer, carrier, court, university or clinical integration is preconfigured. Source uploads support text/CSV/JSON/Markdown, not OCR/PDF parsing. AI produces drafts and cannot authorize clinical handling, adjudicate rights, select recipients or jurors, establish eligibility, certify regulatory compliance or send submissions. Live external execution requires a configured adapter and independent human approval of the current record. Calculations use supplied rules and units; example rules are fictional.
