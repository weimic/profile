import { AppWindowIcon, CodeIcon, UserIcon, FileText, CodeXml, ArrowDownToLine, Baby,Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function BlobTab() {
    return (
        <div className="">
            <Tabs defaultValue="about">
        <TabsList>
          <TabsTrigger value="about"><FileText/>About</TabsTrigger>
          <TabsTrigger value="authors"><UserIcon/>Authors</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <Card className="w-70">
            <CardHeader>
              <CardTitle className="flex"><FileText size={16} className="mr-1"/>About</CardTitle>
              <CardDescription className="text-alt-foreground">
                Blob Showdown is a 2-dimensional projectile game developed as our final project for AP CSA. Two troopers battle in a randomly-generated maze. First to five points wins!
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="tabs-demo-current" className="flex"><CodeXml size={16} className="-mr-1"/>Languages & Libraries</Label>
                <CardDescription  className="text-alt-foreground">
                  Java, Swing
                </CardDescription>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tabs-demo-new" className="flex"><ArrowDownToLine size={16} className="-mr-1"/>File Size</Label>
                <CardDescription className="text-alt-foreground">
                  181 MB
                </CardDescription>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tabs-demo-new" className="flex"><Baby size={16} className="-mr-1"/>Trooper Types</Label>
                <CardDescription className="text-alt-foreground">
                  Machine Gun, Light Machine Gun, Heavy Machine Gun, Shotgun, Sniper, DoubleShot
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="authors">
          <Card className="w-50">
            <CardHeader className="-mb-3">
              <CardTitle className="flex"><UserIcon size={16} className="mr-1"/>Authors</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-0 text-[14px] font-normal">
              <div>Alexander Song</div>
              <div>Shirley Xiong</div>
              <div>Michael Wei</div>
            </CardContent>
          </Card>
        </TabsContent>
        
      </Tabs>
        </div>
    );
    
}