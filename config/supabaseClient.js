import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tvdcfbqegitilduuqemd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZGNmYnFlZ2l0aWxkdXVxZW1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1ODk1MTQsImV4cCI6MTk5NDE2NTUxNH0.iEGfo_KWH-KomerosCkCUn7hFj_26k64xt_oZ5ylXsc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;