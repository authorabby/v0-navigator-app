import { DashboardHeader } from "@/components/dashboard-header"
import { JobManagement } from "@/components/job-management"
import { ProductivityTracker } from "@/components/productivity-tracker"
import { EmotionalHealth } from "@/components/emotional-health"
import { CreativeInspiration } from "@/components/creative-inspiration"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Job Management - Takes full width on mobile, half on desktop */}
          <div className="lg:col-span-2">
            <JobManagement />
          </div>

          {/* Productivity and Emotional Health side by side */}
          <ProductivityTracker />
          <EmotionalHealth />

          {/* Creative Inspiration spans full width */}
          <div className="lg:col-span-2">
            <CreativeInspiration />
          </div>
        </div>
      </main>
    </div>
  )
}
