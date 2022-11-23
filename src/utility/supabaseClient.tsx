import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://jxyvwtrmfrkwfcisuibl.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eXZ3dHJtZnJrd2ZjaXN1aWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5NjYxMjAsImV4cCI6MTk4NDU0MjEyMH0.uN-7nsvPf0R7xGidKslA1aj-nkXn3PjoY0zZGoq-NeU";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
