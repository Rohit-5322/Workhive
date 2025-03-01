import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function FreelancePlatform() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">AI-Powered Freelancing Platform</h1>
      
      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Find the Best Freelancer Instantly</h2>
          <p className="text-gray-600 mb-4">Our AI matches you with the perfect freelancer in seconds.</p>
          <Input placeholder="Describe your project..." className="mb-2" />
          <Button className="w-full">Get AI Recommendations</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">For Freelancers</h2>
          <p className="text-gray-600 mb-4">Let AI help you find the best jobs suited for you.</p>
          <Input placeholder="Enter your skills..." className="mb-2" />
          <Button className="w-full">Find Jobs</Button>
        </CardContent>
      </Card>
    </div>
  );
}
