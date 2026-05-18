# Collaboration Workflow Report

## 1) Issues Created
- **#1 Feature: User Authentication** – Requested login validation, UI feedback, show/hide password toggle, and clearing form after
- **#2 Feature: Database Connection** – Requested `connect()` and `query()` functions for DB module.
- **#3 Feature: API Endpoints** – Requested POST `/api/data` endpoint with input validation.

## 2) PR Summary (3 PRs)

**PR #1 – Feature: User Authentication**
- Linked issue: #1
- Key changes: 3 commits – login validation & UI feedback, show/hide password toggle, clear form after login
- Screenshots included? Yes

**PR #2 – Feature: Database Connection**
- Linked issue: #2
- Key changes: 3 commits – implement `connect()`, implement `query()`, export module
- Screenshots included? Yes

**PR #3 – Feature: API Endpoints**
- Linked issue: #3
- Key changes: 3 commits – split api.js into modules, add POST `/api/data` endpoint, add input validation
- Screenshots included? Yes

## 3) Self-Review Evidence
- Self-review was done on **PR #3 – Feature: API Endpoints**
- Comment left: “Please check input validation for edge cases”
- Follow-up commit: `fix(api): address self-review comment`
- Quality ensured by: running `npm test`, `npm run lint`, `npm run format:check` on main branch before merge

## 4) Merge Strategy
- **Squash and merge** was used for all three PRs
- Benefit: Keeps commit history clean and linear, making it easier to rollback or track changes if needed
