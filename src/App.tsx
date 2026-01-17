
import './App.css'
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";



function App() {
  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="space-y-4">
        <Badge>FINANCE</Badge>
        <Input placeholder="Blog title" />
        <Textarea placeholder="Blog description" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
  
}

export default App
