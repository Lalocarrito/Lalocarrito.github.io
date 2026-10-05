import { config } from "@/data/config";

// Client-side fetch (no server action) so the static export works on GitHub Pages.
// Unauthenticated GitHub API = 60 req/hr per IP.
export async function getGithubStars(): Promise<number> {
  const res = await fetch(
    `https://api.github.com/repos/${config.githubUsername}/${config.githubRepo}`,
    { headers: { Accept: "application/vnd.github+json" } },
  );
  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const data = await res.json();
  if (typeof data.stargazers_count !== "number") {
    throw new Error("Unexpected GitHub API response shape");
  }
  return data.stargazers_count;
}
