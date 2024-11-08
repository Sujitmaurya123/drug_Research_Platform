const API_KEY = "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"; // Your API key
// src/app/api/proxy/molecule-generation/route.ts

import { NextResponse } from 'next/server';

// This function handles the POST request
export async function POST(req: Request) {
  try {
    // Extract the payload from the request
    const payload = await req.json();

    const NVIDIA_API_URL = "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate";
    // const API_KEY = API_KEY; // Make sure this key is set in your .env.local

    // Call NVIDIA API
    const response = await fetch(NVIDIA_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload), // Send the payload as the request body
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.message || "Failed to generate molecules" }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data from NVIDIA API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
