
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AdminLayout from "@/components/layout/AdminLayout"
import { Search } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data - replace with API data later
const policies = [
  {
    id: "POL-001",
    client: "John Doe",
    email: "john@university.edu",
    type: "Personal Accident",
    startDate: "2024-01-15",
    endDate: "2025-01-14",
    status: "Active",
  },
  {
    id: "POL-002",
    client: "Jane Smith",
    email: "jane@university.edu",
    type: "Medical Cover",
    startDate: "2024-02-01",
    endDate: "2025-01-31",
    status: "Active",
  },
]

const Policies = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Insurance Policies</h1>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search policies..."
                className="pl-9"
              />
            </div>
            <Button>Filter</Button>
          </div>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.map((policy) => (
                <TableRow key={policy.id}>
                  <TableCell className="font-medium">{policy.id}</TableCell>
                  <TableCell>{policy.client}</TableCell>
                  <TableCell>{policy.email}</TableCell>
                  <TableCell>{policy.type}</TableCell>
                  <TableCell>{policy.startDate}</TableCell>
                  <TableCell>{policy.endDate}</TableCell>
                  <TableCell>{policy.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Policies
