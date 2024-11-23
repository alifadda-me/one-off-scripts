# Fix User Emails Script

## Purpose
Fix incorrect user email addresses in the database using a provided CSV mapping file.

## Prerequisites
- Node.js
- Required npm packages:
  ```bash
  pnpm install pg csv-parser
  ```
- Environment variables set:
  ```bash
  DB_HOST=your-host
  DB_USER=your-user
  DB_PASSWORD=your-password
  DB_NAME=your-database
  DB_PORT=5432
  ```

## Input Format
Place a CSV file named `emails_to_fix.csv` in the same directory with the following format:
```csv
old_email,new_email
john.doe@gmial.com,john.doe@gmail.com
jane.smith@yaho.com,jane.smith@yahoo.com
```

## Impact
- Tables affected: `users`
- Fields modified: `email`, `updated_at`
- Transaction used: Yes
- Estimated time: ~1 minute per 1000 records

## Verification
Run these queries before and after to verify:
```sql
-- Check old emails no longer exist
SELECT COUNT(*) FROM users WHERE email IN (
  'john.doe@gmial.com',
  'jane.smith@yaho.com'
);

-- Check new emails exist
SELECT COUNT(*) FROM users WHERE email IN (
  'john.doe@gmail.com',
  'jane.smith@yahoo.com'
);
```

## Rollback
If needed, you can restore the old emails using this query with the same CSV data:
```sql
UPDATE users 
SET email = old_email,
    updated_at = NOW()
FROM (VALUES
  ('john.doe@gmail.com', 'john.doe@gmial.com'),
  ('jane.smith@yahoo.com', 'jane.smith@yaho.com')
) AS data(new_email, old_email)
WHERE users.email = data.new_email;
```
