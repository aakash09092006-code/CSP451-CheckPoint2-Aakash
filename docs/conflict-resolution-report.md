# Conflict Resolution Report (~300 words)

## 1) Conflict Scenario
- **File conflicted:** README.md  
- **Branches involved:** feature/user-authentication and feature/api-endpoints  
- **Changes in each branch:**  
  - `feature/user-authentication` added a section describing login validation, UI feedback, show/hide password, and form clearing.  
  - `feature/api-endpoints` added a section describing the POST `/api/data` endpoint and input validation.

## 2) What You Saw
- When merging `feature/api-endpoints` into `feature/user-authentication`, Git reported a **merge conflict**.  
- In `README.md`, conflict markers appeared:  

```text
<<<<<<< HEAD
## Feature: User Authentication
This branch adds login validation and UI feedback.
=======
## Feature: API Endpoints
This branch adds POST /api/data endpoint and input validation.
>>>>>>> feature/api-endpoints

## 3) Resolution Strategy
Both sections were needed, so the final README.md combined them:
## Feature: User Authentication
This branch adds login validation and UI feedback.

## Feature: API Endpoints
This branch adds POST /api/data endpoint and input validation.
What was kept vs removed:
Kept all content from both branches.
Removed conflict markers (<<<<<<<, =======, >>>>>>>).
Verification:
Ran npm test, npm run lint, and npm run format:check to ensure everything still works.
Confirmed the file renders correctly on GitHub and the branch could be merged without issues.

## 4) Prevention Methods
To avoid similar conflicts in the future:

Make smaller PRs with fewer changes per branch
Communicate changes before refactoring shared files
Avoid editing the same lines in multiple branches simultaneously
Use feature flags to isolate changes