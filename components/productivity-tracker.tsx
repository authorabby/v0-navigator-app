import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, Target, TrendingUp } from "lucide-react"

const todaysTasks = [
  { id: 1, task: "Update resume with latest project", completed: true },
  { id: 2, task: "Research 3 new companies", completed: true },
  { id: 3, task: "Practice coding interview questions", completed: false },
  { id: 4, task: "Follow up on TechCorp application", completed: false },
]

const weeklyStats = {
  applicationsSubmitted: 5,
  interviewsScheduled: 2,
  networkingConnections: 8,
  skillsPracticed: 12,
}

export function ProductivityTracker() {
  const completedTasks = todaysTasks.filter((task) => task.completed).length
  const completionRate = (completedTasks / todaysTasks.length) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Productivity
        </CardTitle>
        <CardDescription>Today's progress and weekly stats</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Daily Tasks */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-foreground">Today's Tasks</h3>
            <span className="text-sm text-muted-foreground">
              {completedTasks}/{todaysTasks.length}
            </span>
          </div>
          <Progress value={completionRate} className="mb-4 h-2" />
          <div className="space-y-2">
            {todaysTasks.map((task) => (
              <div key={task.id} className="flex items-center gap-3">
                {task.completed ? (
                  <CheckCircle className="h-4 w-4 text-primary" />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground" />
                )}
                <span
                  className={`text-sm ${task.completed ? "text-muted-foreground line-through" : "text-foreground"}`}
                >
                  {task.task}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Stats */}
        <div>
          <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            This Week
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="text-lg font-bold text-primary">{weeklyStats.applicationsSubmitted}</div>
              <div className="text-xs text-muted-foreground">Applications</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="text-lg font-bold text-accent">{weeklyStats.interviewsScheduled}</div>
              <div className="text-xs text-muted-foreground">Interviews</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="text-lg font-bold text-chart-3">{weeklyStats.networkingConnections}</div>
              <div className="text-xs text-muted-foreground">Connections</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="text-lg font-bold text-chart-4">{weeklyStats.skillsPracticed}</div>
              <div className="text-xs text-muted-foreground">Skills Practiced</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
