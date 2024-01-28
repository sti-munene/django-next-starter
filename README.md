# Django Next Auth

This is a starter project built using Django and Next JS.
**Authentication** is already baked in;

1. Sign in with credentials
2. Sign in with Google

Be sure to set the environment variables for the backend & frontend before starting.

## Getting Started

First, run the frontend development server:

```bash
cd frontend
```

```bash
pnpm install
```

```bash
pnpm run dev
```

In another terminal window, run the backend development server:

```bash
cd backend
```

```bash
python -m venv venv
```

```bash
source venv/bin/activate
```

```bash
poetry install
```

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

```bash
python manage.py runserver
```
