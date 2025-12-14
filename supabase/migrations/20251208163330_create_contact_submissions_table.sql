/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `case` (text, required - case type)
      - `message` (text, required)
      - `created_at` (timestamp)
      - `read` (boolean, default false)
      - `ip_address` (text, for spam detection)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Public can insert (for form submissions)
    - Service role can read/update for admin access
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  case_type text NOT NULL,
  message text NOT NULL,
  ip_address text,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all submissions"
  ON contact_submissions FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update submissions"
  ON contact_submissions FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);