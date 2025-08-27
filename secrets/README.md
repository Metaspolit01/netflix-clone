# Secrets Directory

This directory is for storing sensitive files when using Docker secrets.

## For Local Development:
Create a file named `tmdb_api_key.txt` with your API key:
```
echo "your_tmdb_api_key_here" > tmdb_api_key.txt
```

## For Production:
Use Docker Swarm secrets or your orchestration platform's secret management.

## Security Note:
- Never commit actual secret files to version control
- This directory is in .gitignore for security
- Use proper secret management in production environments
