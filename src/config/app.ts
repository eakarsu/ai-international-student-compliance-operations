export interface PageConfig {
  label: string;
  href: string;
  description: string;
  entities: string[];
  workflows: string[];
}

export interface EntityConfig {
  name: string;
  label: string;
  fields: Array<{ name: string; kind: "string" | "number" | "boolean" | "date" }>;
}

export interface WorkflowConfig {
  slug: string;
  title: string;
  description: string;
  prompt: string;
  fields: string[];
}

export const appConfig = {
  "slug": "ai-international-student-compliance-operations",
  "title": "International Student Compliance Operations",
  "tagline": "Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues.",
  "accent": "rose"
};
export const pages: PageConfig[] = [
  {
    "label": "Intake & registers",
    "href": "/registers",
    "description": "Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues.",
    "entities": [
      "StudentCase",
      "StudentDocument",
      "EnrollmentEvent"
    ],
    "workflows": [
      "document-date-extraction",
      "enrollment-event-reconciliation"
    ]
  },
  {
    "label": "Operational records",
    "href": "/workflow",
    "description": "Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues.",
    "entities": [
      "EmploymentRequest",
      "StudentRequest",
      "DsoReview"
    ],
    "workflows": [
      "employment-evidence-gaps",
      "student-request-response-draft"
    ]
  },
  {
    "label": "Review & delivery",
    "href": "/delivery",
    "description": "Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues.",
    "entities": [
      "ReportingEvent",
      "ReportingReceipt",
      "StudentCommunication"
    ],
    "workflows": [
      "dso-review-brief",
      "reporting-queue-summary"
    ]
  },
  {
    "label": "Tasks & requirements",
    "href": "/operations",
    "description": "Assignments, versioned rules and document requirements.",
    "entities": [
      "OperationalTask",
      "RuleVersion",
      "DocumentRequirement"
    ],
    "workflows": [
      "evidence-completeness-review",
      "operations-handoff-draft"
    ]
  }
];
export const entities: Record<string, EntityConfig> = {
  "StudentCase": {
    "name": "StudentCase",
    "label": "Student Case",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "studentReference",
        "kind": "string"
      },
      {
        "name": "school",
        "kind": "string"
      },
      {
        "name": "program",
        "kind": "string"
      },
      {
        "name": "startAt",
        "kind": "date"
      },
      {
        "name": "expectedEndAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      }
    ]
  },
  "StudentDocument": {
    "name": "StudentDocument",
    "label": "Student Document",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "documentType",
        "kind": "string"
      },
      {
        "name": "documentNumber",
        "kind": "string"
      },
      {
        "name": "issuedAt",
        "kind": "date"
      },
      {
        "name": "expiresAt",
        "kind": "date"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "EnrollmentEvent": {
    "name": "EnrollmentEvent",
    "label": "Enrollment Event",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "term",
        "kind": "string"
      },
      {
        "name": "eventType",
        "kind": "string"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "credits",
        "kind": "number"
      },
      {
        "name": "evidence",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "EmploymentRequest": {
    "name": "EmploymentRequest",
    "label": "Employment Request",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "employer",
        "kind": "string"
      },
      {
        "name": "employmentType",
        "kind": "string"
      },
      {
        "name": "startAt",
        "kind": "date"
      },
      {
        "name": "endAt",
        "kind": "date"
      },
      {
        "name": "hoursPerWeek",
        "kind": "number"
      },
      {
        "name": "evidence",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "StudentRequest": {
    "name": "StudentRequest",
    "label": "Student Request",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "requestType",
        "kind": "string"
      },
      {
        "name": "submittedAt",
        "kind": "date"
      },
      {
        "name": "requestedAt",
        "kind": "date"
      },
      {
        "name": "details",
        "kind": "string"
      },
      {
        "name": "responseDueAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "DsoReview": {
    "name": "DsoReview",
    "label": "Dso Review",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "reviewer",
        "kind": "string"
      },
      {
        "name": "reviewedAt",
        "kind": "date"
      },
      {
        "name": "requestReference",
        "kind": "string"
      },
      {
        "name": "decision",
        "kind": "string"
      },
      {
        "name": "rationale",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "ReportingEvent": {
    "name": "ReportingEvent",
    "label": "Reporting Event",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "eventType",
        "kind": "string"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "reportingDueAt",
        "kind": "date"
      },
      {
        "name": "payloadReference",
        "kind": "string"
      },
      {
        "name": "authorizationReference",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "ReportingReceipt": {
    "name": "ReportingReceipt",
    "label": "Reporting Receipt",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "reportingEventId",
        "kind": "string"
      },
      {
        "name": "submittedAt",
        "kind": "date"
      },
      {
        "name": "submitter",
        "kind": "string"
      },
      {
        "name": "externalReceipt",
        "kind": "string"
      },
      {
        "name": "responseText",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "StudentCommunication": {
    "name": "StudentCommunication",
    "label": "Student Communication",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "contactedAt",
        "kind": "date"
      },
      {
        "name": "channel",
        "kind": "string"
      },
      {
        "name": "topic",
        "kind": "string"
      },
      {
        "name": "message",
        "kind": "string"
      },
      {
        "name": "followUpAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "OperationalTask": {
    "name": "OperationalTask",
    "label": "Operational Task",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "owner",
        "kind": "string"
      },
      {
        "name": "priority",
        "kind": "string"
      },
      {
        "name": "startAt",
        "kind": "date"
      },
      {
        "name": "dueAt",
        "kind": "date"
      },
      {
        "name": "done",
        "kind": "boolean"
      },
      {
        "name": "notes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "RuleVersion": {
    "name": "RuleVersion",
    "label": "Rule Version",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "jurisdiction",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "expiresAt",
        "kind": "date"
      },
      {
        "name": "sourceUrl",
        "kind": "string"
      },
      {
        "name": "requirementText",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  },
  "DocumentRequirement": {
    "name": "DocumentRequirement",
    "label": "Document Requirement",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "category",
        "kind": "string"
      },
      {
        "name": "requiredBy",
        "kind": "date"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "evidenceReference",
        "kind": "string"
      },
      {
        "name": "reviewNotes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "studentCaseId",
        "kind": "string"
      }
    ]
  }
};
export const workflows: WorkflowConfig[] = [
  {
    "slug": "document-date-extraction",
    "title": "Document date extraction",
    "description": "Document date extraction using selected student case records and supplied evidence.",
    "prompt": "Document date extraction for International Student Compliance Operations. Operational scope: Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues. Specific AI scope: Extract supporting documents and identify inconsistent dates for designated-school-official review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "enrollment-event-reconciliation",
    "title": "Enrollment event reconciliation",
    "description": "Enrollment event reconciliation using selected student case records and supplied evidence.",
    "prompt": "Enrollment event reconciliation for International Student Compliance Operations. Operational scope: Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues. Specific AI scope: Extract supporting documents and identify inconsistent dates for designated-school-official review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "employment-evidence-gaps",
    "title": "Employment evidence gaps",
    "description": "Employment evidence gaps using selected student case records and supplied evidence.",
    "prompt": "Employment evidence gaps for International Student Compliance Operations. Operational scope: Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues. Specific AI scope: Extract supporting documents and identify inconsistent dates for designated-school-official review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "student-request-response-draft",
    "title": "Student request response draft",
    "description": "Student request response draft using selected student case records and supplied evidence.",
    "prompt": "Student request response draft for International Student Compliance Operations. Operational scope: Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues. Specific AI scope: Extract supporting documents and identify inconsistent dates for designated-school-official review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "dso-review-brief",
    "title": "DSO review brief",
    "description": "DSO review brief using selected student case records and supplied evidence.",
    "prompt": "DSO review brief for International Student Compliance Operations. Operational scope: Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues. Specific AI scope: Extract supporting documents and identify inconsistent dates for designated-school-official review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "reporting-queue-summary",
    "title": "Reporting queue summary",
    "description": "Reporting queue summary using selected student case records and supplied evidence.",
    "prompt": "Reporting queue summary for International Student Compliance Operations. Operational scope: Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues. Specific AI scope: Extract supporting documents and identify inconsistent dates for designated-school-official review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "evidence-completeness-review",
    "title": "Evidence completeness review",
    "description": "Evidence completeness review using selected student case records and supplied evidence.",
    "prompt": "Evidence completeness review for International Student Compliance Operations. Operational scope: Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues. Specific AI scope: Extract supporting documents and identify inconsistent dates for designated-school-official review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "operations-handoff-draft",
    "title": "Operations handoff draft",
    "description": "Operations handoff draft using selected student case records and supplied evidence.",
    "prompt": "Operations handoff draft for International Student Compliance Operations. Operational scope: Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues. Specific AI scope: Extract supporting documents and identify inconsistent dates for designated-school-official review. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  }
];
export function findPage(href:string){return pages.find(p=>p.href===href);}
