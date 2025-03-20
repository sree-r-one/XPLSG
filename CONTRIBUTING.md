### **📄 `CONTRIBUTING.md`**

# **Contributing Guidelines**

Thank you for considering contributing to **XPLSG**! This project follows a structured **Git branching strategy** to ensure efficient development and smooth CI/CD workflows.

## **🚀 How to Contribute**

1. **Fork the Repository**: Start by forking this repository and creating a local clone.
2. **Create a Feature Branch**:
   - Use the `develop` branch as your base.
   - Follow the naming convention:
     ```
     feature/<your-feature>
     fix/<your-bug>
     hotfix/<critical-bug>
     ```
3. **Commit Changes Properly**:
   - Use [Commit Message Guidelines](#commit-message-guidelines).
   - Keep commits small, meaningful, and atomic.
4. **Push and Open a PR**:
   - Push your branch to GitHub.
   - Open a **Pull Request (PR) into `develop`** (except hotfixes, which go to `master`).
   - Add a clear **PR description** and reference any issues (`Closes #123`).
5. **Review and Merge**:
   - PRs must be **approved by at least one reviewer** before merging.
   - **CI must pass** before merging.

## **🔀 Branching Strategy**

This project follows **GitFlow-inspired branching**:

| **Branch**     | **Purpose**                                          |
| -------------- | ---------------------------------------------------- |
| `master` 🏆    | Stable, production-ready code (CI/CD to Production). |
| `develop` 🛠️   | Active development branch (CI/CD to Staging).        |
| `feature/*` 🌱 | New features (branched from `develop`).              |
| `release/*` 🎯 | Staging & testing before merging to `master`.        |
| `hotfix/*` 🔥  | Critical production fixes (branched from `master`).  |

**Creating a new feature branch:**

```sh
git checkout develop
git pull origin develop
git checkout -b feature/add-auth
git push -u origin feature/add-auth
```

**Merging back into `develop`:**

```sh
git checkout develop
git merge feature/add-auth
git push origin develop
```

## **🛠 Code Style**

- Follow the **project’s linting and formatting rules**.
- Keep **functionality modular** and **well-documented**.
- Use **clear variable and function names**.

## **🔧 CI/CD Integration**

✅ **GitHub Actions** automatically runs CI/CD pipelines:

- **Feature branches (`feature/*`)** → CI runs tests **but does NOT deploy**.
- **Pull Requests to `develop`** → CI must pass before merging.
- **Merging `develop` to `master`** → Deploys **new production release**.

**To check CI status before merging:**

```sh
git status
git pull origin develop
```

## **📜 Commit Message Guidelines**

Following **Semantic Versioning (SemVer)**, commit messages should follow this format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### **1️⃣ Commit Types**

| Type       | Purpose                               | Example                                           |
| ---------- | ------------------------------------- | ------------------------------------------------- |
| `feat`     | New feature                           | `feat(auth): add OAuth2.0 login`                  |
| `fix`      | Bug fix                               | `fix(ui): resolve login form error`               |
| `docs`     | Documentation changes                 | `docs(readme): update API setup`                  |
| `style`    | Formatting only (no logic changes)    | `style(css): fix button alignment`                |
| `refactor` | Code improvement (no feature changes) | `refactor(api): optimize query execution`         |
| `test`     | Adding or updating tests              | `test(routes): add unit tests for user endpoints` |
| `chore`    | Dependencies or maintenance           | `chore(deps): update npm packages`                |

---

## **📝 Example Commit Messages**

✅ **Feature Addition**

```sh
feat(ui): add itinerary customization

Users can now customize itineraries with drag-and-drop functionality.
```

✅ **Bug Fix**

```sh
fix(auth): resolve login redirection issue

Fixed a bug where users were not redirected to the dashboard after a
successful login.
```

✅ **Documentation Update**

```sh
docs(api): update endpoint documentation

Added detailed examples and explanations for the itinerary endpoints.
```

✅ **Chore**

```sh
chore(deps): update npm dependencies

Updated project dependencies to their latest versions for security
and performance improvements.
```

## **📢 Reporting Issues**

If you find a bug or have a feature request:

1. **Search existing issues** to avoid duplicates.
2. **Create a new issue** with:
   - A **descriptive title**.
   - **Steps to reproduce** (for bugs).
   - **Expected vs actual behavior**.

## **✅ Summary**

✔ **Feature branches** are created from `develop`.  
✔ **Pull Requests must target `develop`**, not `master`.  
✔ **Commit messages follow Semantic Versioning (SemVer).**  
✔ **CI/CD checks must pass before merging.**  
✔ **Hotfixes go directly to `master` and backport to `develop`.**

## **🙏 Thank You for Contributing!**

By following these guidelines, we ensure **a well-structured, scalable, and maintainable project**! 🚀
