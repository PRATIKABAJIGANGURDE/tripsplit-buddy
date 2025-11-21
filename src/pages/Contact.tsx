import { ArrowLeft, Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                        <MessageSquare className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Email</h3>
                                    <p className="text-muted-foreground mb-1">Our friendly team is here to help.</p>
                                    <a href="mailto:support@splitsync.com" className="text-primary hover:underline">support@splitsync.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Office</h3>
                                    <p className="text-muted-foreground mb-1">Come say hello at our office HQ.</p>
                                    <p className="text-muted-foreground">100 Smith Street<br />Collingwood VIC 3066 AU</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Phone</h3>
                                    <p className="text-muted-foreground mb-1">Mon-Fri from 8am to 5pm.</p>
                                    <a href="tel:+15550000000" className="text-primary hover:underline">+1 (555) 000-0000</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                    <Input id="first-name" placeholder="First name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                    <Input id="last-name" placeholder="Last name" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="you@company.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="Leave us a message..." className="min-h-[120px]" required />
                            </div>

                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
