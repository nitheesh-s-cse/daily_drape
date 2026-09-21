const SUPABASE_URL = "https://atztddftttggrqqavlsj.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_TjmUno96hrBnUlwhnAqscg_AdXvqfZ-";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase connected successfully!");