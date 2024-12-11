import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function Verify() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-[380px] px-5 ">
                <CardHeader className="text-center">
                    <div className="mb-4 flex mx-auto size-20 items-center justify-center rounded-full bg-blue-100">
                        <Mail className="size-12 text-blue-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Check your Email</CardTitle>
                    <CardDescription>We have sent a verification link to your email address</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md bg-yellow-50 border-yellow-300 p-4"> 
                        <div className="flex items-center">
                            <AlertCircle  className="size-5 text-yellow-400"/>
                            <p className="font-medium text-yellow-700 ml-2 text-sm">Be sure to check your spam folder!</p>  
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Link href="/" className={buttonVariants({
                        className: "w-full",
                        variant : "outline"
                    })}>
                    <ArrowLeft className="size-4 mr-2" /> Back to Homepge
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
