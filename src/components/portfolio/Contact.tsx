import { MapPin, Mail, Phone, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Faridganj, Chandpur, Bangladesh",
    href: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@alaminrafi.com",
    href: "mailto:hello@alaminrafi.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801917443161",
    href: "tel:+8801917443161",
  },
  {
    icon: Globe,
    label: "Website",
    value: "alaminrafi.com",
    href: "https://alaminrafi.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="section-subtitle mx-auto">
            Ready to collaborate? Let's discuss how I can help bring your digital vision to life.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="card-base flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="font-medium text-foreground hover:text-accent transition-colors"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
