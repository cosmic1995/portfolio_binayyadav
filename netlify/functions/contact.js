const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { name, company, email, phone, message } = body;

  if (!name || !email || !phone || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields' }),
    };
  }

  const dbUrl = process.env.NETLIFY_DATABASE_URL;
  if (!dbUrl) {
    console.error('NETLIFY_DATABASE_URL is not set');
    return { statusCode: 500, body: JSON.stringify({ error: 'Database not configured' }) };
  }

  try {
    const sql = neon(dbUrl);

    await sql`
      CREATE TABLE IF NOT EXISTS submissions (
        id        SERIAL PRIMARY KEY,
        name      TEXT NOT NULL,
        company   TEXT,
        email     TEXT NOT NULL,
        phone     TEXT NOT NULL,
        message   TEXT NOT NULL,
        submitted_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO submissions (name, company, email, phone, message)
      VALUES (${name}, ${company || null}, ${email}, ${phone}, ${message})
    `;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error('DB error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save submission' }),
    };
  }
};
