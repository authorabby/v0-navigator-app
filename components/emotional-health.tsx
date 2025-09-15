import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Smile, Meh, Frown, Sun, Moon } from "lucide-react"

const moodOptions = [
  { icon: Smile, label: "Great", color: "text-chart-4" },
  { icon: Sun, label: "Good", color: "text-primary" },
  { icon: Meh, label: "Okay", color: "text-muted-foreground" },
  { icon: Frown, label: "Tough", color: "text-destructive" },
]

const inspirationalQuotes = [
  "Every rejection is a redirection to something better.",
  "Your current situation is not your final destination.",
  "The sea is rough today, but you're an experienced sailor.",
  "Storms don't last forever, but resilient people do.",
]

export function EmotionalHealth() {
  const todaysQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-destructive" />
          Emotional Health
        </CardTitle>
        <CardDescription>Check in with yourself</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Mood Tracker */}
        <div>
          <h3 className="font-medium text-foreground mb-3">How are you feeling today?</h3>
          <div className="grid grid-cols-2 gap-2">
            {moodOptions.map((mood, index) => (
              <Button key={index} variant="ghost" className="h-auto p-3 flex flex-col gap-2 hover:bg-muted/50">
                <mood.icon className={`h-6 w-6 ${mood.color}`} />
                <span className="text-xs">{mood.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Daily Inspiration */}
        <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
          <div className="flex items-start gap-3">
            <Moon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-foreground mb-2">Daily Reflection</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{todaysQuote}"</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2 bg-transparent">
            <Heart className="h-4 w-4" />
            Breathing Exercise
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start gap-2 bg-transparent">
            <Sun className="h-4 w-4" />
            Gratitude Journal
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
