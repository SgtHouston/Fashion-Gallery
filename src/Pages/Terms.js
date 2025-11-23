import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../componentcss/Terms.css'

function Terms() {
    return (
        <div className="terms">
            <Header />
            <div className="terms-body">
                <h2 className='terms-title'>Terms of Service and Agreement</h2>
                <br />
                <div className='terms'>
                    <p>At SLR Couture, we specialize in creating one-of-a-kind garments that reflect each client's personal vision and style. By placing a bespoke custom order, clients acknowledge and agree to the following terms and conditions.</p>

                    <p className="terms-header">Commitment to Craftsmanship</p>
                    <p>Each garment is uniquely created to your exact measurements, using the highest level of artistry and technical precision. Our priority is ensuring that you not only receive a beautifully tailored piece but also enjoy the full couture journey from concept to final fitting.</p>

                    <p className="terms-header">Bespoke Service Policy</p>
                    
                    <p className="terms-subheader">Consultations</p>
                    <ul>
                        <li>Consultations are required for all bespoke orders and may be held in person or virtually (via email, FaceTime, or WhatsApp).</li>
                        <li>To ensure availability and quality assurance, we recommend booking consultations at least 6 months prior to your event. Expedited requests may be accommodated depending on our schedule, but will require a fee.</li>
                        <li>Consultation fees must be paid in advance and are non-refundable and non-transferable.</li>
                        <li>Consultation sessions are scheduled for up to 60-120 minutes per client.</li>
                    </ul>

                    <p className="terms-subheader">Pricing</p>
                    <ul>
                        <li>Bespoke garments start at $600 (minimum).</li>
                        <li>Fully hand-beaded ensembles start at $1,500 (minimum).</li>
                        <li>Bridal gowns start from $3,500 (minimum).</li>
                        <li>Final pricing is confirmed during your consultation, based on your selected design, fabrics, and embellishments.</li>
                        <li>For client privacy and exclusivity, SLR Couture does not disclose the pricing of previous garments.</li>
                    </ul>

                    <p className="terms-subheader">Rush Order Conditions:</p>
                    <ul>
                        <li>Orders within 4-6 weeks of the event date require full payment.</li>
                        <li>$300 rush fee added to the payment invoice for expedited service.</li>
                    </ul>

                    <p className="terms-header">Processing Time</p>
                    <p>Processing times are separate from production and estimated delivery times. Please allow the following:</p>
                    <ul>
                        <li>Local (in-town): 24–48 hours</li>
                        <li>Domestic (interstate): 3–5 business days</li>
                        <li>International: 5–10 business days</li>
                    </ul>
                    <p>During peak seasons or high-volume periods, processing times may be extended.</p>

                    <p className="terms-header">Production Timeline</p>
                    <ul>
                        <li>Bespoke garments require 4 to 8 weeks for production, depending on the complexity of the design. Bespoke bridal garments require 32 to 52 weeks.</li>
                        <li>Timelines include sourcing, fittings, handwork, and finishing to ensure the highest level of craftsmanship.</li>
                    </ul>

                    <p className="terms-header">Deposit & Payment Terms</p>
                    <ul>
                        <li>An 80% deposit is required to initiate production on garments priced at $600 and below.</li>
                        <li>The remaining 20% balance plus shipping must be paid in full before delivery.</li>
                        <li>An 60% deposit is required to initiate production on garments priced at $600 - $999.</li>
                        <li>The remaining 40% balance plus shipping must be paid in full before delivery.</li>
                        <li>An 50% deposit is required to initiate production on garments priced at $999 and above. Flex Pay option is available for garments priced above $999.</li>
                        <li>Payments are processed through a secure invoice payment link.</li>
                    </ul>

                    <p className="terms-header">Fabric & Materials</p>
                    <ul>
                        <li>All fabrics and embellishments are exclusively sourced by SLR Couture to maintain quality standards and creative integrity.</li>
                        <li>Client-provided fabrics are not accepted.</li>
                    </ul>

                    <p className="terms-header">Alterations & Cancellations</p>
                    <ul>
                        <li>Once fabric has been purchased and production has commenced, no refunds or exchanges are permitted.</li>
                        <li>Requests to change the agreed design, fabrics, or embellishments after production has begun will result in a fee of at least 50% of the original production cost.</li>
                    </ul>

                    <p className="terms-header">Fittings</p>
                    <ul>
                        <li>Fittings are an essential part of the couture process and require time and patience. Please plan to attend fittings when you are not rushed.</li>
                        <li>Non scheduled fittings will incur an additional fee before booking.</li>
                        <li>Completed garments must be collected within 2 weeks of notification, due to limited storage capacity.</li>
                        <li>Completed garments left beyond 28 calendar days, whether paid or unpaid, may be sold or donated to charity.</li>
                    </ul>

                    <p className="terms-header">Client Responsibility</p>
                    <ul>
                        <li>For garments made with delicate materials (illusion mesh, tulle, or net fabrics), clients assume responsibility for fabric integrity once worn. SLR Couture is not liable for rips, tears, or damage after delivery.</li>
                        <li>Clients are responsible for any costs related to post-wear adjustments.</li>
                    </ul>

                    <p className="terms-header">Pick-Up Service</p>
                    <p>Clients who wish to collect their orders may do so by appointment only. Please call in advance to schedule a pickup.</p>

                    <p className="terms-header">Dispatch Notifications</p>
                    <p>You will receive a dispatch confirmation once your order has been shipped. If you do not receive a notification within the outlined processing period, please contact us at slrcouture@gmail.com, including your order invoice number for reference.</p>

                    <p className="terms-header">Shipping Rates</p>
                    <p>Shipping rates are calculated once your order is completed and will be reflected on your final invoice. Rates vary depending on package weight, dimensions, destination, and courier service. For international shipments, charges may differ significantly due to varying courier costs.</p>

                    <p className="terms-header">Delivery Delays / Item Not Received</p>
                    <p>If your order has not arrived within the estimated delivery window, please allow an additional 2 business days before reaching out to us, as courier processing and delays may occur.</p>
                    <p>Once an order has been dispatched, responsibility for delivery lies with the courier/postal service. Please note: refunds will not be issued for lost or delayed packages.</p>

                    <p className="terms-header">Customs & Duties</p>
                    <p>All international shipments are subject to duties, taxes, and customs fees determined by the importing country's government.</p>
                    <ul>
                        <li>These charges are not included in your order or shipping fees.</li>
                        <li>They are the customer's responsibility and must be paid directly to the customs authority or courier service. SLR Couture has no control over these costs and cannot predict the exact amount.</li>
                    </ul>

                    <p className="terms-header">Travel Service Fees</p>
                    <p>For personal services, the following rates apply:</p>
                    <ul>
                        <li>Within State: $200 per day</li>
                        <li>Out of State: $500 per day</li>
                        <li>International: $1,000 per day</li>
                    </ul>

                    <p className="terms-header">Haute Couture Styling Service</p>
                    <ul>
                        <li>Styling services are available at $1,000 per look, with a minimum of 3 looks per day.</li>
                        <li>A curated mood board will be provided to outline the overall creative direction of the brand.</li>
                        <li>Please note: photographer, hairstylist, makeup artist, and location arrangements are the client's responsibility.</li>
                        <li>Garments are retrieved immediately after photoshoots.</li>
                        <li>A signed styling contract (provided separately) is required before garment release.</li>
                    </ul>

                    <p className="terms-header">Privacy & Terms Agreement</p>
                    <p>This website is operated by SLR Couture and is intended as a creative portfolio. By accessing or using this site, you agree to the following terms.</p>

                    <p className="terms-header">Use of Site</p>
                    <p>The content on this site—including text, images, and designs—is the intellectual property of SLR Couture. You may view and share this site for personal or professional reference, but you may not:</p>
                    <ul>
                        <li>Copy, reproduce, or distribute site content without permission.</li>
                        <li>Use the site for unlawful or unauthorized purposes.</li>
                        <li>Violate intellectual property rights of SLR Couture or others.</li>
                        <li>Upload or transmit malicious code, spam, or disruptive content.</li>
                        <li>Misrepresent or misuse information from this site.</li>
                    </ul>
                    <p>We reserve the right to restrict or terminate access if these terms are violated.</p>

                    <p className="terms-header">Accuracy of Information</p>
                    <p>The material on this site is provided for general and creative reference only. While we make every effort to ensure accuracy, we do not guarantee that all information presented is current, complete, or free from error. Any reliance on the material on this site is at your own discretion and risk.</p>

                    <p className="terms-header">Changes and Updates</p>
                    <p>We may revise or update the content, policies, or terms on this site at any time without prior notice. Continued use of the site constitutes acceptance of those changes.</p>

                    <p className="terms-header">Privacy Policy</p>
                    <p>At SLR Couture, we value your privacy and are committed to protecting your personal information. This site is operated by SLR Couture and designed as a portfolio showcase and does not collect personal data for sales or marketing. Throughout this site, the terms "we," "us," and "our" refer to SLR Couture. By accessing or using this site, you agree to the following terms and conditions.</p>
                    <p>Personal information shared through this site (such as via email inquiries) will be used solely for communication with SLR Couture and will not be sold or shared with third parties without consent.</p>

                    <p className="terms-header">Information We Collect</p>
                    <ul>
                        <li>When you contact us (via email or contact form), we may collect your name, email, and any information you provide voluntarily.</li>
                        <li>We do not sell, rent, or share your personal information with third parties.</li>
                    </ul>

                    <p className="terms-header">How We Use Information</p>
                    <ul>
                        <li>To respond to inquiries and communicate with you.</li>
                        <li>To improve our website's content and user experience.</li>
                    </ul>

                    <p className="terms-header">Cookies & Analytics</p>
                    <p>This site may use basic cookies or analytics tools to monitor general traffic and performance. These tools do not collect personally identifiable information.</p>

                    <p className="terms-header">Security</p>
                    <p>We take reasonable precautions to protect your information. However, no online transmission or storage system can be guaranteed to be 100% secure.</p>

                    <p className="terms-header">Updates to This Policy</p>
                    <p>We may revise or update the content, policies, or terms on this site at any time without prior notice. Continued use of the site constitutes acceptance of those changes.</p>

                    <p className="terms-header">Contact Information</p>
                    <p>Questions about the Terms of Service should be sent to us at slrcouture@gmail.com.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Terms;
