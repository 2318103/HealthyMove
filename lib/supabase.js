import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
'https://nmderbtjhbfuvilxkbrh.supabase.co';

const supabaseKey =
'sb_publishable_TgHDnGGWpfrEFZD8cdvhCw_ube1EMrG';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);