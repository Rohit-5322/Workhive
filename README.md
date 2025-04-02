import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Rocket, Briefcase } from "lucide-react";

export default function AIStartupPrototype() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        AI-Powered Startup Hub 🚀
      </motion.h1>
      
      <Tabs defaultValue="contentCreation" className="w-full max-w-3xl">
        <TabsList className="flex justify-center space-x-4 mb-4">
          <TabsTrigger value="contentCreation">
            <Rocket className="w-5 h-5 mr-2" /> Content Creation AI
          </TabsTrigger>
          <TabsTrigger value="careerAgent">
            <Briefcase className="w-5 h-5 mr-2" /> Career & Freelance AI
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="contentCreation">
          <Card className="shadow-lg p-6">
            <CardContent>
              <h2 className="text-xl font-semibold">AI Content Creation Studio 🎬</h2>
              <p className="text-gray-600 mt-2">Generate videos, blogs, and viral content instantly with AI-powered automation.</p>
              <div className="mt-4 flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email to get early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button>Get Access</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="careerAgent">
          <Card className="shadow-lg p-6">
            <CardContent>
              <h2 className="text-xl font-semibold">AI Career & Freelance Agent 💼</h2>
              <p className="text-gray-600 mt-2">Find high-paying freelance jobs and auto-apply with AI-driven job matching.</p>
              <div className="mt-4 flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button>Get Access</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
