import { ArrowLeft, Shield, Lock, Eye, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Security = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Security at SplitSync</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Your financial data and privacy are our top priorities. We use bank-grade security measures to protect your information.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="p-6 rounded-2xl border border-border bg-card">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                        <p className="text-muted-foreground">
                            All data transmitted between your device and our servers is encrypted using industry-standard TLS 1.3 protocols.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border bg-card">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                            <Eye className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                        <p className="text-muted-foreground">
                            We never sell your personal data. Your transaction history is yours alone and is only shared with the friends you choose.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border bg-card">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                            <Server className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Secure Infrastructure</h3>
                        <p className="text-muted-foreground">
                            Our servers are hosted in secure data centers with 24/7 monitoring and regular security audits.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border bg-card">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Regular Audits</h3>
                        <p className="text-muted-foreground">
                            We perform regular security audits and penetration testing to identify and fix potential vulnerabilities.
                        </p>
                    </div>
                </div>

                <div className="prose prose-gray max-w-none">
                    <h2>Data Protection</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, or damage.
                    </p>

                    <h2>Account Security</h2>
                    <p>
                        We recommend using a strong, unique password for your account. We also offer two-factor authentication (2FA) for an added layer of security.
                    </p>

                    <h2>Reporting Vulnerabilities</h2>
                    <p>
                        If you believe you have found a security vulnerability in SplitSync, please report it to us immediately at security@splitsync.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Security;
