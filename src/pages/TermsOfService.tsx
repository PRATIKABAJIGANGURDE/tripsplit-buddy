import { ArrowLeft, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                        <ScrollText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Last updated: November 21, 2025
                    </p>
                </div>

                <div className="prose prose-gray max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground">
                            By accessing and using SplitSync, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                        <p className="text-muted-foreground">
                            SplitSync provides users with tools to track and split expenses with friends and groups. You understand and agree that the Service may include advertisements and that these advertisements are necessary for SplitSync to provide the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
                        <p className="text-muted-foreground mb-4">
                            You agree to not use the Service to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Upload, post, email, transmit or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.</li>
                            <li>Harm minors in any way.</li>
                            <li>Impersonate any person or entity, including, but not limited to, a SplitSync official, forum leader, guide or host, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Termination</h2>
                        <p className="text-muted-foreground">
                            You agree that SplitSync may, under certain circumstances and without prior notice, immediately terminate your SplitSync account, any associated email address, and access to the Service. Cause for such termination shall include, but not be limited to, (a) breaches or violations of the TOS or other incorporated agreements or guidelines, (b) requests by law enforcement or other government agencies, (c) a request by you (self-initiated account deletions).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
                        <p className="text-muted-foreground">
                            You expressly understand and agree that your use of the service is at your sole risk. The service is provided on an "as is" and "as available" basis. SplitSync expressly disclaims all warranties of any kind, whether express or implied.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
