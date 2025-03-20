# **Git Branching Strategy for XPLSG Application**

## **1. Overview**

This document defines the Git branching strategy for managing the source code of the **XPLSG application**, which serves as a personal project for learning and testing various implementations. The strategy follows an adapted **GitFlow** workflow to facilitate feature development, bug fixes, and CI/CD pipelines.

## **2. Branch Structure**

The repository will have the following branches:

| Branch         | Purpose                                                        |
| -------------- | -------------------------------------------------------------- |
| `master` 🏆      | Stable production branch (CI/CD deploys to production)         |
| `develop` 🛠️   | Integration branch for new features (CI/CD deploys to staging) |
| `feature/*` 🌱 | Individual feature branches for development                    |
| `hotfix/*` 🔥  | Quick fixes applied directly to `master`                         |
| `release/*` 🎯 | Pre-production staging (RC releases, final testing)            |

## **3. Workflow Guidelines**

### **3.1 Feature Branches (`feature/*`)**

- Used for developing new features.
- Branches should be named descriptively, e.g., `feature/add-login`.
- Created from `develop` and merged back when completed.

#### **Commands:**

```sh
# Create a feature branch
git checkout -b feature/add-login develop

# Work on the feature, then commit
# Push changes
git push -u origin feature/add-login
```

After code review and testing:

```sh
# Merge back into develop
git checkout develop
git merge feature/add-login
git push origin develop
```

### **3.2 Release Branches (`release/*`)**

- Used for preparing a production release.
- Allows final bug fixes and version updates before deployment.
- Merged into `master` and back into `develop`.

#### **Commands:**

```sh
# Create a release branch
git checkout -b release/v1.0.0 develop

# Final testing and version bump
# Push changes
git push -u origin release/v1.0.0
```

After validation:

```sh
# Merge into master
git checkout master
git merge release/v1.0.0
git push origin master

# Merge back into develop
git checkout develop
git merge release/v1.0.0
git push origin develop
```

### **3.3 Hotfix Branches (`hotfix/*`)**

- Used for urgent fixes in production.
- Created from `master`, then merged back.

#### **Commands:**

```sh
# Create hotfix branch from master
git checkout -b hotfix/fix-login master

# Apply the fix and push changes
git push -u origin hotfix/fix-login
```

After testing:

```sh
# Merge into master
git checkout master
git merge hotfix/fix-login
git push origin master

# Merge into develop to prevent regressions
git checkout develop
git merge hotfix/fix-login
git push origin develop
```

## **4. Versioning & CI/CD**

- **Semantic Versioning** is used (`MAJOR.MINOR.PATCH`).
- **GitHub Actions** automates deployments:
  - `develop` → Staging environment
  - `master` → Production environment

## **5. Summary Workflow**

```plaintext
               ┌──────────┐
               │  master    │  🔥 Production-ready
               └────▲─────┘
                    │
           ┌────────┴────────┐
           │                 │
     ┌────▼─────┐     ┌──────▼──────┐
     │ release/* │     │ develop    │  🛠️ Integration branch
     └────▲─────┘     └─────▲──────┘
          │                   │
   ┌──────┴──────┐       ┌────┴──────┐
   │  hotfix/*   │       │ feature/* │  🌱 Feature development
   └─────────────┘       └───────────┘
```

## **6. Conclusion**

This branching strategy provides a structured and scalable approach for mastertaining code quality, managing feature releases, and automating deployments for the **XPLSG application**. 🚀
