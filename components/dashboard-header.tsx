import { Waves, Compass, Anchor } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-primary">
              <Anchor className="h-8 w-8" />
              <Waves className="h-6 w-6 opacity-60" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Navigator</h1>
              <p className="text-sm text-muted-foreground">Your job search compass</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Compass className="h-5 w-5" />
              <span className="text-sm">Charting your course</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
