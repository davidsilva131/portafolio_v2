import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Separator } from "./separator";
import { 
  MapPin, 
  Clock, 
  Globe, 
  Coffee,
  CheckCircle2,
  Timer
} from "lucide-react";

export function LocationCard() {
  const workingHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM", timezone: "EST" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM", timezone: "EST" },
    { day: "Sunday", time: "Closed", timezone: "" }
  ];

  const availability = [
    { type: "Remote Work", status: "Available", icon: CheckCircle2, color: "text-green-500" },
    { type: "Consultations", status: "Open", icon: Coffee, color: "text-blue-500" },
    { type: "New Projects", status: "Available", icon: Timer, color: "text-green-500" }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Location & Availability
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Location Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Based in</p>
              <p className="text-sm text-muted-foreground">Remote / Global</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Primary Timezone</p>
              <p className="text-sm text-muted-foreground">UTC-5 (Eastern Standard Time)</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Working Hours */}
        <div className="space-y-3">
          <h4 className="font-medium">Working Hours</h4>
          <div className="space-y-2">
            {workingHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">{schedule.day}</span>
                <div className="flex items-center gap-2">
                  <span className={schedule.day === "Sunday" ? "text-muted-foreground" : ""}>
                    {schedule.time}
                  </span>
                  {schedule.timezone && (
                    <Badge variant="outline" className="text-xs">
                      {schedule.timezone}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Current Availability */}
        <div className="space-y-3">
          <h4 className="font-medium">Current Availability</h4>
          <div className="space-y-3">
            {availability.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconComponent className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm">{item.type}</span>
                  </div>
                  <Badge 
                    variant={item.status === "Available" || item.status === "Open" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {item.status}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>

        <Separator />

        {/* Quick Note */}
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> I&apos;m always open to discussing interesting projects. 
            Even if I&apos;m currently busy, feel free to reach out and we can schedule 
            something for the future!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
