import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Plus, MapPin, Calendar, ExternalLink } from "lucide-react"

const mockJobs = [
  {
    id: 1,
    company: "TechCorp",
    position: "Frontend Developer",
    location: "Remote",
    status: "interview",
    appliedDate: "2024-01-15",
    progress: 75,
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "San Francisco, CA",
    status: "applied",
    appliedDate: "2024-01-12",
    progress: 25,
  },
  {
    id: 3,
    company: "BigTech Inc",
    position: "React Developer",
    location: "New York, NY",
    status: "rejected",
    appliedDate: "2024-01-08",
    progress: 100,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "interview":
      return "bg-primary text-primary-foreground"
    case "applied":
      return "bg-secondary text-secondary-foreground"
    case "rejected":
      return "bg-destructive text-destructive-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function JobManagement() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Job Applications</CardTitle>
            <CardDescription>Track your application journey</CardDescription>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Application
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockJobs.map((job) => (
            <div key={job.id} className="p-4 rounded-lg border border-border bg-muted/20">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{job.position}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Applied {job.appliedDate}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground">{job.progress}%</span>
                </div>
                <Progress value={job.progress} className="h-2" />
              </div>

              <div className="flex justify-end mt-3">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
