import { createClient } from "@supabase/supabase-js";

const url = "https://tapuafrlkizcmdcpvjve.supabase.co";
const key =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcHVhZnJsa2l6Y21kY3B2anZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1NTI1MDQsImV4cCI6MjAzNjEyODUwNH0.TZQKrVsEih5Tz9jUSrFnr1BHYRxIdWSH2WlRIin9eOg";

// Create a single supabase client for interacting with your database
const supabase = createClient(url, key);

const getOrganizations = async () => {
	let data = await supabase.from("organization").select("*");
	return data;
};

export { getOrganizations };
