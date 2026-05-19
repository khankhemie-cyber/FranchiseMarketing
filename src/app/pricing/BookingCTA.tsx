"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BookingCTA() {
  return (
    <div className="text-center py-8">
      <p className="font-sans-ui text-[15px] text-[#4A5568] mb-4">
        Not sure which plan fits your network?
      </p>
      <Link href="/demo">
        <Button variant="dark" size="lg">Book a 15-Minute Call</Button>
      </Link>
    </div>
  );
}
