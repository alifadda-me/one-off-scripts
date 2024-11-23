# One-off Scripts Repository Guide


## Motivation
Managing one-off scripts (data fixes, one-time updates, data migrations) requires careful oversight to prevent unintended production changes. This repository provides:
- Code review process for all data-altering operations
- Historical tracking of executed changes
- Central location for team knowledge sharing
- Version control for scripts that might need future reference

## Repository Structure
```
one-off-scripts/
├── node/
│   ├── .gitignore
│   ├── package.json
│   ├── common/utils
│   │   └── db.js
│   └── scripts/
├── python/
│   ├── .gitignore
│   ├── requirements.txt
│   └── scripts/
└── go/
    ├── .gitignore
    ├── go.mod
    └── scripts/
```

## Usage Guide

### Adding a New Script

1. Create a new branch:
   ```bash
   git checkout -b fix/YYYY-MM-DD-description
   ```

2. Set up your environment (if not already done):
   ```bash
   # For Python scripts
   cd python
   ./setup.sh

   # For Node.js scripts
   cd node
   pnpm install

   # For Go scripts
   cd go
   go mod download
   ```

3. Add your script:
   ```bash
   mkdir scripts/2024-11-22_fix_user_emails
   cd scripts/2024-11-22_fix_user_emails
   # Create your script and README
   ```

4. Fill the README.md:
   ```markdown
   ## Purpose
   [What problem does this script solve]

   ## Prerequisites
   - Language: [Python/Node.js/Go]
   - Required setup: [Specific setup steps if any]

   ## Impact
   - Services affected: [service names]
   - Data scope: [tables/collections/etc]
   - Records affected: ~500
   - Execution time: ~2 min

   ## Verification
   [How to verify the changes worked]

   ## Rollback
   [How to revert changes if needed]
   ```

### Review Process
1. Push your branch
2. Create a pull request
3. Add at least one reviewer
4. Wait for approval
5. Merge only after successful review

### Naming
- Folders: `YYYY-MM-DD_short_description`
- Files:
    - Python: `script.py`
    - Node.js: `script.js`
    - Go: `main.go`
    - SQL: `script.sql`
- Branches: `fix/YYYY-MM-DD-description`

## Future Improvements
- Add automated testing
- Create execution logging
- Build script templates

## About the Author

This repository structure was designed and documented by Ali Fadda, a Senior Software Engineer passionate about building scalable systems and maintaining clean codebases.

- Linkedin: [Ali Fadda](https://www.linkedin.com/in/alifadda/)
- GitHub: [alifadda-me](https://github.com/alifadda-me)
- Email: [contact@alifadda.me](mailto:contact@alifadda.me)
- Email: [silvertechguy@gmail.com](mailto:silvertechguy@gmail.com)

Feel free to reach out if you have questions or suggestions about this approach!

---
❤️ If you find this template helpful, consider:
- ⭐ Starring the repository
- 🔄 Sharing it with your team
- 🐛 Opening issues for improvements
