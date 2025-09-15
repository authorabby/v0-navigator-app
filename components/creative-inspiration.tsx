import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Palette, BookOpen, Coffee, RefreshCw } from "lucide-react"

const inspirationCategories = [
  {
    icon: Lightbulb,
    title: "Skill Building",
    description: "Learn something new today",
    suggestions: ["Try a new coding tutorial", "Read about industry trends", "Practice a technical skill"],
    color: "text-chart-4",
  },
  {
    icon: Palette,
    title: "Creative Break",
    description: "Refresh your mind",
    suggestions: ["Sketch your dream office", "Write about your ideal job", "Create a vision board"],
    color: "text-accent",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Expand your knowledge",
    suggestions: ["Read a career development article", "Listen to an industry podcast", "Watch a TED talk"],
    color: "text-primary",
  },
]

export function CreativeInspiration() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-chart-4" />
              Creative Inspiration
            </CardTitle>
            <CardDescription>Fuel your creativity and motivation</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {inspirationCategories.map((category, index) => (
            <div key={index} className="p-4 rounded-lg border border-border bg-muted/20">
              <div className="flex items-center gap-3 mb-3">
                <category.icon className={`h-5 w-5 ${category.color}`} />
                <div>
                  <h3 className="font-medium text-foreground">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                {category.suggestions.map((suggestion, suggestionIndex) => (
                  <div key={suggestionIndex} className="text-sm text-muted-foreground p-2 rounded bg-background/50">
                    {suggestion}
                  </div>
                ))}
              </div>

              <Button variant="ghost" size="sm" className="w-full mt-3 text-xs">
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Daily Challenge */}
        <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
          <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            Today's Challenge
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Reach out to one person in your network and share something you've learned recently. Building connections
            while sharing knowledge creates lasting professional relationships.
          </p>
          <Button size="sm" className="gap-2">
            <Coffee className="h-4 w-4" />
            Accept Challenge
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
