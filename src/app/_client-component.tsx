"use client";

export function ClientComponent() {
  return (
    <div>
      Client public url:{process.env.NEXT_PUBLIC_URL} <br />
      Client api url:{process.env.NEXT_PUBLIC_API_URL} <br />
    </div>
  );
}
