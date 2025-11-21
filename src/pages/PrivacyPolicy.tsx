import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Last updated: November 21, 2025
                    </p>
                </div>

                <div className="prose prose-gray max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground">
                            Welcome to SplitSync. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
                        <p className="text-muted-foreground mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone number.</li>
                            <li><strong>Financial Data:</strong> includes transaction history and expense details within the app.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website and applications.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
                        <p className="text-muted-foreground mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>To register you as a new customer.</li>
                            <li>To process and deliver your expense splitting services.</li>
                            <li>To manage our relationship with you.</li>
                            <li>To improve our website, products/services, marketing or customer relationships.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                        <p className="text-muted-foreground">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                        <p className="text-muted-foreground">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@splitsync.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
