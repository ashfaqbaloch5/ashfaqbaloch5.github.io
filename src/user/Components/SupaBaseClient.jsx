import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nzdfecshdvqoeusrfdix.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56ZGZlY3NoZHZxb2V1c3JmZGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5NzYyNDAsImV4cCI6MjAzOTU1MjI0MH0.iMsSKghgXG8KsJ3aBzUauSkiqImQqjkuzvayfKjWYNY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);